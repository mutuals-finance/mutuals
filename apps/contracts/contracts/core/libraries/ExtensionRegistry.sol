// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

/**
 * @title Extension - A contract that executes operations
 * @author Fabian Piper - @fapiper
 */
library ExtensionRegistry {
    using ExtensionRegistry for State;

    /**
     * @dev Data
     */
    struct State {
        uint256 index;
        mapping(uint256 => Extension) extensions;
        mapping(Extension => uint256) indices;
    }

    /// ==========================
    /// ======== Internal ========
    /// ==========================

    /// @dev Allows to add an extension to the whitelist.
    ///      This can only be done via a Safe transaction.
    /// @param self Registry.
    /// @param extension Extension to be whitelisted.
    function register(State calldata self, Extension extension) internal pure {
        require(extension != 0);

        self.extensions[self.index] = extension;
        self.indices[extension] = self.index;
        self.index++;
    }

    /// @dev Allows to remove an extension from the whitelist.
    ///      This can only be done via a Safe transaction.
    /// @param self Registry.
    /// @param extension Extension to be removed.
    function unregister(State calldata self, Extension extension) internal pure {
        self.extensions[self.indices[extension]] = address(0);
        self.indices[extension] = 0;
    }

    /// @dev Allows to remove an extension from the whitelist.
    ///      This can only be done via a Safe transaction.
    /// @param self Registry.
    /// @param extension Extension to be removed.
    function isExtension(State calldata self, Extension extension) internal pure returns (bool) {
        return self.indices[extension] != 0;
    }

    /// @dev Allows to remove an extension from the whitelist.
    ///      This can only be done via a Safe transaction.
    /// @param self Registry.
    /// @param extension Extension to be removed.
    function getExtensionsOf(State calldata self, uint256 flag) internal pure returns (Extension[] extensions) {
        for (uint256 i = 0; i < self.index; i++) {
            uint256 mask = 1 << i;

            if (mask & flag != 0) {
                extensions.push(self.extensions[i]);
            }
        }

        return extensions;
    }
}
