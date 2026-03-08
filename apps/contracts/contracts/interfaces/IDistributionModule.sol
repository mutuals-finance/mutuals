// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import {Claim, TransferInstruction} from "../types/Token.sol";
import {PreHookResult} from "../types/PreHookResult.sol";
import {IModule} from "./IModule.sol";

/**
 * @title IDistributionModule
 * @notice Interface for modules responsible for calculating financial flows and managing claim states.
 */
interface IDistributionModule is IModule {
  /**
   * @notice Returns the aggregation parameters of the claim for off-chain compilation.
   * @dev Allows off-chain scripts to sum up static allocations (fixed and percentage) to save gas.
   * @param claim The static claim data.
   * @return absoluteAmount The fixed token amount (if any).
   * @return bpsMultiplier The percentage in basis points (10000 = 100%) (if any).
   * @return isDynamic True if the module requires on-chain execution to determine its target allocation.
   */
  function aggregationParameters(Claim calldata claim) external view returns (
    uint256 absoluteAmount,
    uint256 bpsMultiplier,
    bool isDynamic
  );

  /**
   * @notice Calculates the total targeted allocation of this claim over its entire lifetime.
   * @dev Must NOT take current state (like already claimed amounts or time) into account.
   * @param claim The static claim data.
   * @param totalPoolInflow The historical total inflow of the specific token into the pool.
   * @return The absolute maximum amount of tokens allocated to this claim.
   */
  function totalAllocated(Claim calldata claim, uint256 totalPoolInflow) external view returns (uint256);

  /**
   * @notice Calculates the currently available claim amount and transfer instructions.
   * @dev Does not modify state. Evaluates time, conditions, and previous claims.
   * @param claim The static claim data.
   * @param distributionArgs Dynamic arguments to modify the distribution.
   * @return The instruction detailing the token, recipient, and amount.
   */
  function releasable(Claim calldata claim, bytes calldata distributionArgs) external view returns (TransferInstruction memory);

  /**
   * @notice Run the pre-distribution hook to compute transfer instructions.
   * @dev To indicate the entire call should revert, the function MUST revert.
   * @param claim The static claim data.
   * @param distributionArgs Dynamic arguments modifying the distribution behavior.
   * @return The resulting transfer instruction and context to pass to the post-hook.
   */
  function preDistributionHook(Claim calldata claim, bytes calldata distributionArgs) external returns (PreHookResult memory);

  /**
   * @notice Run the post-distribution hook to update state after a successful transfer.
   * @dev To indicate the entire call should revert, the function MUST revert.
   * @param claim The static claim data.
   * @param distributionContext The context returned by its associated pre-distribution hook.
   */
  function postDistributionHook(Claim calldata claim, bytes calldata distributionContext) external;
}
