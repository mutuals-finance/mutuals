// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC1967Proxy} from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";
import {Create2} from "@openzeppelin/contracts/utils/Create2.sol";

import {IPoolFactory} from "../interfaces/IPoolFactory.sol";
import {Pool} from "./Pool.sol";

/**
 * @title PoolFactory
 * @notice Factory for deterministically deploying Pools using CREATE2.
 * @dev Enables identical pool addresses across different EVM chains and tracks deployed pools.
 */
contract PoolFactory is IPoolFactory, Ownable {
  /* -------------------------------------------------------------------------- */
  /* STATE VARIABLES                                                            */
  /* -------------------------------------------------------------------------- */

  /// @notice The fixed implementation address that all proxies point to.
  address public immutable POOL_IMPLEMENTATION;

  /// @notice The hash of the proxy bytecode. Crucial for CREATE2 address computation.
  bytes32 private immutable _PROXY_BYTECODE_HASH;

  /// @inheritdoc IPoolFactory
  mapping(address => bool) public override isPool;

  /* -------------------------------------------------------------------------- */
  /* INITIALIZATION                                                             */
  /* -------------------------------------------------------------------------- */

  /**
   * @param _poolImplementation The address of the deployed Pool logic contract.
   * @param initialOwner The admin of this factory.
   */
  constructor(address _poolImplementation, address initialOwner) Ownable(initialOwner) {
    require(_poolImplementation != address(0), "Invalid Implementation");
    POOL_IMPLEMENTATION = _poolImplementation;

    // The creation code of an ERC1967 Proxy combined with the ABI-encoded implementation address
    _PROXY_BYTECODE_HASH = keccak256(
      abi.encodePacked(
        type(ERC1967Proxy).creationCode,
        abi.encode(POOL_IMPLEMENTATION, "")
      )
    );
  }

  /* -------------------------------------------------------------------------- */
  /* EXTERNAL FUNCTIONS                                                         */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IPoolFactory
  function createPool(
    address owner,
    uint256 salt,
    address[] calldata initialModules,
    bytes[] calldata initialModuleData
  ) external override returns (address) {
    bytes32 combinedSalt = getSalt(owner, salt);
    address addr = Create2.computeAddress(combinedSalt, _PROXY_BYTECODE_HASH);

    // Short-circuit: Only deploy if no code exists at the target address
    if (addr.code.length == 0) {
      // Deploy the proxy via CREATE2. It points to POOL_IMPLEMENTATION, but runs no initialization logic yet ("")
      new ERC1967Proxy{salt: combinedSalt}(POOL_IMPLEMENTATION, "");

      // Cast to the Pool interface and call the initializer
      Pool(payable(addr)).initialize(
        owner,
        initialModules,
        initialModuleData
      );

      // Register the pool in the factory's state
      isPool[addr] = true;

      emit PoolCreated(addr, owner, salt);
    }

    return addr;
  }

  /* -------------------------------------------------------------------------- */
  /* VIEW/PURE FUNCTIONS                                                        */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IPoolFactory
  function predictPoolAddress(address owner, uint256 salt) external view override returns (address) {
    return Create2.computeAddress(getSalt(owner, salt), _PROXY_BYTECODE_HASH);
  }

  /// @inheritdoc IPoolFactory
  function getSalt(address owner, uint256 salt) public pure override returns (bytes32) {
    return keccak256(abi.encodePacked(owner, salt));
  }
}
