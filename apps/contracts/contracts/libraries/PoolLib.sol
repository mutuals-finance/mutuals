// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { Currency } from "./Currency.sol";
import { MerkleTree } from "./MerkleTree.sol";
import { Allocation } from "./Allocation.sol";
import { State } from "./State.sol";

/**
 * @title Mutuals PoolLib library
 * @author Mutuals
 * @notice Utility library for direct usage within a payment pool instance
 */
library PoolLib {
    using Currency for address;
    using MerkleTree for MerkleTree.Data;
    using State for State.Data;
    using Allocation for Allocation.Data;

    /* -------------------------------------------------------------------------- */
    /*                                   ERRORS                                   */
    /* -------------------------------------------------------------------------- */

    error InvalidAllocation(uint256 index);
    error InvalidAllocationState(uint256 index);
    error InvalidProof();
    error UnauthorizedRecipient(uint256 index);

    /* -------------------------------------------------------------------------- */
    /*                                   STRUCTS                                  */
    /* -------------------------------------------------------------------------- */

    struct Data {
        /**
         * @dev Allocation State data
         */
        State.Data state;
        /**
         * @dev Allocation Merkle Tree data
         */
        MerkleTree.Data tree;
    }

    /**
     * @dev WithdrawRequest
     */
    struct WithdrawRequest {
        Allocation.Data[][] allocations;
        uint256[] amounts;
        MerkleTree.MultiProof proof;
    }

    /* -------------------------------------------------------------------------- */
    /*                          PRIVATE/INTERNAL FUNCTIONS                        */
    /* -------------------------------------------------------------------------- */

    /**
     * @notice Initializes the library state variables.
     * @dev Sets current timestamp and allocation root.
     * @param self The current storage definition.
     * @param root The allocation merkle tree root.
     */
    function initialize(Data storage self, bytes32 root) internal {
        self.state.initialize();
        self.tree.initialize(root);
    }

    /**
     * @notice Setter for the allocation root.
     * @dev Sets the updated timestamp and sets a new allocation root.
     * @param self The current storage definition.
     * @param root The new allocation merkle tree root.
     */
    function setAllocationRoot(Data storage self, bytes32 root) internal {
        self.state.update();
        self.tree.update(root);
    }

    /**
     * @notice Getter for the allocation root.
     * @param self The current storage definition.
     * @return The current allocation root.
     */
    function getAllocationRoot(Data storage self) internal returns (bytes32) {
        return self.tree.getRoot();
    }

    /**
     * @notice Verifier for a withdraw transaction.
     * @dev Validates and verifies allocations prior to a withdraw request.
     * @param self The current storage definition.
     * @param recipient The recipient of the withdrawal.
     * @param token The token to be withdrawn.
     * @param request The withdraw request containing batch allocation references and proof data to be verified.
     */
    function verifyWithdraw(
        Data storage self,
        address recipient,
        address token,
        WithdrawRequest calldata request
    ) internal returns (uint256 totalAmount) {
        uint256 totalReceived = token.balanceOfSelf();

        bytes32[] memory leaves = new bytes32[](request.allocations.length * 2);
        uint256 j;

        for (uint256 i = 0; i < request.allocations.length; i++) {
            if (!request.allocations[i][0].validate()) {
                revert InvalidAllocation(i);
            }

            if ((request.allocations[i][0].target <= 0 && request.allocations[i][0].recipient != uint160(recipient))) {
                revert UnauthorizedRecipient(i);
            }

            if (!self.state.verify(request.allocations[i], token, request.amounts[i], totalReceived - totalAmount)) {
                revert InvalidAllocationState(i);
            }

            self.state.update(request.allocations[i][0], token, request.amounts[i]);

            totalAmount += request.amounts[i];
            leaves[i + j] = request.allocations[i][0].hash();

            if (request.allocations[i][0].isPrioritizedAllocation()) {
                j++;
                leaves[i + j] = request.allocations[i][1].hash();
            }
        }

        if (!self.tree.multiProofVerify(request.proof, leaves)) {
            revert InvalidProof();
        }

        return totalAmount;
    }
}
