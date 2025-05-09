// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import { IPool } from "../../core/interfaces/IPool.sol";
import { MerkleProof } from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

/// @title Offchain Inclusion Extension
/// @notice This contract provides functionality to verify offchain inclusion proofs for nodes in the pool.
/// @dev The contract uses a Merkle proof to verify that a node is included in a Merkle tree rooted at `merkleRoot`.
contract OffchainInclusion {
    /// ===============================
    /// ========== Events =============
    /// ===============================

    /// ================================
    /// ========== Errors ==============
    /// ================================

    /// ================================
    /// ========== Struct ==============
    /// ================================
    struct Node {
        // node id
        uint160 id;
        // token to withdraw
        uint256 token;
        // allocation type
        uint8 allocationType;
        // allocated value
        uint256 value;
    }

    /// ================================
    /// ========== Storage =============
    /// ================================

    bytes32 public merkleRoot;

    constructor() {}

    function beforeWithdraw(IPool.Claim claim, IPool.WithdrawParams[] calldata params) public {
        bytes32[] calldata proof = abi.decode(claim.data, (bytes32[]));

        if (MerkleProof.verify(proof, merkleRoot, hash(claim))) revert INVALID();
    }

    /// @notice Called before withdrawal of multiple leaf and/or nested nodes to ensure correct inclusion
    function beforeBatchWithdraw(
        IPool.Claim[] calldata claims,
        IPool.WithdrawParams[][] calldata params,
        bytes calldata context
    ) public {
        (bytes32[] memory proof, bool[] memory flags) = abi.decode(context, (bytes32[], bool[]));

        bytes32[] memory leaves = new bytes32[](claims.length);

        for (uint256 i = 0; i < claims.length; i++) {
            leaves[i] = hash(claims[i]);
        }

        if (MerkleProof.multiProofVerify(proof, flags, merkleRoot, leaves)) revert INVALID();
    }

    /// @notice Called before withdrawal of multiple leaf and/or nested nodes to ensure correct inclusion
    function hash(IPool.Claim claim) internal returns (bytes32 digest) {
        return keccak256(abi.encode(claim));
    }
}
