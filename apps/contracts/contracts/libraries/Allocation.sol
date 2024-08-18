// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

/**
 * @title Allocation - A contract that executes operations
 * @author Fabian Piper - @fapiper
 */
library Allocation {
    using Allocation for Data;

    uint160 internal constant ALL_ALLOCATION_TYPES_MASK = uint160((1 << 4) - 1);

    uint160 internal constant PERCENTAGE_ALLOCATION_FLAG = 1 << 3;
    uint160 internal constant FIXED_ALLOCATION_FLAG = 1 << 2;
    uint160 internal constant TIMED_ALLOCATION_FLAG = 1 << 1;
    uint160 internal constant PRIORITIZED_ALLOCATION_FLAG = 1 << 0;

    /**
     * @dev Data
     */
    struct Data {
        uint160 id;
        uint32 version;
        uint8 allocationType;
        // target another allocation by id
        uint160 target;
        // recipient is a uint160(address)
        uint160 recipient;
        // amount if allocationType == FIXED_ALLOCATION, share if allocationType == PERCENTAGE_ALLOCATION
        uint256 amountOrShare;
        // position only for allocationType == PRIORITIZED_ALLOCATION
        uint256 position;
        // timespan only for allocationType == TIMED_ALLOCATION
        uint256 timespan;
    }

    /**
     * @dev Request
     */
    struct Request {
        Data[] allocation;
        uint256 amount;
    }

    /**
     * @dev BatchRequest
     */
    struct BatchRequest {
        Data[][] allocations;
        uint256[] amounts;
    }

    /**
     * @dev Context
     */
    struct Context {
        address recipient;
        address currency;
        uint256 amount;
        uint256 totalReceived;
        uint256 period;
    }

    /// @notice Thrown if the allocation type configuration is invalid
    /// @param id The id of the allocation data
    error AllocationTypesNotValid(uint160 id);

    /// @notice Utility function intended to ensure the allocation is valid
    function validate(Data calldata self) internal pure returns (bool) {
        if (
            // at least one flag is set
            self.hasAllocationType(ALL_ALLOCATION_TYPES_MASK) || (self.isPercentageAllocation() && self.isFixedAllocation())
            // only distinct PERCENTAGE_ALLOCATION and FIXED_ALLOCATION flags are set
        ) {
            return false;
        }

        if (self.id <= 0 || self.amountOrShare <= 0) {
            return false;
        }

        if ((self.target <= 0 && self.recipient <= 0) || (self.target > 0 && self.recipient > 0)) {
            return false;
        }

        if (self.isTimedAllocation() && self.timespan <= 0) {
            return false;
        }

        if (self.isPrioritizedAllocation() && self.position <= 0) {
            return false;
        }

        return true;
    }

    function hash(Data calldata self) internal pure returns (bytes32) {
        return keccak256(abi.encode(self));
    }

    function hasAllocationType(Data calldata self, uint160 flag) internal pure returns (bool) {
        return self.allocationType & flag != 0;
    }

    function isPercentageAllocation(Data calldata self) internal pure returns (bool) {
        return self.hasAllocationType(PERCENTAGE_ALLOCATION_FLAG);
    }

    function isFixedAllocation(Data calldata self) internal pure returns (bool) {
        return self.hasAllocationType(FIXED_ALLOCATION_FLAG);
    }

    function isPrioritizedAllocation(Data calldata self) internal pure returns (bool) {
        return self.hasAllocationType(PRIORITIZED_ALLOCATION_FLAG);
    }

    function isTimedAllocation(Data calldata self) internal pure returns (bool) {
        return self.hasAllocationType(TIMED_ALLOCATION_FLAG);
    }
}
