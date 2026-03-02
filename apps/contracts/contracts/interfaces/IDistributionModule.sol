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
   * @notice Calculates the currently available claim amount and transfer instructions.
   * @dev Does not modify state.
   * @param claim The static claim data.
   * @param distributionArgs Dynamic arguments to modify the distribution (e.g., partial claims).
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
