// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Claim} from "../types/Token.sol";
import {IModule} from "./IModule.sol";

/**
 * @title IValidationModule
 * @notice Interface for modules responsible for validating the integrity and authorization of claims.
 */
interface IValidationModule is IModule {
  /**
   * @notice Validates a single claim during runtime execution.
   * @dev To indicate the entire call should revert, the function MUST revert.
   * @param claim The static claim data.
   * @param validationArgs Dynamic arguments (e.g., Merkle proof, signature) for validation.
   */
  function validateRuntime(Claim calldata claim, bytes calldata validationArgs) external view;

  /**
   * @notice Validates a batch of claims during runtime execution.
   * @dev To indicate the entire call should revert, the function MUST revert.
   * @param claims An array of static claim data.
   * @param validationArgs An array of dynamic arguments corresponding to the claims.
   */
  function validateRuntimeBatch(Claim[] calldata claims, bytes[] calldata validationArgs) external view;
}
