// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import { IPool } from "../../pool/interfaces/IPool.sol";
import { TokenType, Token } from "../../pool/types/Token.sol";
import { Claim } from "../../pool/types/Claim.sol";
import { WithdrawParams } from "../../pool/types/WithdrawParams.sol";
import { BaseExtension } from "../BaseExtension.sol";

contract TokenAllocation is BaseExtension {
    /* -------------------------------------------------------------------------- */
    /*                                   ERRORS                                   */
    /* -------------------------------------------------------------------------- */

    /// @notice Throws when the token is zero address
    error TokenAllocation_InvalidToken();
    /// @notice Throws when the owner is zero address
    error TokenAllocation_InvalidOwner();
    /// @notice Throws when the token type is neither ERC20, ERC721 or ERC1155
    error TokenAllocation_InvalidTokenType();
    /// @notice Throws when the balance of the actor is insufficient
    error TokenAllocation_InsufficientBalance();

    /* -------------------------------------------------------------------------- */
    /*                             INITIALIZATION                                 */
    /* -------------------------------------------------------------------------- */

    constructor() BaseExtension("TokenAllocation", bytes32(uint256(0x9c2215))) {}

    /* -------------------------------------------------------------------------- */
    /*                             EXTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    /// @notice Called before withdrawal to return the releasable amount corresponding to the current token balance
    /// @param claim The claim parameters
    /// @param params The withdraw parameters
    /// @return releasable The releasable amount
    function releasable(Claim calldata claim, WithdrawParams calldata params) external view override returns (uint256) {
        return _releasable(claim, params);
    }

    /// @notice Called before withdrawal to check if the requested withdraw amount is releasable
    /// @param claim The claim parameters
    /// @param params The withdraw parameters
    function beforeWithdraw(Claim calldata claim, WithdrawParams calldata params) external view override {
        _checkReleasable(claim, params);
    }

    /// @notice Called before batch withdrawal to check if the requested withdraw amount is releasable
    /// @param claims The claim parameters
    /// @param params The withdraw parameters
    function beforeBatchWithdraw(Claim[] calldata claims, WithdrawParams[] calldata params) external view override {
        for (uint256 i = 0; i < claims.length; i++) {
            _checkReleasable(claims[i], params[i]);
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                             INTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    function _releasable(Claim calldata claim, WithdrawParams calldata params) internal view returns (uint256) {
        (Token token, address owner, uint256 id, TokenType tokenType) = abi.decode(
            claim.strategyData,
            (Token, address, uint256, TokenType)
        );

        // @notice token address can be zero for native token
        if (owner == address(0)) revert TokenAllocation_InvalidOwner();

        return token.balanceOf(owner, tokenType, id) - _pending(claim, params);
    }

    function _checkReleasable(Claim calldata claim, WithdrawParams calldata params) internal view {
        if (params.amount > _releasable(claim, params)) revert TokenAllocation_InsufficientBalance();
    }
}
