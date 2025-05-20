// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IPool } from "../../core/interfaces/IPool.sol";
import { TokenType, Token } from "../../core/types/Token.sol";
import { Claim } from "../../core/types/Claim.sol";
import { WithdrawParams } from "../../core/types/WithdrawParams.sol";
import { BaseExtension } from "../BaseExtension.sol";

/// @title TokenGating
/// @notice This contract is used to check if the user has a certain token balance before allowing them to withdraw
/// @dev This contract is used as a strategy extension for a pool
contract TokenGating is BaseExtension {
    /* -------------------------------------------------------------------------- */
    /*                                   ERRORS                                   */
    /* -------------------------------------------------------------------------- */

    /// @notice Throws when the token is zero address
    error TokenGating_InvalidToken();
    /// @notice Throws when the owner is zero address
    error TokenGating_InvalidOwner();
    /// @notice Throws when the balance of the actor is insufficient
    error TokenGating_InsufficientBalance();

    /* -------------------------------------------------------------------------- */
    /*                             INITIALIZATION                                 */
    /* -------------------------------------------------------------------------- */

    constructor() BaseExtension("TokenGating", bytes32(uint256(0xf441f3)))  {}

    /* -------------------------------------------------------------------------- */
    /*                             EXTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    /// @notice Called before withdrawal to check if the token balance is greater than the threshold
    /// @param claim The claim parameters
    /// @param params The withdraw parameters
    function beforeWithdraw(Claim calldata claim, WithdrawParams calldata params) external override view {
        _checkBalance(claim, params);
    }

    /// @notice Called before batch withdrawal to check if the token balance is greater than the threshold
    /// @param claims The claim parameters
    /// @param params The withdraw parameters
    function beforeBatchWithdraw(Claim[] calldata claims, WithdrawParams[] calldata params) external override view {
        for (uint256 i = 0; i < claims.length; i++) {
            _checkBalance(claims[i], params[i]);
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                             INTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    /// @notice Check if the token balance is greater than the threshold
    /// @param claim The claim parameters
    /// @param params The withdraw parameters
    function _checkBalance(Claim calldata claim, WithdrawParams calldata params) internal view {
        (Token token, address owner, uint256 id, TokenType tokenType, uint256 threshold) = abi.decode(
            claim.strategyData,
            (Token, address, uint256, TokenType, uint256)
        );

        if (token.isAddressZero()) revert TokenGating_InvalidToken();
        if (owner == address(0)) revert TokenGating_InvalidOwner();

        if (token.balanceOf(owner, tokenType, id) < threshold) revert TokenGating_InsufficientBalance();
    }
}
