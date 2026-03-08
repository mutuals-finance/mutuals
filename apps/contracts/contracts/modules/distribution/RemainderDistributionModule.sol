// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";

import {IPool} from "../../interfaces/IPool.sol";
import {IDistributionModule} from "../../interfaces/IDistributionModule.sol";
import {Claim, TransferInstruction, TokenType, Token} from "../../types/Token.sol";
import {PreHookResult} from "../../types/PreHookResult.sol";
import {BaseModule} from "../BaseModule.sol";

/**
 * @title Remainder Distribution Module
 * @notice Highly optimized remainder calculation utilizing off-chain aggregated static values.
 * Only loops over truly dynamic, non-aggregable sibling modules to save gas.
 */
contract RemainderDistributionModule is IDistributionModule, BaseModule {

  /* -------------------------------------------------------------------------- */
  /* STATE VARIABLES & STRUCTS                                                  */
  /* -------------------------------------------------------------------------- */

  mapping(address => mapping(uint256 => uint256)) public alreadyClaimed;

  struct Config {
    TokenType tokenType;
    Token token;
    address recipient;
    uint256 tokenId;
    uint256 fixedDeductions;    // Sum of all static absolute token amounts from siblings
    uint256 bpsDeductions;      // Sum of all static relative basis points from siblings (10000 = 100%)
    Claim[] dynamicSiblings;    // Array containing ONLY the siblings that require on-chain execution
  }

  error AllocationExceedsPool();

  /* -------------------------------------------------------------------------- */
  /* MODULE INTERFACE FUNCTIONS                                                 */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IModule
  function moduleId() external pure override returns (string memory) {
    return "mutuals.remainder-distribution-module.1.0.0";
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
  function aggregationParameters(Claim calldata /* claim */) external pure override returns (uint256, uint256, bool) {
    // A remainder is inherently dynamic, as it depends on total pool inflow and other dynamic modules
    return (0, 0, true);
  }

  /// @inheritdoc IDistributionModule
  function totalAllocated(Claim calldata claim, uint256 totalPoolInflow) external view override returns (uint256) {
    Config memory config = abi.decode(claim.distributorData, (Config));

    // Process off-chain aggregated sums in O(1) time
    uint256 allocatedToSiblings = config.fixedDeductions;
    if (config.bpsDeductions > 0) {
      allocatedToSiblings += Math.mulDiv(totalPoolInflow, config.bpsDeductions, 10000);
    }

    // Process only complex modules on-chain in O(N) time
    if (config.dynamicSiblings.length > 0) {
      allocatedToSiblings += _sumDynamicSiblings(config.dynamicSiblings, totalPoolInflow);
    }

    if (allocatedToSiblings > totalPoolInflow) return 0;
    return totalPoolInflow - allocatedToSiblings;
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

    if (inst.amount == 0 && inst.tokenId == 0 && inst.tokenType != TokenType.ERC721) {
      revert AllocationExceedsPool();
    }

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

    uint256 currentBalance = _poolBalance(msg.sender, config.token, config.tokenType);
    uint256 historicalReleased = IPool(msg.sender).totalReleased(Token.unwrap(config.token));
    uint256 totalPoolInflow = currentBalance + historicalReleased;

    // Evaluate exact math: R = Inflow - Absolute - (Inflow * Relative) - sum(Dynamic)
    uint256 allocatedToSiblings = config.fixedDeductions;
    if (config.bpsDeductions > 0) {
      allocatedToSiblings += Math.mulDiv(totalPoolInflow, config.bpsDeductions, 10000);
    }
    if (config.dynamicSiblings.length > 0) {
      allocatedToSiblings += _sumDynamicSiblings(config.dynamicSiblings, totalPoolInflow);
    }

    uint256 totalRemainder = 0;
    if (totalPoolInflow > allocatedToSiblings) {
      totalRemainder = totalPoolInflow - allocatedToSiblings;
    }

    uint256 claimed = alreadyClaimed[msg.sender][claim.id];
    uint256 available = totalRemainder > claimed ? totalRemainder - claimed : 0;

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

  function _sumDynamicSiblings(Claim[] memory dynamicSiblings, uint256 totalPoolInflow) internal view returns (uint256) {
    uint256 totalAllocatedSiblings = 0;
    for (uint256 i = 0; i < dynamicSiblings.length; i++) {
      totalAllocatedSiblings += IDistributionModule(dynamicSiblings[i].distributorModule).totalAllocated(
        dynamicSiblings[i],
        totalPoolInflow
      );
    }
    return totalAllocatedSiblings;
  }

  function _poolBalance(address pool, Token token, TokenType tokenType) internal view returns (uint256) {
    if (tokenType == TokenType.NATIVE) {
      return pool.balance;
    } else if (tokenType == TokenType.ERC20) {
      return IERC20(Token.unwrap(token)).balanceOf(pool);
    }
    return 0;
  }
}
