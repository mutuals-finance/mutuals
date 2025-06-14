// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

/// @notice Parses bytes returned from hooks and the byte selector used to check return selectors from hooks.
/// @dev parseSelector also is used to parse the expected selector
/// For parsing hook returns, note that all hooks return either bytes4 or (bytes4, 32-byte-delta) or (bytes4, 32-byte-delta, uint24).
library ParseBytes {
    function parseSelector(bytes memory result) internal pure returns (bytes4 selector) {
        // equivalent: (selector,) = abi.decode(result, (bytes4, int256));
        assembly ("memory-safe") {
            selector := mload(add(result, 0x20))
        }
    }

    function parseUint256(bytes memory result) internal pure returns (uint256 hookReturn) {
        // equivalent: (, hookReturnDelta) = abi.decode(result, (bytes4, uint256));
        assembly ("memory-safe") {
            hookReturn := mload(add(result, 0x40))
        }
    }
}
