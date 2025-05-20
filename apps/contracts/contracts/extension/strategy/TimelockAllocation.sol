// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import { IPool } from "../../pool/interfaces/IPool.sol";
import { Claim } from "../../pool/types/Claim.sol";
import { WithdrawParams } from "../../pool/types/WithdrawParams.sol";
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

    constructor() BaseExtension("TimelockAllocation", bytes32(uint256(0x07e49d))) {}

    function beforeInitialize(bytes calldata data) external override {
        // msg.sender is 'pool'
        uint256 startTime = abi.decode(data, (uint256));
        if (startTimes[msg.sender] != 0) revert TimelockAllocation_PoolAlreadyInitialized();
        startTimes[msg.sender] = startTime;
    }

    /* -------------------------------------------------------------------------- */
    /*                             EXTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    function releasable(Claim calldata claim, WithdrawParams calldata params) external view override returns (uint256) {
        return _releasable(claim, params);
    }

    /// @notice Called before withdrawal to ensure correct epoch is used per nodeId
    function beforeWithdraw(Claim calldata claim, WithdrawParams calldata params) external view override {
        _checkReleasable(claim, params);
    }

    /// @notice Called before batch withdrawal to ensure correct epoch is used per nodeId
    function beforeBatchWithdraw(Claim[] calldata claims, WithdrawParams[] calldata params) external view override {
        for (uint256 i = 0; i < claims.length; i++) {
            _checkReleasable(claims[i], params[i]);
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                             INTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    function _startTime() internal view returns (uint256) {
        return startTimes[msg.sender];
    }

    function _releasable(Claim calldata claim, WithdrawParams calldata params) internal view returns (uint256) {
        // (uint256 epoch, uint256 period) = abi.decode(params.strategyData, (uint256, uint256));

        if (block.timestamp < _startTime()) {
            // Not started
            return 0;
        }

        // uint256 remaining = period - (elapsed % period);

        uint256 __releasable = (block.timestamp - _startTime()) * _pending(claim, params);

        return __releasable - IPool(msg.sender).released(claim.id, params.token);
    }

    function _checkReleasable(Claim calldata claim, WithdrawParams calldata params) internal view {
        if (params.amount > _releasable(claim, params)) revert TimelockAllocation_InsufficientBalance();
    }
}
