// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

interface IExecutor {

	enum Operation {
		Call,
		DelegateCall
	}

	/**
	 * @notice Executes either a delegatecall or a call with provided parameters.
	 * @dev This method doesn't perform any sanity check of the transaction, such as:
	 *      - if the contract at `to` address has code or not
	 *      It is the responsibility of the caller to perform such checks.
	 * @param to Destination address.
	 * @param value Ether value.
	 * @param data Data payload.
	 * @param operation Operation type.
	 * @return success boolean flag indicating if the call succeeded.
	 */
	function execute(address to, uint256 value, bytes memory data, Operation operation, uint256 txGas) external returns (bool);
}
