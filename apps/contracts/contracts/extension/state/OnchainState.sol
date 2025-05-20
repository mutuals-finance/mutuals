// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import { IPool } from "../../pool/interfaces/IPool.sol";
import { Claim } from "../../pool/types/Claim.sol";
import { WithdrawParams } from "../../pool/types/WithdrawParams.sol";
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

    mapping(address => mapping(uint256 => Claim)) private _claims;

    /* -------------------------------------------------------------------------- */
    /*                             INITIALIZATION                                 */
    /* -------------------------------------------------------------------------- */

    constructor() BaseExtension("OnchainState", bytes32(uint256(0x7c93d7))) {}

    function beforeInitialize(bytes calldata data) external override {
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

    function checkState(
        Claim calldata claim,
        // solc-ignore-next-line unused-param
        WithdrawParams calldata params
    ) external view override {
        _checkState(claim);
    }

    function checkBatchState(
        Claim[] calldata claims,
        // solc-ignore-next-line unused-param
        WithdrawParams[] calldata params
    ) external view override {
        uint256 lastId;
        for (uint256 i = 0; i < claims.length; i++) {
            _checkState(claims[i]);

            if (lastId != claims[i].parentId) {
                revert OnchainState_InvalidParent();
            }
            lastId = claims[i].id;
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                             INTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    function _checkState(Claim calldata claim) internal view {
        if (claim.id <= 0 || !claim.equals(_claims[msg.sender][claim.id])) revert OnchainState_InvalidState();
    }
}
