// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import {IDistributionModule} from "../../interfaces/IDistributionModule.sol";
import {Claim, TransferInstruction, TokenType, Token} from "../../types/Token.sol";
import {PreHookResult} from "../../types/PreHookResult.sol";
import {BaseModule} from "../BaseModule.sol";

/**
 * @title Priority Distribution Module
 * @notice Enforces waterfall/priority logic based on previous claims.
 */
contract PriorityDistributionModule is IDistributionModule, BaseModule {

  /* -------------------------------------------------------------------------- */
  /* STATE VARIABLES & STRUCTS                                                  */
  /* -------------------------------------------------------------------------- */

  mapping(address => mapping(uint256 => uint256)) public alreadyClaimed;

  struct Config {
    TokenType tokenType;
    Token token;
    address recipient;
    uint256 tokenId;
    uint256 maxAllocation;
    Claim previousClaim;
    uint256 threshold;
  }

  error PriorityConditionNotMet();

  /* -------------------------------------------------------------------------- */
  /* MODULE INTERFACE FUNCTIONS                                                 */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IModule
  function moduleId() external pure override returns (string memory) {
    return "mutuals.priority-distribution-module.1.0.0";
  }

  /// @inheritdoc IModule
  function onInstall(bytes calldata /* data */) external override {}

  /// @inheritdoc IModule
  function onUninstall(bytes calldata /* data */) external override {}

  /// @inheritdoc IERC165
  function supportsInterface(bytes4 interfaceId) public view virtual override(BaseModule, IERC165) returns (bool) {
    return interfaceId == type(IDistributionModule).interfaceId || super.supportsInterface(interfaceId);
  }

  /* -------------------------------------------------------------------------- */
  /* AGGREGATION & ALLOCATION                                                   */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IDistributionModule
  function aggregationParameters(Claim calldata claim) external pure override returns (uint256, uint256, bool) {
    Config memory config = abi.decode(claim.distributorData, (Config));
    return (config.maxAllocation, 0, false);
  }

  /// @inheritdoc IDistributionModule
  function totalAllocated(Claim calldata claim, uint256 /* totalPoolInflow */) external pure override returns (uint256) {
    Config memory config = abi.decode(claim.distributorData, (Config));
    return config.maxAllocation;
  }

  /* -------------------------------------------------------------------------- */
  /* DISTRIBUTION FUNCTIONS                                                     */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IDistributionModule
  function releasable(Claim calldata claim, bytes calldata distributionArgs) external view override returns (TransferInstruction memory) {
    return _releasable(claim, distributionArgs);
  }

  /// @inheritdoc IDistributionModule
  function preDistributionHook(Claim calldata claim, bytes calldata distributionArgs) external override returns (PreHookResult memory) {
    TransferInstruction memory inst = _releasable(claim, distributionArgs);

    if (inst.amount == 0 && inst.tokenId == 0) revert PriorityConditionNotMet();

    return PreHookResult({
      instruction: inst,
      postHookContext: abi.encode(inst.amount),
      requiresPostHook: true
    });
  }

  /// @inheritdoc IDistributionModule
  function postDistributionHook(Claim calldata claim, bytes calldata distributionContext) external override {
    uint256 claimedNow = abi.decode(distributionContext, (uint256));
    alreadyClaimed[msg.sender][claim.id] += claimedNow;
  }

  /* -------------------------------------------------------------------------- */
  /* INTERNAL LOGIC                                                             */
  /* -------------------------------------------------------------------------- */

  function _releasable(Claim calldata claim, bytes calldata distributionArgs) internal view returns (TransferInstruction memory) {
    Config memory config = abi.decode(claim.distributorData, (Config));

    TransferInstruction memory previousInst = IDistributionModule(config.previousClaim.distributorModule)
      .releasable(config.previousClaim, "");

    if (previousInst.amount <= config.threshold) {
      return TransferInstruction({
        tokenType: config.tokenType,
        token: config.token,
        recipient: config.recipient,
        tokenId: config.tokenId,
        amount: 0,
        data: ""
      });
    }

    uint256 claimed = alreadyClaimed[msg.sender][claim.id];
    uint256 available = config.maxAllocation > claimed ? config.maxAllocation - claimed : 0;

    if (distributionArgs.length > 0 && available > 0) {
      uint256 requestedAmount = abi.decode(distributionArgs, (uint256));
      if (requestedAmount > 0 && requestedAmount < available) {
        available = requestedAmount;
      }
    }

    return TransferInstruction({
      tokenType: config.tokenType,
      token: config.token,
      recipient: config.recipient,
      tokenId: config.tokenId,
      amount: available,
      data: ""
    });
  }
}
