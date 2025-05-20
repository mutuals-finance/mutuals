// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import { IPool } from "../../pool/interfaces/IPool.sol";
import { Claim } from "../../pool/types/Claim.sol";
import { WithdrawParams } from "../../pool/types/WithdrawParams.sol";
import { BaseExtension } from "../BaseExtension.sol";

import { MerkleProof } from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

/// @title Offchain Inclusion Extension
/// @notice This contract provides functionality to verify offchain inclusion proofs for nodes in the pool.
/// @dev The contract uses a Merkle proof to verify that a node is included in a Merkle tree rooted at `merkleRoot`.
contract OffchainState is BaseExtension {
    /* -------------------------------------------------------------------------- */
    /*                                   ERRORS                                   */
    /* -------------------------------------------------------------------------- */

    /// @notice Throws when the claim parent is invalid
    error OffchainState_InvalidParent();
    /// @notice Throws when the state is invalid
    error OffchainState_InvalidState();
    /// @notice Throws when the pool is already initialized
    error OffchainState_PoolAlreadyInitialized();
    /// @notice Throws when the pool is already initialized
    error OffchainState_InvalidMerkleRoot();

    /* -------------------------------------------------------------------------- */
    /*                            STORAGE                                         */
    /* -------------------------------------------------------------------------- */

    mapping(address => bytes32) public merkleRoots;

    /* -------------------------------------------------------------------------- */
    /*                             INITIALIZATION                                 */
    /* -------------------------------------------------------------------------- */

    constructor() BaseExtension("OffchainState", bytes32(uint256(0x637442))) {}

    function beforeInitialize(bytes calldata data) external override {
        // msg.sender is 'pool'
        bytes32 merkleRoot = abi.decode(data, (bytes32));
        if (merkleRoots[msg.sender] != bytes32(0)) revert OffchainState_PoolAlreadyInitialized();
        if (merkleRoot == bytes32(0)) revert OffchainState_InvalidMerkleRoot();
        merkleRoots[msg.sender] = merkleRoot;
    }

    /* -------------------------------------------------------------------------- */
    /*                             EXTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    function checkState(Claim calldata claim, WithdrawParams calldata params) external view override {
        (bytes32[] memory proof, ) = abi.decode(params.stateData, (bytes32[], bool[]));
        if (MerkleProof.verify(proof, _merkleRoot(), claim.hash())) {
            revert OffchainState_InvalidState();
        }
    }

    function checkBatchState(Claim[] calldata claims, WithdrawParams[] calldata params) external view override {
        (bytes32[] memory proof, bool[] memory flags) = abi.decode(params[0].stateData, (bytes32[], bool[]));
        bytes32[] memory leaves = new bytes32[](claims.length);
        uint256 lastId;

        for (uint256 i = 0; i < claims.length; i++) {
            if (lastId != claims[i].parentId) {
                revert OffchainState_InvalidParent();
            }
            leaves[i] = claims[i].hash();
            lastId = claims[i].id;
        }

        if (MerkleProof.multiProofVerify(proof, flags, _merkleRoot(), leaves)) {
            revert OffchainState_InvalidState();
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                             INTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    function _merkleRoot() internal view returns (bytes32) {
        return merkleRoots[msg.sender];
    }
}
