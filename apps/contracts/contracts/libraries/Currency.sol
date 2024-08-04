// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/// @title Currency
/// @dev This library allows for transferring and holding native tokens and ERC20 tokens
library Currency {
    /// @notice Thrown when a native transfer fails
    error NativeTransferFailed();

    /// @notice Thrown when an ERC20 transfer fails
    error ERC20TransferFailed();

    address public constant NATIVE = address(0);

    function transfer(address currency, address to, uint256 amount) internal {
        // altered from https://github.com/Vectorized/solady/blob/89101d53b7c8784cca935c1f2f6403639cee48b2/src/utils/SafeTransferLib.sol
        // modified custom error selectors

        if (isNative(currency)) {
            assembly ("memory-safe") {
                // Transfer the ETH and revert if it fails.
                if iszero(call(gas(), to, amount, 0x00, 0x00, 0x00, 0x00)) {
                    mstore(0x00, 0xf4b3b1bc) // `NativeTransferFailed()`.
                    revert(0x1c, 0x04)
                }
            }
        } else {
            assembly ("memory-safe") {
                mstore(0x14, to) // Store the `to` address in [0x20, 0x34).
                mstore(0x34, amount) // Store the `amount` argument in [0x34, 0x54).
                // Store the selector of `transfer(address,uint256)` in [0x10, 0x14).
                // also cleans the upper bits of `to`
                mstore(0x00, 0xa9059cbb000000000000000000000000)
                // Perform the transfer, reverting upon failure.
                if iszero(
                    and(
                        // The arguments of `and` are evaluated from right to left.
                        or(eq(mload(0x00), 1), iszero(returndatasize())), // Returned 1 or nothing.
                        call(gas(), currency, 0, 0x10, 0x44, 0x00, 0x20)
                    )
                ) {
                    mstore(0x00, 0xf27f64e4) // `ERC20TransferFailed()`.
                    revert(0x1c, 0x04)
                }
                mstore(0x34, 0) // Restore the part of the free memory pointer that was overwritten.
            }
        }
    }

    function balanceOfSelf(address currency) internal view returns (uint256) {
        if (isNative(currency)) {
            return address(this).balance;
        } else {
            return IERC20(currency).balanceOf(address(this));
        }
    }

    function balanceOf(address currency, address owner) internal view returns (uint256) {
        if (isNative(currency)) {
            return owner.balance;
        } else {
            return IERC20(currency).balanceOf(owner);
        }
    }

    function isNative(address currency) internal pure returns (bool) {
        return currency == NATIVE;
    }

    function toId(address currency) internal pure returns (uint256) {
        return uint160(currency);
    }

    function fromId(uint256 id) internal pure returns (address) {
        return address(uint160(id));
    }
}
