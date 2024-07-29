// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "./Allocation.sol";

/**
 * @title Executor - A contract that executes operations
 * @author Fabian Piper - @fapiper
 */
library AllocationState {
	using AllocationState for Data;
	using Allocation for Allocation.Data;

	/**
 	* @dev Data
  */
	struct Data {
		uint256 initializedAtTimestamp;
		// token -> recipient -> withdrawn
		mapping(address => mapping(uint160 => uint256)) totalWithdrawn;
		// token -> recipient -> period -> withdrawn
		mapping(address => mapping(uint160 => mapping(uint256 => uint256))) periodicWithdrawn;
		// token -> recipient -> timestamp
		mapping(address => mapping(uint160 => uint256)) lastWithdrawn;
	}

	/**
 	* @dev Initialization of the library state variables
  */
	function initialize(
		Data storage self
	) internal {
		self.initializedAtTimestamp = block.timestamp;
	}

	function verify(
		Data storage self,
		Allocation.Data[] calldata allocations,
		address token,
		uint256 amount,
		uint256 received
	) internal view returns (bool) {
		if(received < amount){
			return false;
		}

		if(allocations.length > 2 || allocations.length < 1) {
			return false;
		}

		if(allocations[0].isPrioritizedAllocation()) {
			// 1. predecessor comes right before self
			if(allocations[0].position - 1 != allocations[1].position){
				return false;
			}
			// 2. predecessor has withdrawn all of its funds for the current limit
			if(self.getWithdrawDelta(allocations[1], token, received, false) > 0) {
				return false;
			}
		}

		if(self.getWithdrawDelta(allocations[0], token, received, true) < amount) {
			return false;
		}

		return true;
	}

	function update(
		Data storage self,
		Allocation.Data calldata allocation,
		address token,
		uint256 amount
	) internal {
		self.totalWithdrawn[token][allocation.recipient] += amount;
		self.lastWithdrawn[token][allocation.recipient] = block.timestamp;

		if(allocation.isTimedAllocation()){
			self.periodicWithdrawn[token][allocation.recipient][self.periodOf(allocation)] += amount;
		}
	}

	function getWithdrawDelta(
		Data storage self,
		Allocation.Data calldata allocation,
		address token,
		uint256 received,
		bool aggregatePeriods
	) internal view returns (uint256 totalWithdrawn) {
		return self.getWithdrawLimit(allocation, received, aggregatePeriods) - self.getWithdrawn(allocation, token, aggregatePeriods);
	}

	function getWithdrawn(
		Data storage self,
		Allocation.Data calldata allocation,
		address token,
		bool aggregatePeriods
	) internal view returns (uint256 totalWithdrawn) {
		totalWithdrawn = self.totalWithdrawn[token][allocation.recipient];

		if(!aggregatePeriods && allocation.isTimedAllocation()) {
			totalWithdrawn = self.periodicWithdrawn[token][allocation.recipient][self.periodOf(allocation)];
		}
	}

	function getWithdrawLimit(
		Data storage self,
		Allocation.Data calldata allocation,
		uint256 received,
		bool aggregatePeriods
	) internal view returns (uint256 limit) {
		if (allocation.isPercentageAllocation()) {
			limit = received * allocation.amountOrShare;
		} else if (allocation.isFixedAllocation()) {
			limit = allocation.amountOrShare;
		} else {
			limit = 0;
		}

		if(aggregatePeriods && allocation.isTimedAllocation()){
			limit *= self.periodOf(allocation);
		}
	}

	function periodOf(
		Data storage self,
		Allocation.Data calldata allocation
	) internal view returns (uint256) {
		return (block.timestamp - self.initializedAtTimestamp) / allocation.timespan;
	}

}
