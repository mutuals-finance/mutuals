// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import { Claim } from "../types/Token.sol";

/// @title IPool
/// @notice Interface for a modular execution pool separating validation and distribution logic.
interface IPool {
  /* -------------------------------------------------------------------------- */
  /* EVENTS                                                                     */
  /* -------------------------------------------------------------------------- */

  event ModuleInstalled(address indexed module, bytes data);
  event ReleaseSingle(Claim claim);
  event Release(Claim[] claims);
  event TrustedAttestersUpdated(address[] newAttesters);

  /* -------------------------------------------------------------------------- */
  /* ERRORS                                                                     */
  /* -------------------------------------------------------------------------- */

  error ArrayLengthMismatch();
  error InvalidModuleAddress();
  error EmptyClaims();
  error ModuleNotInstalled(address module);
  error ExecutionReverted(address module, bytes reason);
  error AggregationMismatch();
  error CannotAggregateERC721();
  error UntrustedModule(address module);

  /* -------------------------------------------------------------------------- */
  /* EXTERNAL FUNCTIONS                                                         */
  /* -------------------------------------------------------------------------- */

  /**
   * @notice Validates and executes a single release claim.
   * @param claim The static claim data.
   * @param validationArgs Dynamic arguments for the validation module (e.g., signatures, proofs).
   * @param distributionArgs Dynamic arguments for the distribution module (e.g., requested partial amounts).
   */
  function releaseSingle(
    Claim calldata claim,
    bytes calldata validationArgs,
    bytes calldata distributionArgs
  ) external;

  /**
   * @notice Default batch release. Validates multiple claims and aggregates them into a single token transfer.
   */
  function release(
    Claim[] calldata claims,
    bytes[] calldata validationArgs,
    bytes[] calldata distributionArgs
  ) external;

  /**
   * @notice Alternative batch release. Executes transfers individually per claim without aggregation.
   */
  function releaseSeparate(
    Claim[] calldata claims,
    bytes[] calldata validationArgs,
    bytes[] calldata distributionArgs
  ) external;

  /**
   * @notice Installs a new module into the pool. Must be attested by a trusted attester.
   * @param module The address of the module to install.
   * @param data Initialization data for the module.
   */
  function installModule(address module, bytes calldata data) external;

  /**
   * @notice Updates the list of attesters this pool trusts for module security.
   * @param newAttesters Array of trusted auditor/DAO addresses.
   */
  function updateTrustedAttesters(address[] calldata newAttesters) external;

  /* -------------------------------------------------------------------------- */
  /* VIEW FUNCTIONS                                                             */
  /* -------------------------------------------------------------------------- */

  /**
   * @notice Exposes the total released amount for a specific token.
   * @param token The address of the token (use address(0) for native ETH).
   * @return The total historically released amount.
   */
  function totalReleased(address token) external view returns (uint256);
}
