// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import { IPool } from "../interfaces/IPool.sol";
import { IDistributionModule } from "../interfaces/IDistributionModule.sol";
import { IModule } from "../interfaces/IModule.sol";
import { IValidationModule } from "../interfaces/IValidationModule.sol";
import { IModuleRegistry } from "../interfaces/IModuleRegistry.sol";

import { Initializable } from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import { UUPSUpgradeable } from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import { OwnableUpgradeable } from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import { PausableUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import { ReentrancyGuardUpgradeable } from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";

import { PoolStorage, getPoolStorage } from "./PoolStorage.sol";
import { TokenLibrary, Token, TokenType, Claim, TransferInstruction } from "../types/Token.sol";
import { PreHookResult } from "../types/PreHookResult.sol";

/**
 * @title Pool
 * @notice A modular execution pool separating validation and distribution logic.
 */
contract Pool is
  IPool,
  Initializable,
  UUPSUpgradeable,
  OwnableUpgradeable,
  PausableUpgradeable,
  ReentrancyGuardUpgradeable
{
  using TokenLibrary for Token;

  /* -------------------------------------------------------------------------- */
  /* STATE VARIABLES                                                            */
  /* -------------------------------------------------------------------------- */

  /// @notice Global protocol registry for module attestations.
  /// @dev Stored in ERC-7201 namespaced storage to work with beacon proxies.
  function registry() public view returns (IModuleRegistry) {
    return getPoolStorage().registry;
  }

  /* -------------------------------------------------------------------------- */
  /* INITIALIZATION                                                             */
  /* -------------------------------------------------------------------------- */

  /// @custom:oz-upgrades-unsafe-allow constructor
  constructor() {
    _disableInitializers();
  }

  /**
   * @notice Initializes the proxy clone of the pool.
   * @param _registry The protocol registry for module attestations.
   * @param initialOwner The admin of this pool.
   * @param initialModules The modules to be installed immediately.
   * @param initialModuleData The setup data for the initial modules.
   * @param _trustedAttesters The list of auditors/entities this pool trusts for module security.
   */
  function initialize(
    address _registry,
    address initialOwner,
    address[] calldata initialModules,
    bytes[] calldata initialModuleData,
    address[] calldata _trustedAttesters
  ) public initializer {
    if (_registry == address(0)) revert InvalidModuleAddress();

    __Ownable_init(initialOwner);
    __UUPSUpgradeable_init();
    __Pausable_init();
    __ReentrancyGuard_init();

    uint256 len = initialModules.length;
    if (len != initialModuleData.length) revert ArrayLengthMismatch();

    // Set the registry in ERC-7201 storage
    getPoolStorage().registry = IModuleRegistry(_registry);

    // Set the trusted attesters in ERC-7201 storage
    getPoolStorage().trustedAttesters = _trustedAttesters;

    for (uint256 i = 0; i < len; ++i) {
      _installModule(initialModules[i], initialModuleData[i]);
    }
  }

  /* -------------------------------------------------------------------------- */
  /* ADMIN FUNCTIONS                                                            */
  /* -------------------------------------------------------------------------- */

  function pause() external onlyOwner {
    _pause();
  }

  function unpause() external onlyOwner {
    _unpause();
  }

  /// @inheritdoc IPool
  function updateTrustedAttesters(address[] calldata newAttesters) external override onlyOwner {
    getPoolStorage().trustedAttesters = newAttesters;
    emit TrustedAttestersUpdated(newAttesters);
  }

  /// @inheritdoc IPool
  function installModule(address module, bytes calldata data) external override onlyOwner {
    _installModule(module, data);
  }

  function installModuleBatch(address[] calldata modules, bytes[] calldata data) external onlyOwner {
    uint256 len = modules.length;
    if (len != data.length) revert ArrayLengthMismatch();

    for (uint256 i = 0; i < len; ++i) {
      _installModule(modules[i], data[i]);
    }
  }

  function _installModule(address module, bytes calldata data) internal {
    if (module == address(0)) revert InvalidModuleAddress();

    // Does this module have a valid attestation from an entity we trust?
    if (!registry().isAttestedByAny(module, getPoolStorage().trustedAttesters)) {
      revert UntrustedModule(module);
    }

    getPoolStorage().installedModules[module] = true;

    IModule(module).onInstall(data);

    emit ModuleInstalled(module, data);
  }

  /* -------------------------------------------------------------------------- */
  /* EXECUTION FUNCTIONS                                                        */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IPool
  function releaseSingle(
    Claim calldata claim,
    bytes calldata validationArgs,
    bytes calldata distributionArgs
  ) external override whenNotPaused nonReentrant {
    if (!getPoolStorage().installedModules[claim.validationModule]) revert ModuleNotInstalled(claim.validationModule);

    // 1. Validate Integrity
    IValidationModule(claim.validationModule).validateRuntime(claim, validationArgs);

    // 2. Distribute & Transfer
    _processDistribution(claim, distributionArgs);

    emit ReleaseSingle(claim);
  }

  /// @inheritdoc IPool
  function release(
    Claim[] calldata claims,
    bytes[] calldata validationArgs,
    bytes[] calldata distributionArgs
  ) external override whenNotPaused nonReentrant {
    uint256 len = claims.length;
    if (len == 0) revert EmptyClaims();
    if (len != validationArgs.length || len != distributionArgs.length) revert ArrayLengthMismatch();

    // 1. Validate Integrity (Batched)
    _processBatchedValidation(claims, validationArgs);

    uint256 totalAmount = 0;
    TransferInstruction memory aggInst;
    bytes[] memory distributionContexts = new bytes[](len);
    bool[] memory requiresPostHook = new bool[](len);

    // 2. Compute Flow & Aggregate
    for (uint256 i = 0; i < len; i++) {
      Claim calldata claim = claims[i];

      if (!getPoolStorage().installedModules[claim.distributorModule]) revert ModuleNotInstalled(claim.distributorModule);

      PreHookResult memory res;
      try IDistributionModule(claim.distributorModule).preDistributionHook(claim, distributionArgs[i]) returns (PreHookResult memory _res) {
        res = _res;
      } catch (bytes memory reason) {
        revert ExecutionReverted(claim.distributorModule, reason);
      }

      if (i == 0) {
        aggInst = res.instruction;
        totalAmount = res.instruction.amount;
        if (aggInst.tokenType == TokenType.ERC721) revert CannotAggregateERC721();
      } else {
        if (
          res.instruction.tokenType != aggInst.tokenType ||
          !res.instruction.token.equals(aggInst.token) ||
          res.instruction.recipient != aggInst.recipient ||
          (aggInst.tokenType == TokenType.ERC1155 && res.instruction.tokenId != aggInst.tokenId)
        ) {
          revert AggregationMismatch();
        }
        totalAmount += res.instruction.amount;
      }

      distributionContexts[i] = res.postHookContext;
      requiresPostHook[i] = res.requiresPostHook;
    }

    // 3. Settlement (Aggregated Transfer)
    if (totalAmount > 0) {
      aggInst.amount = totalAmount;
      _executeTransfer(aggInst);
    }

    // 4. State Update (Post Hooks)
    for (uint256 i = 0; i < len; i++) {
      if (requiresPostHook[i]) {
        try IDistributionModule(claims[i].distributorModule).postDistributionHook(claims[i], distributionContexts[i]) {}
        catch (bytes memory reason) { revert ExecutionReverted(claims[i].distributorModule, reason); }
      }
    }

    emit Release(claims);
  }

  /// @inheritdoc IPool
  function releaseSeparate(
    Claim[] calldata claims,
    bytes[] calldata validationArgs,
    bytes[] calldata distributionArgs
  ) external override whenNotPaused nonReentrant {
    uint256 len = claims.length;
    if (len == 0) revert EmptyClaims();
    if (len != validationArgs.length || len != distributionArgs.length) revert ArrayLengthMismatch();

    // 1. Validate Integrity (Batched)
    _processBatchedValidation(claims, validationArgs);

    // 2. Distribute & Transfer (Separately)
    for (uint256 i = 0; i < len; i++) {
      _processDistribution(claims[i], distributionArgs[i]);
    }

    emit Release(claims);
  }

  /* -------------------------------------------------------------------------- */
  /* INTERNAL / VIEW FUNCTIONS                                                  */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IPool
  function totalReleased(address token) external view override returns (uint256) {
    return getPoolStorage().totalReleased[token];
  }

  /**
   * @notice Validates all claims individually - more gas efficient than batching with array copies
   * @dev Claims are validated one by one. Module lookup is cached when the same validator is used consecutively.
   */
  function _processBatchedValidation(Claim[] calldata claims, bytes[] calldata validationArgs) internal view {
    uint256 len = claims.length;
    address cachedValidator = address(0);
    bool isCachedValidatorInstalled = false;

    for (uint256 i = 0; i < len; i++) {
      address validator = claims[i].validationModule;

      // Cache validator check to save gas when same validator is used consecutively
      if (validator != cachedValidator) {
        cachedValidator = validator;
        isCachedValidatorInstalled = getPoolStorage().installedModules[validator];
        if (!isCachedValidatorInstalled) revert ModuleNotInstalled(validator);
      }

      // Validate each claim individually - no array copying needed
      IValidationModule(validator).validateRuntime(claims[i], validationArgs[i]);
    }
  }

  function _processDistribution(Claim calldata claim, bytes calldata distributionArgs) internal {
    if (!getPoolStorage().installedModules[claim.distributorModule]) revert ModuleNotInstalled(claim.distributorModule);

    // 1. Compute Flow
    PreHookResult memory res;
    try IDistributionModule(claim.distributorModule).preDistributionHook(claim, distributionArgs) returns (PreHookResult memory _res) {
      res = _res;
    } catch (bytes memory reason) {
      revert ExecutionReverted(claim.distributorModule, reason);
    }

    // 2. Settlement
    _executeTransfer(res.instruction);

    // 3. State Update
    if (res.requiresPostHook) {
      try IDistributionModule(claim.distributorModule).postDistributionHook(claim, res.postHookContext) {}
      catch (bytes memory reason) { revert ExecutionReverted(claim.distributorModule, reason); }
    }
  }

  function _executeTransfer(TransferInstruction memory inst) internal {
    if (inst.amount == 0 && inst.tokenId == 0 && inst.tokenType != TokenType.ERC721) return;

    inst.token.executeTransfer(
      inst.tokenType,
      inst.recipient,
      inst.tokenId,
      inst.amount,
      inst.data
    );

    if (inst.tokenType != TokenType.ERC721) {
      getPoolStorage().totalReleased[Token.unwrap(inst.token)] += inst.amount;
    }
  }

  function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

  receive() external payable {}
}
