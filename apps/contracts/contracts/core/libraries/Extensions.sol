// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { IRegistry } from "../interfaces/IRegistry.sol";
import { IPool } from "../interfaces/IPool.sol";
import { ParseBytes } from "./ParseBytes.sol";
import { CustomRevert } from "./CustomRevert.sol";
import { BaseExtension } from "../../extensions/BaseExtension.sol";

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
        IPool.Claim calldata claim,
        IPool.WithdrawParams[] calldata params
    ) internal returns (uint256) {
        return _releasable(self, claim, params);
    }

    /// @notice Calls the releasable hook for multiple claims and validates the return values
    /// @param self The state of the Extensions library
    /// @param claim An array of claim data to process
    /// @param params A 2D array of withdrawal parameters
    /// @return _releasable The total releasable amount
    function batchReleasable(
        State storage self,
        IPool.Claim[] calldata claim,
        IPool.WithdrawParams[][] calldata params,
        bytes calldata context
    ) internal returns (uint256 _releasable) {
        _releasable = 0;
        for (uint256 i = 0; i < claim.length; i++) {
            _releasable += _releasable(self, claim[i], params[i]);
        }
    }

    /// @notice Calls the beforeWithdraw hook and validates the return value
    /// @param self The state of the Extensions library
    /// @param claim The claim data to process
    /// @param params The withdrawal parameters
    function beforeWithdraw(State storage self, IPool.Claim calldata claim, IPool.WithdrawParams[] calldata params) internal {
        _beforeWithdraw(self, claim, params);
    }

    /// @notice Calls the beforeWithdraw hook for multiple claims and validates the return values
    /// @param self The state of the Extensions library
    /// @param claims An array of claim data to process
    /// @param params A 2D array of withdrawal parameters
    function beforeBatchWithdraw(
        State storage self,
        IPool.Claim[] calldata claims,
        IPool.WithdrawParams[] calldata params,
        bytes calldata context
    ) internal {
        for (uint256 i = 0; i < self.registry.extensionsLength(); i++) {
            IPool.Claim[] memory extensionClaims = extractExtensionClaims(claims, i);
            if (extensionClaims.length == 0) continue;

            IPool.WithdrawParams[] memory extensionParams = extractExtensionParams(claims, params, i);
            self.registry.extensionAt(i).afterBatchWithdraw(extensionClaims, extensionParams);
        }

        for (uint256 i = 0; i < claims.length; i++) {
            _beforeWithdraw(self, claims[i], params[i]);
        }
    }

    /// @notice Calls the afterWithdraw hook and validates the return value
    /// @param self The state of the Extensions library
    /// @param claim The claim data to process
    /// @param params The withdrawal parameters
    function afterWithdraw(State storage self, IPool.Claim calldata claim, IPool.WithdrawParams[] calldata params) internal {
        _afterWithdraw(self, claim, params);
    }

    /// @notice Calls the afterWithdraw hook for multiple claims and validates the return values
    /// @param self The state of the Extensions library
    /// @param claims An array of claim data to process
    /// @param params A 2D array of withdrawal parameters
    function afterBatchWithdraw(
        State storage self,
        IPool.Claim[] calldata claims,
        IPool.WithdrawParams[][] calldata params,
        bytes calldata context
    ) internal {
        for (uint256 i = 0; i < self.registry.extensionsLength(); i++) {
            IPool.Claim[] memory extensionClaims = extractExtensionClaims(claims, i);
            if (extensionClaims.length == 0) continue;

            IPool.WithdrawParams[] memory extensionParams = extractExtensionParams(claims, params, i);
            self.registry.extensionAt(i).afterBatchWithdraw(extensionClaims, extensionParams);
        }
    }

    /// @notice Checks if an extension is active at a specific index
    /// @param claim The claim data to check
    /// @param index The index to check
    /// @return True if the extension is active, false otherwise
    function _isExtensionAt(IPool.Claim calldata claim, uint256 index) internal returns (bool) {
        uint256 mask = 1 << index;
        return mask & claim.allocationType != 0;
    }

    /// @notice Internal function to calculate the releasable amount for a claim
    /// @param self The state of the Extensions library
    /// @param claim The claim data to process
    /// @param params The withdrawal parameters
    /// @return _releasable The releasable amount
    function _releasable(
        State storage self,
        IPool.Claim calldata claim,
        IPool.WithdrawParams[] calldata params
    ) private returns (uint256 _releasable) {
        uint256 j;

        for (uint256 i = 0; i < self.registry.extensionsLength(); i++) {
            if (_isExtensionAt(claim, j)) {
                _releasable += self.registry.extensionAt(j).releasable(claim, params[j]);
                j++;
            }
        }
    }

    function extractExtensionClaims(
        IPool.Claim[] calldata claims,
        uint256 index
    ) internal pure returns (IPool.Claim[] memory result) {
        uint256 count;
        for (uint256 i = 0; i < claims.length; i++) {
            if ((claims[i].allocationType & (1 << index)) != 0) count++;
        }

        result = new IPool.Claim[](count);
        uint256 j;
        for (uint256 i = 0; i < claims.length; i++) {
            if ((claims[i].allocationType & (1 << index)) != 0) {
                result[j] = claims[i];
                j++;
            }
        }
    }

    function extractExtensionParams(
        IPool.Claim[] calldata claims,
        IPool.WithdrawParams[][] calldata allParams,
        uint256 extIndex
    ) internal pure returns (IPool.WithdrawParams[] memory result) {
        uint256 count;
        for (uint256 i = 0; i < claims.length; i++) {
            if ((claims[i].allocationType & (1 << extIndex)) != 0) count++;
        }

        result = new IPool.WithdrawParams[](count);
        uint256 j;
        for (uint256 i = 0; i < claims.length; i++) {
            if ((claims[i].allocationType & (1 << extIndex)) != 0) {
                result[j] = allParams[i][extIndex];
                j++;
            }
        }
    }

    /// @notice Internal function to handle the beforeWithdraw hook
    /// @param self The state of the Extensions library
    /// @param claim The claim data to process
    /// @param params The withdrawal parameters
    function _beforeWithdraw(State storage self, IPool.Claim calldata claim, IPool.WithdrawParams[] calldata params) private {
        uint256 j;

        for (uint256 i = 0; i < self.registry.extensionsLength(); i++) {
            if (_isExtensionAt(claim, j)) {
                _releasable += self.registry.extensionAt(j).beforeWithdraw(claim, params[j]);
                j++;
            }
        }
    }

    /// @notice Internal function to handle the afterWithdraw hook
    /// @param self The state of the Extensions library
    /// @param claim The claim data to process
    /// @param params The withdrawal parameters
    function _afterWithdraw(State storage self, IPool.Claim calldata claim, IPool.WithdrawParams[] calldata params) private {
        uint256 j;

        for (uint256 i = 0; i < self.registry.extensions.length; i++) {
            if (_isExtensionAt(claim, j)) {
                _releasable += self.registry.extensionAt(j).afterWithdraw(claim, params[j]);
                j++;
            }
        }
    }
}
