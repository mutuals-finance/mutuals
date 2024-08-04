// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { Currency } from "./Currency.sol";
import { MerkleTree } from "./MerkleTree.sol";
import { Allocation } from "./Allocation.sol";
import { AllocationState } from "./AllocationState.sol";

library Verifier {
    using Currency for address;
    using MerkleTree for MerkleTree.Data;
    using AllocationState for AllocationState.Data;
    using Allocation for Allocation.Data;

    struct Data {
        /**
         * @dev Allocation State data
         */
        AllocationState.Data allocationState;
        /**
         * @dev Allocation Tree data
         */
        MerkleTree.Data allocationTree;
    }

    /**
     * @dev Initialization of the library state variables
     */
    function initialize(Data storage self, bytes32 root) internal {
        self.allocationState.initialize();
        self.allocationTree.initialize(root);
    }

    function verifyWithdraw(
        Data storage self,
        address recipient,
        address currency,
        Allocation.BatchRequest calldata request,
        MerkleTree.MultiProof calldata proof
    ) internal returns (uint256 totalAmount) {
        uint256 totalReceived = currency.balanceOfSelf();

        bytes32[] memory leaves = new bytes32[](request.allocations.length * 2);
        uint256 j;

        for (uint256 i = 0; i < request.allocations.length; i++) {
            if (!request.allocations[i][0].validate()) {
                revert();
            }

            if ((request.allocations[i][0].target <= 0 && request.allocations[i][0].recipient != uint160(recipient))) {
                revert();
            }

            if (
                !self.allocationState.verify(request.allocations[i], currency, request.amounts[i], totalReceived - totalAmount)
            ) {
                revert();
            }

            self.allocationState.update(request.allocations[i][0], currency, request.amounts[i]);

            totalAmount += request.amounts[i];
            leaves[i + j] = request.allocations[i][0].hash();

            if (request.allocations[i][0].isPrioritizedAllocation()) {
                j++;
                leaves[i + j] = request.allocations[i][1].hash();
            }
        }

        if (!self.allocationTree.multiProofVerify(proof, leaves)) {
            revert();
        }

        return totalAmount;
    }
}
