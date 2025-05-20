// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import { IPool } from "../../pool/interfaces/IPool.sol";
import { Claim } from "../../pool/types/Claim.sol";
import { WithdrawParams } from "../../pool/types/WithdrawParams.sol";
import { BaseExtension } from "../BaseExtension.sol";

contract DefaultAllocation is BaseExtension {
    /* -------------------------------------------------------------------------- */
    /*                                   ERRORS                                   */
    /* -------------------------------------------------------------------------- */

    /// @notice Throws when the balance of the actor is insufficient
    error DefaultAllocation_InsufficientBalance();

    /* -------------------------------------------------------------------------- */
    /*                             INITIALIZATION                                 */
    /* -------------------------------------------------------------------------- */

    constructor() BaseExtension("DefaultAllocation", bytes32(uint256(0x577472))) {}

    /* -------------------------------------------------------------------------- */
    /*                             EXTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    /**
     * @notice Calculates releasable amount based on allocation
     */
    function releasable(Claim calldata claim, WithdrawParams calldata params) external view override returns (uint256) {
        return _releasable(claim, params);
    }

    /**
     * @notice Process before withdrawal and calculate releasable amount
     */
    function beforeWithdraw(Claim calldata claim, WithdrawParams calldata params) external view override {
        _checkReleasable(claim, params);
    }

    /// @notice Called before batch withdrawal to ensure correct epoch is used per nodeId
    function beforeBatchWithdraw(Claim[] calldata claim, WithdrawParams[] calldata params) external view override {
        for (uint256 i = 0; i < params.length; i++) {
            _checkReleasable(claim[i], params[i]);
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                             INTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    function _releasable(Claim calldata claim, WithdrawParams calldata params) internal view returns (uint256) {
        return _pending(claim, params);
    }

    function _checkReleasable(Claim calldata claim, WithdrawParams calldata params) internal view {
        if (params.amount > _releasable(claim, params)) revert DefaultAllocation_InsufficientBalance();
    }
}
