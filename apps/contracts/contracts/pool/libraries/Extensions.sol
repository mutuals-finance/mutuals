// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import { IRegistry } from "../interfaces/IRegistry.sol";
import { IPool } from "../interfaces/IPool.sol";
import { ParseBytes } from "./ParseBytes.sol";
import { CustomRevert } from "./CustomRevert.sol";
import { BaseExtension } from "../../extension/BaseExtension.sol";
import { Claim } from "../types/Claim.sol";
import { WithdrawParams } from "../types/WithdrawParams.sol";

/// @title Extensions Library
/// @notice Provides utility functions for managing and interacting with extensions
/// @dev This library includes functions for handling extension-related hooks and validations
library Extensions {
    using Extensions for *;
    using ParseBytes for bytes;
    using CustomRevert for bytes4;

    struct State {
        IRegistry registry;
    }

    /// @notice Calls the releasable hook and validates the return value
    /// @param self The state of the Extensions library
    /// @param claim The claim data to process
    /// @param params The withdrawal parameters
    /// @return The releasable amount
    function releasable(
        State storage self,
        Claim calldata claim,
        WithdrawParams calldata params
    ) internal view returns (uint256) {
        return _releasable(self, claim, params);
    }

    /// @notice Calls the releasable hook for multiple claims and validates the return values
    /// @param self The state of the Extensions library
    /// @param claim An array of claim data to process
    /// @param params A 2D array of withdrawal parameters
    /// @return __releasable The total releasable amount
    function batchReleasable(
        State storage self,
        Claim[] calldata claim,
        WithdrawParams[] calldata params
    ) internal view returns (uint256 __releasable) {
        for (uint256 i = 0; i < claim.length; i++) {
            __releasable += _releasable(self, claim[i], params[i]);
        }
    }

    function checkState(State storage self, Claim calldata claim, WithdrawParams calldata params) internal view {
        self.registry.extensionOf(claim.stateId).checkState(claim, params);
    }

    function checkBatchState(State storage self, Claim[] calldata claims, WithdrawParams[] calldata params) internal view {
        self.registry.extensionOf(claims[0].stateId).checkBatchState(claims, params);
    }

    /// @notice Calls the beforeWithdraw hook and validates the return value
    /// @param self The state of the Extensions library
    /// @param claim The claim data to process
    /// @param params The withdrawal parameters
    function beforeWithdraw(State storage self, Claim calldata claim, WithdrawParams calldata params) internal {
        _beforeWithdraw(self, claim, params);
    }

    /// @notice Calls the beforeWithdraw hook for multiple claims and validates the return values
    /// @param self The state of the Extensions library
    /// @param claims An array of claim data to process
    /// @param params A 2D array of withdrawal parameters
    function beforeBatchWithdraw(State storage self, Claim[] calldata claims, WithdrawParams[] calldata params) internal {
        for (uint256 i = 0; i < claims.length; i++) {
            _beforeWithdraw(self, claims[i], params[i]);
        }
    }

    /// @notice Calls the afterWithdraw hook and validates the return value
    /// @param self The state of the Extensions library
    /// @param claim The claim data to process
    /// @param params The withdrawal parameters
    function afterWithdraw(State storage self, Claim calldata claim, WithdrawParams calldata params) internal {
        _afterWithdraw(self, claim, params);
    }

    /// @notice Calls the afterWithdraw hook for multiple claims and validates the return values
    /// @param self The state of the Extensions library
    /// @param claims An array of claim data to process
    /// @param params A 2D array of withdrawal parameters
    function afterBatchWithdraw(State storage self, Claim[] calldata claims, WithdrawParams[] calldata params) internal {
        for (uint256 i = 0; i < claims.length; i++) {
            _afterWithdraw(self, claims[i], params[i]);
        }
    }

    function _releasable(
        State storage self,
        Claim calldata claim,
        WithdrawParams calldata params
    ) private view returns (uint256) {
        return self.registry.extensionOf(claim.strategyId).releasable(claim, params);
    }

    /// @notice Internal function to handle the beforeWithdraw hook
    /// @param self The state of the Extensions library
    /// @param claim The claim data to process
    /// @param params The withdrawal parameters
    function _beforeWithdraw(State storage self, Claim calldata claim, WithdrawParams calldata params) private {
        self.registry.extensionOf(claim.strategyId).beforeWithdraw(claim, params);
    }

    /// @notice Internal function to handle the afterWithdraw hook
    /// @param self The state of the Extensions library
    /// @param claim The claim data to process
    /// @param params The withdrawal parameters
    function _afterWithdraw(State storage self, Claim calldata claim, WithdrawParams calldata params) private {
        self.registry.extensionOf(claim.strategyId).afterWithdraw(claim, params);
    }
}
