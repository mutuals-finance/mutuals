// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.19;

/// @title Extension registry contract
/// @notice This contract.
contract Registry {
    Extension[] public extensions;

    // isExtension mapping allows to check if an extension was whitelisted.
    mapping(address => bool) public isExtension;

    /// @notice Constructor
    /// @dev We create an instance of the 'Registry' contract using the _registry and _profileId.
    /// @param _profileId The ID of the allowed profile to execute calls
    constructor() {}

    /// ==========================
    /// ======== External ========
    /// ==========================

    /// @dev Allows to add an extension to the whitelist.
    ///      This can only be done via a Safe transaction.
    /// @param extension Extension to be whitelisted.
    function addExtension(Extension extension) public onlyWallet {
        // Extension address cannot be null.
        require(address(extension) != 0);
        // Extension cannot be added twice.
        require(!isExtension[extension]);
        extensions.push(extension);
        isExtension[extension] = true;
    }

    /// @dev Allows to remove an extension from the whitelist.
    ///      This can only be done via a Safe transaction.
    /// @param extensionIndex Array index position of extension to be removed from whitelist.
    /// @param extension Extension to be removed.
    function removeExtension(uint256 extensionIndex, Extension extension) public onlyWallet {
        // Validate extension address corresponds to extension index.
        require(extensions[extensionIndex] == extension);
        isExtension[extension] = false;
        extensions[extensionIndex] = extensions[extensions.length - 1];
        extensions.length--;
    }

    /// @dev Returns array of extensions.
    /// @return Array of extensions.
    function getExtensions() public view returns (Extension[]) {
        return extensions;
    }
}
