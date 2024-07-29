// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {MerkleProof} from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

/// @title A merkle tree implementation.
library MerkleTree {

	struct Data {
		bytes32 root;
	}

	struct MultiProof {
		bytes32[] value;
		bool[] flags;
	}

	/**
 	* @dev Initialization of the library state variables
  */
	function initialize(
		Data storage self,
		bytes32 root
	) internal {
		self.root = root;
	}

	/**
	 * @dev Returns true if the `leaves` can be simultaneously proven to be a part of a Merkle tree defined by
	 * `root`, according to `proof` and `proofFlags` as described in {processMultiProof}.
	 *
	 * CAUTION: Not all Merkle trees admit multiproofs. See {processMultiProof} for details.
	 */
	function multiProofVerify(
		Data storage self,
		MultiProof calldata proof,
		bytes32[] memory leaves
	) internal view returns (bool) {
		return MerkleProof.multiProofVerify(proof.value, proof.flags, self.root, leaves);
	}

}
