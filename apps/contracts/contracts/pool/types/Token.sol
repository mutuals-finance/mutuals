// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import { IERC1155 } from "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

import { CustomRevert } from "../libraries/CustomRevert.sol";

enum TokenType {
    ERC20,
    ERC721,
    ERC1155
}

type Token is address;

using TokenLibrary for Token global;

/// @title Token
/// @dev This library allows for transferring and holding native tokens and ERC20 tokens
library TokenLibrary {
    /// @notice Additional error when a token is invalid
    error Token_InvalidTokenType();

    /// @notice Additional context for ERC-7751 wrapped error when a native transfer fails
    error Token_NativeTransferFailed();

    /// @notice Additional context for ERC-7751 wrapped error when an ERC20 transfer fails
    error Token_ERC20TransferFailed();

    /// @notice A constant to represent the native token
    Token public constant ADDRESS_ZERO = Token.wrap(address(0));

    function transfer(Token token, address to, uint256 amount) internal {
        // altered from https://github.com/transmissions11/solmate/blob/44a9963d4c78111f77caa0e65d677b8b46d6f2e6/src/utils/SafeTransferLib.sol
        // modified custom error selectors

        bool success;
        if (token.isAddressZero()) {
            assembly ("memory-safe") {
                // Transfer the ETH and revert if it fails.
                success := call(gas(), to, amount, 0, 0, 0, 0)
            }
            // revert with NativeTransferFailed, containing the bubbled up error as an argument
            if (!success) {
                CustomRevert.bubbleUpAndRevertWith(to, bytes4(0), Token_NativeTransferFailed.selector);
            }
        } else {
            assembly ("memory-safe") {
                // Get a pointer to some free memory.
                let fmp := mload(0x40)

                // Write the abi-encoded calldata into memory, beginning with the function selector.
                mstore(fmp, 0xa9059cbb00000000000000000000000000000000000000000000000000000000)
                mstore(add(fmp, 4), and(to, 0xffffffffffffffffffffffffffffffffffffffff)) // Append and mask the "to" argument.
                mstore(add(fmp, 36), amount) // Append the "amount" argument. Masking not required as it's a full 32 byte type.

                success := and(
                    // Set success to whether the call reverted, if not we check it either
                    // returned exactly 1 (can't just be non-zero data), or had no return data.
                    or(and(eq(mload(0), 1), gt(returndatasize(), 31)), iszero(returndatasize())),
                    // We use 68 because the length of our calldata totals up like so: 4 + 32 * 2.
                    // We use 0 and 32 to copy up to 32 bytes of return data into the scratch space.
                    // Counterintuitively, this call must be positioned second to the or() call in the
                    // surrounding and() call or else returndatasize() will be zero during the computation.
                    call(gas(), token, 0, fmp, 68, 0, 32)
                )

                // Now clean the memory we used
                mstore(fmp, 0) // 4 byte `selector` and 28 bytes of `to` were stored here
                mstore(add(fmp, 0x20), 0) // 4 bytes of `to` and 28 bytes of `amount` were stored here
                mstore(add(fmp, 0x40), 0) // 4 bytes of `amount` were stored here
            }
            // revert with ERC20TransferFailed, containing the bubbled up error as an argument
            if (!success) {
                CustomRevert.bubbleUpAndRevertWith(
                    Token.unwrap(token),
                    IERC20.transfer.selector,
                    Token_ERC20TransferFailed.selector
                );
            }
        }
    }

    function balanceOfSelf(Token self) internal view returns (uint256) {
        if (self.isAddressZero()) {
            return address(this).balance;
        } else {
            return IERC20(Token.unwrap(self)).balanceOf(address(this));
        }
    }

    function balanceOf(Token self, address owner) internal view returns (uint256) {
        if (self.isAddressZero()) {
            return owner.balance;
        } else {
            return IERC20(Token.unwrap(self)).balanceOf(owner);
        }
    }

    function balanceOf(Token self, address owner, TokenType tokenType, uint256 id) internal view returns (uint256) {
        if (self.isAddressZero()) {
            return owner.balance;
        } else if (tokenType == TokenType.ERC20) {
            return IERC20(Token.unwrap(self)).balanceOf(owner);
        } else if (tokenType == TokenType.ERC721) {
            return IERC721(Token.unwrap(self)).balanceOf(owner);
        } else if (tokenType == TokenType.ERC1155) {
            return IERC1155(Token.unwrap(self)).balanceOf(owner, id);
        } else {
            revert Token_InvalidTokenType();
        }
    }

    function isAddressZero(Token self) internal pure returns (bool) {
        return Token.unwrap(self) == Token.unwrap(ADDRESS_ZERO);
    }

    function equals(Token self, Token token) internal pure returns (bool) {
        return Token.unwrap(self) == Token.unwrap(token);
    }
}
