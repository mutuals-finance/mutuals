// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IPool } from "../../core/interfaces/IPool.sol";
import { Claim } from "../../core/types/Claim.sol";
import { WithdrawParams } from "../../core/types/WithdrawParams.sol";
import { BaseExtension } from "../BaseExtension.sol";

contract OnchainState is BaseExtension {
    /* -------------------------------------------------------------------------- */
    /*                                   ERRORS                                   */
    /* -------------------------------------------------------------------------- */

    /// @notice Throws when the claim parent is invalid
    error OnchainState_InvalidParent();

    /// @notice Throws when the state is invalid
    error OnchainState_InvalidState();

    /* -------------------------------------------------------------------------- */
    /*                            STORAGE                                         */
    /* -------------------------------------------------------------------------- */

    mapping(address => mapping(uint160 => Claim)) private _claims;

    /* -------------------------------------------------------------------------- */
    /*                             INITIALIZATION                             */
    /* -------------------------------------------------------------------------- */

    function beforeInitialize(bytes calldata data) external {
        Claim[] memory __claims = abi.decode(data, (Claim[]));
        for (uint256 i = 0; i < __claims.length; i++) {
            Claim memory claim = __claims[i];
            // msg.sender is 'pool'
            _claims[msg.sender][claim.id] = claim;
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                             EXTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    function checkState(Claim calldata claim, WithdrawParams params) external {
        _checkState(claim);
    }

    function checkBatchState(Claim[] calldata claims, WithdrawParams[] calldata params) external {
        bytes32 lastId;
        for (uint256 i = 0; i < claims.length; i++) {
            _checkState(claims[i]);

            if (lastId != claims[i].parentId) {
                revert OnchainState_InvalidParent();
            }
            lastId = claims[i].id;
        }
    }

    function _checkState(Claim calldata claim) internal {
        if (claim.id <= 0 || !claim.equals(_claims[msg.sender][claim.id])) revert OnchainState_InvalidState();
    }
}
