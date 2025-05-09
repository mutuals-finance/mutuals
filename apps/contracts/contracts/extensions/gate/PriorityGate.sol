// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import { IPool } from "../../core/interfaces/IPool.sol";

contract PriorityGate {
    constructor() {}

    /// @notice Called before withdrawal of to check if the releasable amount is greater than the threshold of a previous node
    /// @param claim The claim parameters
    /// @param wParams The withdraw parameters
    function beforeWithdraw(IPool.Claim claim, IPool.WithdrawParams wParams) external {
        if (!_checkReleasable(wParams, claim)) revert INVALID();
    }

    /// @notice Called before batch withdrawal of to check if the releasable amount is greater than the threshold of a previous node
    /// @param claim The claim parameters
    /// @param wParams The withdraw parameters
    function beforeBatchWithdraw(IPool.Claim[] claim, IPool.WithdrawParams[] params) external {
        for (uint256 i = 0; i < claim.length; i++) {
            if (!_checkReleasable(params[i], claim[i])) revert INVALID();
        }
    }

    /// @notice Check if the releasable amount is greater than the threshold
    /// @param claim The claim parameters
    /// @param wParams The withdraw parameters
    /// @return bool True if the releasable amount is greater than the threshold
    function _checkReleasable(IPool.Claim claim, IPool.WithdrawParams params) internal view returns (bool) {
        (uint160 previousId, bytes calldata previousData, uint256 threshold) = abi.decode(claim.data, (address, bytes));
        uint256 _previousReleasable = pool.releasable(previousId, previousData);
        return _previousReleasable > threshold;
    }
}
