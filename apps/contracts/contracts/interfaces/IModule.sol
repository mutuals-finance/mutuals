// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";

/**
 * @title IModule
 * @notice Base interface for all modules used by the Pool.
 * @dev Integrates standard ERC165 introspection and lifecycle hooks.
 */
interface IModule is IERC165 {
  /**
   * @notice Initialize module data for the pool.
   * @param data Optional bytes array to be decoded and used by the module to setup initial state.
   */
  function onInstall(bytes calldata data) external;

  /**
   * @notice Clear module data for the pool.
   * @param data Optional bytes array to be decoded and used by the module to clear state.
   */
  function onUninstall(bytes calldata data) external;

  /**
   * @notice Return a unique identifier for the module.
   * @return The module ID.
   */
  function moduleId() external view returns (string memory);
}
