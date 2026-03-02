// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import {IDistributionModule} from "../interfaces/IDistributionModule.sol";
import {Claim, TransferInstruction, PreHookResult, TokenType, Token} from "../types/Token.sol";
import {BaseModule} from "./BaseModule.sol";

/**
 * @title Priority Distribution Module
 * @notice Enforces waterfall/priority logic. A claim can only be executed if a
 * predefined "previous claim" meets a specific releasable threshold.
 * @dev Replaces the legacy 'PriorityAllocation' extension.
 */
contract PriorityDistributionModule is IDistributionModule, BaseModule {
  mapping(address => mapping(uint256 => uint256)) public alreadyClaimed;

  // We embed the previous claim directly into the static configuration
  struct PriorityConfig {
    TokenType tokenType;
    Token token;
    address recipient;
    uint256 tokenId;
    uint256 maxAllocation;
    Claim previousClaim; // The "Senior" claim that must be checked
    uint256 threshold;   // The releasable threshold condition
  }

  error PriorityConditionNotMet();

  // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  // ┃    Module interface functions    ┃
  // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

  function moduleId() external pure override returns (string memory) {
    return "mutuals.priority-distribution-module.1.0.0";
  }

  function onInstall(bytes calldata /* data */) external override {}
  function onUninstall(bytes calldata /* data */) external override {}

  function supportsInterface(bytes4 interfaceId) public view virtual override(BaseModule) returns (bool) {
    return interfaceId == type(IDistributionModule).interfaceId || super.supportsInterface(interfaceId);
  }

  // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  // ┃    Distribution functions        ┃
  // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

  function releasable(Claim calldata claim, bytes calldata distributionArgs) external view override returns (TransferInstruction memory) {
    return _releasable(claim, distributionArgs);
  }

  function preDistributionHook(Claim calldata claim, bytes calldata distributionArgs) external override returns (PreHookResult memory) {
    TransferInstruction memory inst = _releasable(claim, distributionArgs);

    if (inst.amount == 0 && inst.tokenId == 0) revert PriorityConditionNotMet();

    bytes memory context = abi.encode(inst.amount);

    return PreHookResult({
      instruction: inst,
      distributionContext: context,
      requiresPostHook: true
    });
  }

  function postDistributionHook(Claim calldata claim, bytes calldata distributionContext) external override {
    uint256 claimedNow = abi.decode(distributionContext, (uint256));
    alreadyClaimed[msg.sender][claim.id] += claimedNow;
  }

  // --- Internal Logic ---

  function _releasable(Claim calldata claim, bytes calldata distributionArgs) internal view returns (TransferInstruction memory) {
    PriorityConfig memory config = abi.decode(claim.distributionData, (PriorityConfig));

    // 1. Evaluate the Priority Condition by querying the other module
    // We fetch the current releasable amount of the "previousClaim"
    TransferInstruction memory previousInst = IDistributionModule(config.previousClaim.distributionModule)
      .releasable(config.previousClaim, ""); // Passing empty args for the previous claim check

    // If previous releasable <= threshold, execution is blocked.
    // (e.g., "Do not allow Junior to claim if Senior's releasable balance has dropped below X")
    // If your business logic is actually "Wait until Senior is fully paid out (releasable == 0)",
    // you would change this operator to `previousInst.amount > 0`.
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

    // 2. If priority is satisfied, calculate this claim's standard allocation
    uint256 claimed = alreadyClaimed[msg.sender][claim.id];
    uint256 available = config.maxAllocation > claimed ? config.maxAllocation - claimed : 0;

    // Optional: Allow the user to request a partial claim via distributionArgs
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
