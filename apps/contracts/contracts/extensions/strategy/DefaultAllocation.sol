// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IPool } from "../../core/interfaces/IPool.sol";
import { Allocation } from "../../core/libraries/Allocation.sol";
import { Claim } from "../../core/types/Claim.sol";
import { WithdrawParams } from "../../core/types/WithdrawParams.sol";
import { BaseExtension } from "../BaseExtension.sol";

contract DefaultAllocation is BaseExtension {
    /* -------------------------------------------------------------------------- */
    /*                                   ERRORS                                   */
    /* -------------------------------------------------------------------------- */

    /// @notice Throws when the balance of the actor is insufficient
    error DefaultAllocation_InsufficientBalance();

    /* -------------------------------------------------------------------------- */
    /*                             EXTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    /**
     * @notice Calculates releasable amount based on allocation
     */
    function releasable(Claim calldata claim, WithdrawParams calldata params) external view returns (uint256 _releasable) {
        return _pending(claim, params);
    }

    /**
     * @notice Process before withdrawal and calculate releasable amount
     */
    function beforeWithdraw(Claim calldata claim, WithdrawParams calldata params) external {
        _checkReleasable(claim, params);
    }

    /// @notice Called before batch withdrawal to ensure correct epoch is used per nodeId
    function beforeBatchWithdraw(Claim[] calldata claim, WithdrawParams[] calldata params) external {
        for (uint256 i = 0; i < params.length; i++) {
            _checkReleasable(claim[i], params[i]);
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                             INTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    function _checkReleasable(Claim calldata claim, WithdrawParams calldata params) internal {
        if (params.amount > releasable(claim, params)) revert DefaultAllocation_InsufficientBalance();
    }
}
