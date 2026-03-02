// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

/// @title IPoolFactory
/// @notice Interface for the deterministically deploying Pool Factory.
interface IPoolFactory {
  /* -------------------------------------------------------------------------- */
  /* EVENTS                                                                     */
  /* -------------------------------------------------------------------------- */

  /**
   * @notice Emitted when a new Pool proxy is successfully created and initialized.
   * @param pool The address of the newly created Pool proxy.
   * @param owner The initial admin/owner of the pool.
   * @param salt The deterministic salt used for CREATE2 deployment.
   */
  event PoolCreated(address indexed pool, address indexed owner, uint256 salt);

  /* -------------------------------------------------------------------------- */
  /* EXTERNAL FUNCTIONS                                                         */
  /* -------------------------------------------------------------------------- */

  /**
   * @notice Creates a new Pool and initializes it immediately.
   * @dev If the pool already exists at this address, it safely returns the address (idempotent).
   * @param owner The owner/admin of the new pool.
   * @param salt A random or deterministic number to allow multiple unique pools for the same owner.
   * @param initialModules The module addresses to be installed during initialization.
   * @param initialModuleData The configuration data for the initial modules.
   * @return The address of the deployed and configured Pool.
   */
  function createPool(
    address owner,
    uint256 salt,
    address[] calldata initialModules,
    bytes[] calldata initialModuleData
  ) external returns (address);

  /* -------------------------------------------------------------------------- */
  /* VIEW FUNCTIONS                                                             */
  /* -------------------------------------------------------------------------- */

  /**
   * @notice Computes the future address of a pool (Counterfactual Address) before it is deployed.
   * @param owner The owner of the future pool.
   * @param salt The salt that will be used for deployment.
   * @return The deterministic address where the pool will be deployed.
   */
  function predictPoolAddress(address owner, uint256 salt) external view returns (address);

  /**
   * @notice Generates the deterministic salt from the owner and user-provided salt.
   * @param owner The address of the pool owner.
   * @param salt The user-provided salt.
   * @return The 32-byte hash used for CREATE2.
   */
  function getSalt(address owner, uint256 salt) external pure returns (bytes32);

  /**
   * @notice Verifies if a given address is a legitimate Pool created by this factory.
   * @param pool The address to check.
   * @return True if the pool was deployed by this factory.
   */
  function isPool(address pool) external view returns (bool);
}
