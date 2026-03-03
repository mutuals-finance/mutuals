// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import {MerkleProof} from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

import {IModule} from "../../interfaces/IModule.sol";
import {IValidationModule} from "../../interfaces/IValidationModule.sol";
import {Claim} from "../../types/Token.sol";
import {BaseModule} from "../BaseModule.sol";

/**
 * @title Merkle Tree Validation Module
 * @notice Validates claims using an off-chain generated Merkle Tree.
 * @dev The Merkle Root is stored per-pool. The leaf is the keccak256 hash of the entire Claim struct.
 */
contract MerkleTreeValidationModule is IValidationModule, BaseModule {
  // Maps the Pool address (msg.sender) to its current Merkle Root
  mapping(address => bytes32) public poolRoots;

  error InvalidProof();
  error RootNotSet();

  // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  // ┃    Module interface functions    ┃
  // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

  /// @inheritdoc IModule
  function moduleId() external pure override returns (string memory) {
    return "mutuals.merkle-tree-validation-module.1.0.0";
  }

  /// @inheritdoc IModule
  function onInstall(bytes calldata data) external override {
    if (data.length > 0) {
      bytes32 root = abi.decode(data, (bytes32));
      poolRoots[msg.sender] = root;
    }
  }

  /// @inheritdoc IModule
  function onUninstall(bytes calldata /* data */) external override {
    delete poolRoots[msg.sender];
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override(BaseModule, IERC165) returns (bool) {
    return interfaceId == type(IValidationModule).interfaceId || super.supportsInterface(interfaceId);
  }

  // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  // ┃    Validation functions          ┃
  // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

  /**
   * @notice Allows a Pool to update its Merkle Root.
   */
  function updateRoot(bytes32 newRoot) external {
    poolRoots[msg.sender] = newRoot;
  }

  /// @inheritdoc IValidationModule
  function validateRuntime(Claim calldata claim, bytes calldata validationArgs) external view override {
    bytes32 root = poolRoots[msg.sender];
    if (root == bytes32(0)) revert RootNotSet();

    // The leaf is the hash of the entire static Claim struct
    bytes32 leaf = keccak256(abi.encode(claim));
    bytes32[] memory proof = abi.decode(validationArgs, (bytes32[]));

    if (!MerkleProof.verify(proof, root, leaf)) {
      revert InvalidProof();
    }
  }

  /// @inheritdoc IValidationModule
  function validateRuntimeBatch(Claim[] calldata claims, bytes[] calldata validationArgs) external view override {
    bytes32 root = poolRoots[msg.sender];
    if (root == bytes32(0)) revert RootNotSet();

    for (uint256 i = 0; i < claims.length; i++) {
      bytes32 leaf = keccak256(abi.encode(claims[i]));
      bytes32[] memory proof = abi.decode(validationArgs[i], (bytes32[]));

      if (!MerkleProof.verify(proof, root, leaf)) {
        revert InvalidProof();
      }
    }
  }
}
