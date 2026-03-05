// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import {IDistributionModule} from "../../interfaces/IDistributionModule.sol";
import {Claim, TransferInstruction, TokenType, Token} from "../../types/Token.sol";
import {PreHookResult} from "../../types/PreHookResult.sol";
import {BaseModule} from "../BaseModule.sol";

/**
 * @title Vesting Distribution Module
 * @notice Linearly unlocks tokens over a specific duration.
 */
contract VestingDistributionModule is IDistributionModule, BaseModule {

  /* -------------------------------------------------------------------------- */
  /* STATE VARIABLES & STRUCTS                                                  */
  /* -------------------------------------------------------------------------- */

  mapping(address => uint256) public poolStartTimes;
  mapping(address => mapping(uint256 => uint256)) public alreadyClaimed;

  struct Config {
    TokenType tokenType;
    Token token;
    address recipient;
    uint256 tokenId;
    uint256 totalAllocation;
    uint256 duration;
  }

  error PoolNotInitialized();

  /* -------------------------------------------------------------------------- */
  /* MODULE INTERFACE FUNCTIONS                                                 */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IModule
  function moduleId() external pure override returns (string memory) {
    return "mutuals.vesting-distribution-module.1.0.0";
  }

  /// @inheritdoc IModule
  function onInstall(bytes calldata data) external override {
    if (data.length > 0) {
      poolStartTimes[msg.sender] = abi.decode(data, (uint256));
    } else {
      poolStartTimes[msg.sender] = block.timestamp;
    }
  }

  /// @inheritdoc IModule
  function onUninstall(bytes calldata /* data */) external override {
    delete poolStartTimes[msg.sender];
  }

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
    return (config.totalAllocation, 0, false);
  }

  /// @inheritdoc IDistributionModule
  function totalAllocated(Claim calldata claim, uint256 /* totalPoolInflow */) external pure override returns (uint256) {
    Config memory config = abi.decode(claim.distributorData, (Config));
    return config.totalAllocation;
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
    uint256 startTime = poolStartTimes[msg.sender];

    if (startTime == 0) revert PoolNotInitialized();

    uint256 totalVested = 0;
    if (block.timestamp >= startTime + config.duration) {
      totalVested = config.totalAllocation;
    } else if (block.timestamp > startTime) {
      uint256 timePassed = block.timestamp - startTime;
      totalVested = (config.totalAllocation * timePassed) / config.duration;
    }

    uint256 claimed = alreadyClaimed[msg.sender][claim.id];
    uint256 available = totalVested > claimed ? totalVested - claimed : 0;

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
