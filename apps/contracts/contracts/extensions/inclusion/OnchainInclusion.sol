// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IPool } from "../../core/interfaces/IPool.sol";

contract OnchainInclusion {
    string public constant NAME = "Onchain Inclusion";
    string public constant VERSION = "0.0.1";
    bytes4 public constant ID = hex"a9059cbb";

    uint256 private _totalShares;
    uint256 private _totalReleased;

    mapping(uint160 => uint256) private nodes;

    constructor() {}

    function beforeWithdraw(IPool.Claim claim, IPool.WithdrawParams[] calldata params) external {
        if (!validate(claim)) revert INVALID();
    }

    function beforeBatchWithdraw(IPool.Claim[] calldata claims, IPool.WithdrawParams[][] calldata params) external {
        for (uint256 i = 0; i < claims.length; i++) {
            if (!validate(claims[i])) revert INVALID();
        }
    }

    function validate(IPool.Claim calldata claim) external returns (bool) {
        if (claim.id <= 0) return false;
        IPool.Claim storage storedClaim = nodes[claim.id];
        if (claim.id != storedClaim.id) return false;
        if (claim.token != storedClaim.token) return false;
        if (claim.allocationType != storedClaim.allocationType) return false;
        if (claim.value != storedClaim.value) return false;
        return true;
    }
}
