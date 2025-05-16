// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IPool } from "../../core/interfaces/IPool.sol";
import { Claim } from "../../core/types/Claim.sol";
import { WithdrawParams } from "../../core/types/WithdrawParams.sol";
import { BaseExtension } from "../BaseExtension.sol";

contract PriorityGating is BaseExtension {
    /* -------------------------------------------------------------------------- */
    /*                                   ERRORS                                   */
    /* -------------------------------------------------------------------------- */

    /// @notice Throws when the balance of the actor is insufficient
    error PriorityGating_InsufficientBalance();

    /* -------------------------------------------------------------------------- */
    /*                            EXTERNAL FUNCTIONS                              */
    /* -------------------------------------------------------------------------- */

    /// @notice Called before withdrawal of to check if the releasable amount is greater than the threshold of a previous node
    /// @param claim The claim parameters
    /// @param params The withdraw parameters
    function beforeWithdraw(Claim calldata claim, WithdrawParams calldata params) external {
        _checkReleasable(claim, params);
    }

    /// @notice Called before batch withdrawal of to check if the releasable amount is greater than the threshold of a previous node
    /// @param claim The claim parameters
    /// @param params The withdraw parameters
    function beforeBatchWithdraw(Claim[] calldata claims, WithdrawParams[] calldata params) external {
        for (uint256 i = 0; i < claims.length; i++) {
            _checkReleasable(claims[i], params[i]);
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                            INTERNAL FUNCTIONS                              */
    /* -------------------------------------------------------------------------- */

    /// @notice Check if the releasable amount is greater than the threshold
    /// @param claim The claim parameters
    /// @param params The withdraw parameters
    function _checkReleasable(Claim calldata claim, WithdrawParams calldata params) internal view {
        (Claim memory previousClaim, uint256 threshold) = abi.decode(claim.strategyData, (Claim, uint256));
        WithdrawParams memory previousParams = abi.decode(params.strategyData, (WithdrawParams));

        uint256 previousReleasable = IPool(msg.sender).releasable(previousClaim, previousParams);
        if (previousReleasable <= threshold) revert PriorityGating_InsufficientBalance();
    }
}
