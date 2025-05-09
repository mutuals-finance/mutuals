// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import { IPool } from "../../core/interfaces/IPool.sol";
import { Allocation } from "../../core/libraries/Allocation.sol";

contract TimelockAllocationExtension {
    using Allocation for Allocation.State;

    uint256 public startTime;

    // Storage for nodes
    Allocation.State internal allocations;

    constructor() {}

    function releasable(IPool.Claim claim, IPool.WithdrawParams wParams) public {
        (uint256 epoch, uint256 period) = decode(data);

        if (block.timestamp < startTime) {
            // Not started
            return 0;
        }

        // uint256 remaining = period - (elapsed % period);
        Claim memory claim = Allocation.Claim(params.nodeId, params.token, params.amount);

        uint256 releasable = (block.timestamp - startTime) * allocations.releasable(claim, data);

        return releasable - allocations.released(claim);
    }

    function decode(bytes calldata data) public returns (uint256 epoch, uint256 period) {
        return abi.decode(data, (uint256, uint256));
    }

    /// @notice Called before withdrawal to ensure correct epoch is used per nodeId
    /// @param params Withdrawal parameters
    /// @param data Encoded as (uint256 epoch, uint256 period, uint256 count)
    function beforeWithdraw(IPool.WithdrawParams calldata params, bytes calldata data) external {
        _checkReleasable(params, data);
    }

    /// @notice Called before batch withdrawal to ensure correct epoch is used per nodeId
    /// @param params Array of withdrawal parameters
    /// @param data Array of encoded data, each encoded as (uint256 epoch, uint256 period, uint256 count)
    function beforeBatchWithdraw(IPool.WithdrawParams[] calldata params, bytes[] calldata data) external {
        for (uint256 i = 0; i < params.length; i++) {
            _checkReleasable(params, data);
        }
    }

    /// @notice Called before withdrawal to ensure correct epoch is used per nodeId
    /// @param data Encoded as (uint256 epoch, uint256 period, uint256 count)
    function _checkReleasable(IPool.WithdrawParams calldata params, bytes calldata data) internal {
        if (params.amount > releasable(params, data)) revert INVALID();
    }
}
