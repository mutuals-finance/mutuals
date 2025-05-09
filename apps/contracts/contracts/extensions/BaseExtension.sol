// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

/// @title BaseExtension Contract
/// @notice This contract is the base contract for all extensions
/// @dev This contract is implemented by all extensions.
abstract contract BaseExtension is IBaseStrategy {
    /// ==========================
    /// === Storage Variables ====
    /// ==========================
    /// @notice The name of the extension
    string internal immutable _EXTENSION_NAME;

    /// @notice The id of the extension
    uint256 internal immutable _EXTENSION_ID;

    /// ====================================
    /// ========== Constructor =============
    /// ====================================

    /// @notice Constructor to set the Extension contract
    /// @param _extensionId Id of the extension
    constructor(string memory _extensionName, uint256 memory _extensionId) {
        _EXTENSION_NAME = _extensionName;
        _EXTENSION_ID = _extensionId;
    }

    /// ===============================
    /// ========= Initialize ==========
    /// ===============================

    /// @notice Initialize the extension
    /// @param __poolId The pool id
    /// @param _data custom data to be used to initialize the extension
    function initialize(uint256 __poolId, bytes memory _data) external virtual override {
        __BaseStrategy_init(__poolId);
        _initializeStrategy(__poolId, _data);

        emit Initialized(__poolId, _data);
    }

    /// ====================================
    /// =========== Modifiers ==============
    /// ====================================

    /// ================================
    /// =========== Views ==============
    /// ================================

    /// @notice Getter for the '_EXTENSION_ID'.
    /// @return _extensionId The ID of the extension
    function getExtensionId() external view override returns (uint256) {
        return _EXTENSION_ID;
    }

    /// @notice Getter for the '_EXTENSION_NAME'.
    /// @return _extensionName The name of the extension
    function getExtensionName() external view override returns (string) {
        return _EXTENSION_NAME;
    }

    /// ====================================
    /// =========== Functions ==============
    /// ====================================

    /// @notice Initializes the 'Basetrategy'.
    function __BaseStrategy_init() internal virtual {}

    /// @notice Increases the pool amount.
    /// @dev Increases the '_poolAmount' by '_amount'. Only 'Allo' contract can call this.
    /// @param _amount The amount to increase the pool by
    function increasePoolAmount(uint256 _amount) external override onlyAllo {
        _beforeIncreasePoolAmount(_amount);
        _poolAmount += _amount;
        _afterIncreasePoolAmount(_amount);
    }

    /// @notice Withdraws tokens from the pool.
    /// @dev Withdraws '_amount' of '_token' to '_recipient'
    /// @param _token The address of the token
    /// @param _amount The amount to withdraw
    /// @param _recipient The address to withdraw to
    function withdraw(address _token, uint256 _amount, address _recipient) external override onlyPoolManager(msg.sender) {
        _beforeWithdraw(_token, _amount, _recipient);
        // If the token is the pool token, revert if the amount is greater than the pool amount
        if (_token == _ALLO.getPool(_poolId).token) {
            if (_token.getBalance(address(this)) - _amount < _poolAmount) {
                revert BaseStrategy_WithdrawMoreThanPoolAmount();
            }
        }
        _token.transferAmount(_recipient, _amount);
        _afterWithdraw(_token, _amount, _recipient);

        emit Withdrew(_token, _amount, _recipient);
    }

    /// @notice Registers recipients to the extension.
    /// @dev Registers multiple recipient and returns the IDs of the recipients. The encoded '_data' will be determined by the
    ///      extension implementation. Only 'Allo' contract can call this when it is initialized.
    /// @param _recipients The addresses of the recipients to register
    /// @param _data The data to use to register the recipient
    /// @param _sender The address of the sender
    /// @return _recipientIds The recipientIds
    function register(
        address[] memory _recipients,
        bytes memory _data,
        address _sender
    ) external payable onlyAllo returns (address[] memory _recipientIds) {
        _beforeRegisterRecipient(_recipients, _data, _sender);
        _recipientIds = _register(_recipients, _data, _sender);
        _afterRegisterRecipient(_recipients, _data, _sender);
    }

    /// @notice Allocates to recipients.
    /// @dev The encoded '_data' will be determined by the extension implementation. Only 'Allo' contract can
    ///      call this when it is initialized.
    /// @param _recipients The addresses of the recipients to allocate to
    /// @param _amounts The amounts to allocate to the recipients
    /// @param _data The data to use to allocate to the recipient
    /// @param _sender The address of the sender
    function allocate(
        address[] memory _recipients,
        uint256[] memory _amounts,
        bytes memory _data,
        address _sender
    ) external payable onlyAllo {
        _beforeAllocate(_recipients, _data, _sender);
        _allocate(_recipients, _amounts, _data, _sender);
        _afterAllocate(_recipients, _data, _sender);
    }

    /// @notice Distributes funds (tokens) to recipients.
    /// @dev The encoded '_data' will be determined by the extension implementation. Only 'Allo' contract can
    ///      call this when it is initialized.
    /// @param _recipientIds The IDs of the recipients
    /// @param _data The data to use to distribute to the recipients
    /// @param _sender The address of the sender
    function distribute(address[] memory _recipientIds, bytes memory _data, address _sender) external onlyAllo {
        _beforeDistribute(_recipientIds, _data, _sender);
        _distribute(_recipientIds, _data, _sender);
        _afterDistribute(_recipientIds, _data, _sender);
    }

    /// ====================================
    /// ============ Internal ==============
    /// ====================================

    /// @notice This will register a recipient, set their status (and any other extension specific values), and
    ///         return the ID of the recipient.
    /// @dev Able to change status all the way up to Accepted, or to Pending and if there are more steps, additional
    ///      functions should be added to allow the owner to check this. The owner could also check attestations directly
    ///      and then Accept for instance.
    /// @param _recipients The addresses of the recipients to register
    /// @param _data The data to use to register the recipient
    /// @param _sender The address of the sender
    /// @return _recipientIds The ID of the recipient
    function _register(
        address[] memory _recipients,
        bytes memory _data,
        address _sender
    ) internal virtual returns (address[] memory _recipientIds);

    /// @notice This will allocate to recipients.
    /// @dev The encoded '_data' will be determined by the extension implementation.
    /// @param _recipients The addresses of the recipients to allocate to
    /// @param _amounts The amounts to allocate to the recipients
    /// @param _data The data to use to allocate to the recipient
    /// @param _sender The address of the sender
    function _allocate(
        address[] memory _recipients,
        uint256[] memory _amounts,
        bytes memory _data,
        address _sender
    ) internal virtual;

    /// @notice This will distribute funds (tokens) to recipients.
    /// @dev most strategies will track a TOTAL amount per recipient, and a PAID amount, and pay the difference
    /// this contract will need to track the amount paid already, so that it doesn't double pay.
    /// @param _recipientIds The ids of the recipients to distribute to
    /// @param _data Data required will depend on the extension implementation
    /// @param _sender The address of the sender
    function _distribute(address[] memory _recipientIds, bytes memory _data, address _sender) internal virtual;

    /// ===================================
    /// ============== Hooks ==============
    /// ===================================

    /// @notice Hook called before increasing the pool amount.
    /// @param _amount The amount to increase the pool by
    function _beforeIncreasePoolAmount(uint256 _amount) internal virtual {}

    /// @notice Hook called after increasing the pool amount.
    /// @param _amount The amount to increase the pool by
    function _afterIncreasePoolAmount(uint256 _amount) internal virtual {}

    /// @notice Hook called before withdrawing tokens from the pool.
    /// @param _token The address of the token
    /// @param _amount The amount to withdraw
    /// @param _recipient The address to withdraw to
    function _beforeWithdraw(address _token, uint256 _amount, address _recipient) internal virtual {}

    /// @notice Hook called after withdrawing tokens from the pool.
    /// @param _token The address of the token
    /// @param _amount The amount to withdraw
    /// @param _recipient The address to withdraw to
    function _afterWithdraw(address _token, uint256 _amount, address _recipient) internal virtual {}

    /// @notice Hook called before registering a recipient.
    /// @param _recipients The addresses of the recipients to register
    /// @param _data The data to use to register the recipient
    /// @param _sender The address of the sender
    function _beforeRegisterRecipient(address[] memory _recipients, bytes memory _data, address _sender) internal virtual {}

    /// @notice Hook called after registering a recipient.
    /// @param _recipients The addresses of the recipients to register
    /// @param _data The data to use to register the recipient
    /// @param _sender The address of the sender
    function _afterRegisterRecipient(address[] memory _recipients, bytes memory _data, address _sender) internal virtual {}

    /// @notice Hook called before allocating to a recipient.
    /// @param _recipients The addresses of the recipients to allocate to
    /// @param _data The data to use to allocate to the recipient
    /// @param _sender The address of the sender
    function _beforeAllocate(address[] memory _recipients, bytes memory _data, address _sender) internal virtual {}

    /// @notice Hook called after allocating to a recipient.
    /// @param _recipients The addresses of the recipients to allocate to
    /// @param _data The data to use to allocate to the recipient
    /// @param _sender The address of the sender
    function _afterAllocate(address[] memory _recipients, bytes memory _data, address _sender) internal virtual {}

    /// @notice Hook called before distributing funds (tokens) to recipients.
    /// @param _recipientIds The IDs of the recipients
    /// @param _data The data to use to distribute to the recipients
    /// @param _sender The address of the sender
    function _beforeDistribute(address[] memory _recipientIds, bytes memory _data, address _sender) internal virtual {}

    /// @notice Hook called after distributing funds (tokens) to recipients.
    /// @param _recipientIds The IDs of the recipients
    /// @param _data The data to use to distribute to the recipients
    /// @param _sender The address of the sender
    function _afterDistribute(address[] memory _recipientIds, bytes memory _data, address _sender) internal virtual {}

    /// @notice Hook called to initialize the extension
    /// @param __poolId The pool id
    /// @param _data The data to use to initialize the extension
    function _initializeStrategy(uint256 __poolId, bytes memory _data) internal virtual {}

    /// @notice Strategies should be able to receive native token
    /// @dev By default onlyAllo should be able to call this to fund the pool
    /// @dev In case of a extension that needs to receive native token from other sources, this function should be overridden
    receive() external payable virtual onlyAllo {}
}
