// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IPool } from "../../core/interfaces/IPool.sol";
import { Allocation } from "../../core/libraries/Allocation.sol";
import { Claim } from "../../core/types/Claim.sol";
import { WithdrawParams } from "../../core/types/WithdrawParams.sol";
import { BaseExtension } from "../BaseExtension.sol";

contract TimelockAllocation is BaseExtension {
    /* -------------------------------------------------------------------------- */
    /*                                   ERRORS                                   */
    /* -------------------------------------------------------------------------- */

    /// @notice Throws when the balance of the actor is insufficient
    error TimelockAllocation_InsufficientBalance();

    /// @notice Throws when the pool is already initialized
    error TimelockAllocation_PoolAlreadyInitialized();

    /* -------------------------------------------------------------------------- */
    /*                            STORAGE                                         */
    /* -------------------------------------------------------------------------- */

    mapping(address => uint256) public startTimes;

    /* -------------------------------------------------------------------------- */
    /*                             INITIALIZATION                                 */
    /* -------------------------------------------------------------------------- */

    function beforeInitialize(bytes calldata data) external {
        // msg.sender is 'pool'
        uint256 startTime = abi.decode(data, (uint256));
        if (startTimes[msg.sender] != 0) revert TimelockAllocation_PoolAlreadyInitialized();
        startTimes[msg.sender] = startTime;
    }

    /* -------------------------------------------------------------------------- */
    /*                             EXTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    function releasable(Claim calldata claim, WithdrawParams calldata params) external returns (uint256) {
        return _releasable(claim, params);
    }

    /// @notice Called before withdrawal to ensure correct epoch is used per nodeId
    /// @param params Withdrawal parameters
    /// @param data Encoded as (uint256 epoch, uint256 period, uint256 count)
    function beforeWithdraw(Claim calldata claim, WithdrawParams calldata params) external {
        _checkReleasable(claim, params);
    }

    /// @notice Called before batch withdrawal to ensure correct epoch is used per nodeId
    /// @param params Array of withdrawal parameters
    /// @param data Array of encoded data, each encoded as (uint256 epoch, uint256 period, uint256 count)
    function beforeBatchWithdraw(Claim[] calldata claims, WithdrawParams[] calldata params) external {
        for (uint256 i = 0; i < claims.length; i++) {
            _checkReleasable(claims, params);
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                             INTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    function _startTime() internal view returns (uint256) {
        return startTimes[msg.sender];
    }

    function _releasable(Claim calldata claim, WithdrawParams calldata params) internal returns (uint256) {
        (uint256 epoch, uint256 period) = abi.decode(params.data, (uint256, uint256));

        if (block.timestamp < _startTime()) {
            // Not started
            return 0;
        }

        // uint256 remaining = period - (elapsed % period);

        uint256 releasable = (block.timestamp - _startTime()) * _pending(claim, params);

        return releasable - IPool(msg.sender).released(claim.id, params.token);
    }

    function _checkReleasable(Claim calldata claim, WithdrawParams calldata params) internal {
        if (params.amount > _releasable(claim, params)) revert TimelockAllocation_InsufficientBalance();
    }
}
