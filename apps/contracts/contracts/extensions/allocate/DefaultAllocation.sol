// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "../../core/interfaces/IPool.sol";
import "../../core/libraries/Allocation.sol";

contract DefaultAllocation {
    using Allocation for Allocation.State;

    Allocation.State internal allocations;

    constructor() {}

    /**
     * @notice Calculates releasable amount based on allocation
     */
    function releasable(IPool.Claim claim, IPool.WithdrawParams wParams) public view returns (uint256 _releasable) {
        return allocations.releasable(Allocation.Claim(claim.id, claim.token, wParams.amount));
    }

    /**
     * @notice Process before withdrawal and calculate releasable amount
     */
    function beforeWithdraw(IPool.Claim claim, IPool.WithdrawParams wParams) public {
        _checkReleasable(claim, wParams);
    }

    /// @notice Called before batch withdrawal to ensure correct epoch is used per nodeId
    function beforeBatchWithdraw(IPool.Claim[] claim, IPool.WithdrawParams[] wParams) external {
        for (uint256 i = 0; i < wParams.length; i++) {
            _checkReleasable(claim[i], wParams[i]);
        }
    }

    function _checkReleasable(claim) internal {
        if (params.amount > releasable(params, data)) revert INVALID();
    }
}
