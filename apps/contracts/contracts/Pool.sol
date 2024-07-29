// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {Currency} from "./libraries/Currency.sol";
import {Verifier} from "./libraries/Verifier.sol";
import {Allocation} from "./libraries/Allocation.sol";
import {MerkleTree} from "./libraries/MerkleTree.sol";
import {ContextUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";
import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Pool is OwnableUpgradeable {
	using Currency for address;
	using Verifier for Verifier.Data;

	/**
 	* @dev Verifier data
  	*/
	Verifier.Data internal verifier;

	/* -------------------------------------------------------------------------- */
	/*                             INITIALIZATION                             */
	/* -------------------------------------------------------------------------- */

	/// @custom:oz-upgrades-unsafe-allow constructor
	constructor() {
		_disableInitializers();
	}

	function __Pool_init(address initialOwner, bytes32 allocationRoot) external initializer {
		__Context_init_unchained();
		__Ownable_init_unchained(initialOwner);
		__Pool_init_unchained(allocationRoot);
	}

	/**
 	* @dev Initializes the contract.
  */
	function __Pool_init_unchained(bytes32 allocationRoot) internal onlyInitializing {
		verifier.initialize(allocationRoot);
	}

	/* -------------------------------------------------------------------------- */
	/*                             EXTERNAL FUNCTIONS                             */
	/* -------------------------------------------------------------------------- */

	function batchDeposit(
		address[] calldata _receivers,
		address currency,
		uint256[] calldata _amounts
	) external payable {
		//if (_receivers.length != _amounts.length) revert LengthMismatch();

		uint256 sum;
		uint256 amount;
		uint256 length = _receivers.length;

		for (uint256 i; i < length; ++i) {
			amount = _amounts[i];
			sum += amount;
			//_mint(_receivers[i], currency, amount);
			currency.transfer(address(this), sum);
		}
	}

	function withdraw(
		address recipient,
		address currency,
		Allocation.BatchRequest calldata request,
		MerkleTree.MultiProof calldata proof
	) external returns (bool) {
		uint256 totalAmount = verifier.verifyWithdraw(recipient, currency, request, proof);
		_withdraw(recipient, currency, totalAmount);
		return true;
	}

	/* -------------------------------------------------------------------------- */
	/*                              INTERNAL/PRIVATE                              */
	/* -------------------------------------------------------------------------- */

	function _deposit(
	//address receiver,
		address currency,
		uint256 amount
	) internal {
		currency.transfer(address(this), amount);
		// solhint-disable-next-line
		//emit Deposit(_receiver, currency, _amount);
	}

	function _withdraw(
		address owner,
		address currency,
		uint256 amount
	) internal {
		currency.transfer(owner, amount);
		// solhint-disable-next-line
		//emit Withdraw(owner, currency, amount);
	}

}
