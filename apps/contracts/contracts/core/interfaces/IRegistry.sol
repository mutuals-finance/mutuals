// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IRegistry {
    /// ======================
    /// ======= Structs ======
    /// ======================

    struct Extension {
        bytes32 id;
        string name;
        address owner;
        address anchor;
    }

    /// ======================
    /// ======= Events =======
    /// ======================

    /// @dev Emitted when a extension is created. This will return your anchor address.
    /// @param extensionId The 'extensionId' of the new extension
    /// @param nonce The nonce used to generate the 'anchor' address
    /// @param name The name used to generate the 'anchor' address
    /// @param metadata The 'Metadata' used to generate the 'anchor' address
    /// @param owner The 'owner' used to generate the 'anchor' address
    /// @param anchor The 'anchor' address generated
    event ExtensionCreated(bytes32 indexed extensionId, uint256 nonce, string name, address owner, address anchor);

    /// @dev Emitted when a extension name is updated. This will update the anchor when the name is updated and return it.
    /// @param extensionId The 'extensionId' of the updated extension
    /// @param name The new name used to generate the 'anchor' address
    /// @param anchor The new 'anchor' address generated
    event ExtensionNameUpdated(bytes32 indexed extensionId, string name, address anchor);

    /// @dev Emitted when a extension's metadata is updated.
    /// @param extensionId The 'extensionId' of the updated extension
    /// @param metadata The new 'Metadata'
    event ExtensionMetadataUpdated(bytes32 indexed extensionId, Metadata metadata);

    /// @dev Emitted when a extension owner is updated.
    /// @param extensionId The 'extensionId' of the updated extension
    /// @param owner The new 'owner'
    event ExtensionOwnerUpdated(bytes32 indexed extensionId, address owner);

    /// @dev Emitted when a extension pending owner is updated.
    /// @param extensionId The 'extensionId' of the updated extension
    /// @param pendingOwner The address of the pending owner
    event ExtensionPendingOwnerUpdated(bytes32 indexed extensionId, address pendingOwner);

    /// =========================
    /// ==== View Functions =====
    /// =========================

    /// @dev Returns the 'Extension' for a '_extensionId' passed
    /// @param _extensionId The 'extensionId' to return the 'Extension' for
    /// @return extension The 'Extension' for the '_extensionId' passed
    function getExtensionById(bytes32 _extensionId) external view returns (Extension memory extension);

    /// @dev Returns the 'Extension' for an '_anchor' passed
    /// @param _anchor The 'anchor' to return the 'Extension' for
    /// @return extension The 'Extension' for the '_anchor' passed
    function getExtensionByAnchor(address _anchor) external view returns (Extension memory extension);

    /// @dev Returns a boolean if the '_account' is a member or owner of the '_extensionId' passed in
    /// @param _extensionId The 'extensionId' to check if the '_account' is a member or owner of
    /// @param _account The 'account' to check if they are a member or owner of the '_extensionId' passed in
    /// @return isOwnerOrMemberOfExtension A boolean if the '_account' is a member or owner of the '_extensionId' passed in
    function isOwnerOrMemberOfExtension(
        bytes32 _extensionId,
        address _account
    ) external view returns (bool isOwnerOrMemberOfExtension);

    /// @dev Returns a boolean if the '_account' is an owner of the '_extensionId' passed in
    /// @param _extensionId The 'extensionId' to check if the '_account' is an owner of
    /// @param _owner The 'owner' to check if they are an owner of the '_extensionId' passed in
    /// @return isOwnerOfExtension A boolean if the '_account' is an owner of the '_extensionId' passed in
    function isOwnerOfExtension(bytes32 _extensionId, address _owner) external view returns (bool isOwnerOfExtension);

    /// ====================================
    /// ==== External/Public Functions =====
    /// ====================================

    function createExtension(string memory _name, address _owner) external returns (bytes32 extensionId);

    /// @dev Updates the 'name' of the '_extensionId' passed in and returns the new 'anchor' address
    ///
    /// Requirements: Only the 'Extension' owner can update the name
    ///
    /// Note: The 'name' and 'nonce' are used to generate the 'anchor' address and this will update the 'anchor'
    ///       so please use caution. You can always recreate your 'anchor' address by updating the name back
    ///       to the original name used to create the extension.
    ///
    /// @param _extensionId The 'extensionId' to update the name for
    /// @param _name The new 'name' value
    /// @return anchor The new 'anchor' address
    function updateExtensionName(bytes32 _extensionId, string memory _name) external returns (address anchor);

    /// @dev Updates the 'Metadata' of the '_extensionId' passed in
    ///
    /// Requirements: Only the 'Extension' owner can update the metadata
    ///
    /// @param _extensionId The 'extensionId' to update the metadata for
    /// @param _metadata The new 'Metadata' value
    function updateExtensionMetadata(bytes32 _extensionId, Metadata memory _metadata) external;

    /// @dev Updates the pending 'owner' of the '_extensionId' passed in
    ///
    /// Requirements: Only the 'Extension' owner can update the pending owner
    ///
    /// @param _extensionId The 'extensionId' to update the pending owner for
    /// @param _pendingOwner The new pending 'owner' value
    function updateExtensionPendingOwner(bytes32 _extensionId, address _pendingOwner) external;

    /// @dev Returns the 'Extension' at the '_index' passed
    /// @param _index The 'index' to return the 'Extension' for
    /// @return extension The 'Extension' at the '_index' passed
    function extensionAt(uint256 _index) external view returns (Extension memory extension);
}
