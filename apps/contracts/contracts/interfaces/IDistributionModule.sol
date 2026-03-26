// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import {Claim, TransferInstruction, Token} from "../types/Token.sol";
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
   * @param token The specific token to query.
   * @param index The index of the token in the module's internal allowlist.
   * @return absoluteAmount The fixed token amount (if any).
   * @return bpsMultiplier The percentage in basis points (10000 = 100%) (if any).
   * @return dynamic True if the module requires on-chain execution to determine its target allocation.
   */
  function aggregationParameters(Claim calldata claim, Token token, uint256 index) external view returns (
    uint256 absoluteAmount,
    uint256 bpsMultiplier,
    bool dynamic
  );

  /**
   * @notice Calculates the total targeted allocation of this claim over its entire lifetime.
   * @dev Must NOT take current state (like already claimed amounts or time) into account.
   * @param claim The static claim data.
   * @param token The specific token to query.
   * @param index The index of the token in the module's internal allowlist.
   * @param totalReceived The historical total inflow of the specific token into the pool.
   * @return The absolute maximum amount of tokens allocated to this claim.
   */
  function totalAllocated(Claim calldata claim, Token token, uint256 index, uint256 totalReceived) external view returns (uint256);

  /**
   * @notice Calculates the currently available claim amount and transfer instructions.
   * @dev Does not modify state. Evaluates time, conditions, and previous claims.
   * @param claim The static claim data.
   * @param dArgs Distribution arguments (dynamic) to modify the distribution.
   * @return An array of instructions detailing the tokens, recipients, and amounts.
   */
  function releasable(Claim calldata claim, bytes calldata dArgs) external view returns (TransferInstruction[] memory);

  /**
   * @notice Run the pre-distribution hook to compute transfer instructions.
   * @dev To indicate the entire call should revert, the function MUST revert.
   * @param claim The static claim data.
   * @param dArgs Dynamic arguments modifying the distribution behavior.
   * @return The resulting transfer instruction and context to pass to the post-hook.
   */
  function preDistributionHook(Claim calldata claim, bytes calldata dArgs) external returns (PreHookResult memory);

  /**
   * @notice Run the post-distribution hook to update state after a successful transfer.
   * @dev To indicate the entire call should revert, the function MUST revert.
   * @param claim The static claim data.
   * @param dContext The context returned by its associated pre-distribution hook.
   */
  function postDistributionHook(Claim calldata claim, bytes calldata dContext) external;
}
