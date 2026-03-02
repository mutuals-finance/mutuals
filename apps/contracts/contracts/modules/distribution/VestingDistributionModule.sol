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
 * @dev Replaces the legacy 'TimelockAllocation' extension.
 */
contract VestingDistributionModule is IDistributionModule, BaseModule {
  // mapping(pool => poolStartTime)
  mapping(address => uint256) public poolStartTimes;
  // mapping(pool => mapping(claimId => claimedAmount))
  mapping(address => mapping(uint256 => uint256)) public alreadyClaimed;

  struct VestingConfig {
    TokenType tokenType;
    Token token;
    address recipient;
    uint256 tokenId;
    uint256 totalAllocation;
    uint256 duration;
  }

  error PoolNotInitialized();

  function moduleId() external pure override returns (string memory) {
    return "mutuals.vesting-distribution-module.1.0.0";
  }

  /**
   * @notice Sets the global start time for the pool.
   * @param data ABI-encoded uint256 representing the start timestamp.
   */
  function onInstall(bytes calldata data) external override {
    if (data.length > 0) {
      poolStartTimes[msg.sender] = abi.decode(data, (uint256));
    } else {
      poolStartTimes[msg.sender] = block.timestamp;
    }
  }

  function onUninstall(bytes calldata /* data */) external override {
    delete poolStartTimes[msg.sender];
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override(BaseModule, IERC165) returns (bool) {
    return interfaceId == type(IDistributionModule).interfaceId || super.supportsInterface(interfaceId);
  }

  function releasable(Claim calldata claim, bytes calldata distributionArgs) external view override returns (TransferInstruction memory) {
    return _releasable(claim, distributionArgs);
  }

  function preDistributionHook(Claim calldata claim, bytes calldata distributionArgs) external override returns (PreHookResult memory) {
    TransferInstruction memory inst = _releasable(claim, distributionArgs);
    bytes memory context = abi.encode(inst.amount);

    return PreHookResult({
      instruction: inst,
      postHookContext: context,
      requiresPostHook: true
    });
  }

  function postDistributionHook(Claim calldata claim, bytes calldata distributionContext) external override {
    uint256 claimedNow = abi.decode(distributionContext, (uint256));
    alreadyClaimed[msg.sender][claim.id] += claimedNow;
  }

  function _releasable(Claim calldata claim, bytes calldata distributionArgs) internal view returns (TransferInstruction memory) {
    VestingConfig memory config = abi.decode(claim.distributorData, (VestingConfig));
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
