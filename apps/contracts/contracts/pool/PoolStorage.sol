// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import { IModuleRegistry } from "../interfaces/IModuleRegistry.sol";

// ERC-7201 (Namespaced Storage Layout) compatible slot.
// Evaluated at compile time, costs zero gas to compute.
// bytes32(uint256(keccak256("Mutuals.ModularPool.Storage")) - 1)
bytes32 constant _POOL_STORAGE_SLOT = bytes32(uint256(keccak256("Mutuals.ModularPool.Storage")) - 1);

struct PoolStorage {
  // --------------------------------------------------------------------------
  // SECURITY & TRUST
  // --------------------------------------------------------------------------

  /// @notice Global protocol registry for module attestations.
  IModuleRegistry registry;

  /// @notice Array of auditors/DAOs that this specific pool trusts for module security.
  address[] trustedAttesters;

  // --------------------------------------------------------------------------
  // MODULE MANAGEMENT
  // --------------------------------------------------------------------------

  /// @notice Tracks which modules are currently installed and active in the pool.
  mapping(address => bool) installedModules;

  // --------------------------------------------------------------------------
  // FINANCIAL STATE
  // --------------------------------------------------------------------------

  /// @notice Stores the historical total released amount per token and token id.
  /// For ERC20 and Native tokens, the ID defaults to 0. For ERC1155, it tracks specific sub-tokens.
  mapping(address => mapping(uint256 => uint256)) totalReleased;

  // --------------------------------------------------------------------------
  // INTROSPECTION (ERC-165)
  // --------------------------------------------------------------------------

  /// @notice Fallback mapping for dynamic interface support (if required).
  mapping(bytes4 => uint256) supportedIfaces;
}

/**
 * @notice Loads the storage reference from the dedicated namespace slot.
 * @dev Protects against storage collisions during proxy upgrades.
 * @return _storage The reference to the PoolStorage structure.
 */
function getPoolStorage() pure returns (PoolStorage storage _storage) {
  bytes32 slot = _POOL_STORAGE_SLOT;
  assembly ("memory-safe") {
    _storage.slot := slot
  }
}
