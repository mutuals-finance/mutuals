// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IPool } from "../core/interfaces/IPool.sol";
import { IExtension } from "./interfaces/IExtension.sol";
import { IRegistry } from "../core/interfaces/IRegistry.sol";
import { Claim } from "../core/types/Claim.sol";
import { WithdrawParams } from "../core/types/WithdrawParams.sol";

/// @title BaseExtension Contract
/// @notice This contract is the base contract for all extensions
/// @dev This contract is implemented by all extensions.
abstract contract BaseExtension is IExtension {
    /* -------------------------------------------------------------------------- */
    /*                                   ERRORS                                   */
    /* -------------------------------------------------------------------------- */

    /// @notice Throws when the hook is not implemented
    error BaseExtension_UnsupportedHook();

    /// @notice Throws when the caller is not the PoolFactory contract
    error BaseExtension_Unauthorized();

    /// @notice Throws when the extension is already initialized
    error BaseExtension_AlreadyInitialized();

    /// @notice Throws when the factory is invalid
    error BaseExtension_InvalidRegistry();

    /* -------------------------------------------------------------------------- */
    /*                            STORAGE                                         */
    /* -------------------------------------------------------------------------- */

    /// @notice The name of the extension
    string internal immutable _EXTENSION_NAME;

    /// @notice The id of the extension
    uint256 internal immutable _EXTENSION_ID;

    /// @notice The factory contract
    address internal _poolFactory;

    /* -------------------------------------------------------------------------- */
    /*                             INITIALIZE                             */
    /* -------------------------------------------------------------------------- */

    constructor(string memory _extensionName, uint256 _extensionId) {
        _EXTENSION_NAME = _extensionName;
        _EXTENSION_ID = _extensionId;
    }

    function initialize(address __poolFactory) external virtual override {
        __BaseExtension_init(__poolFactory);

        // emit Initialized(__poolFactory);
    }

    function __BaseExtension_init(address __poolFactory) internal virtual {
        // check if factory is not initialized already, if it is, revert
        if (__poolFactory != 0) revert BaseExtension_AlreadyInitialized();

        // check if the factory address is valid and not zero (0), if it is, revert
        if (__poolFactory == 0) revert BaseExtension_InvalidRegistry();
        _poolFactory = __poolFactory;
    }

    /* -------------------------------------------------------------------------- */
    /*                             MODIFIERS                             */
    /* -------------------------------------------------------------------------- */

    /// @notice Modifier to check if the 'msg.sender' is the PoolFactory contract.
    /// @dev Reverts if the 'msg.sender' is not the PoolFactory contract.
    modifier onlyPoolFactory() {
        _checkOnlyPoolFactory();
        _;
    }

    /* -------------------------------------------------------------------------- */
    /*                             EXTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    function extensionId() external view override returns (uint256) {
        return _EXTENSION_ID;
    }

    function extensionName() external view override returns (string memory) {
        return _EXTENSION_NAME;
    }

    function beforeInitialize(bytes calldata data) external view override {
        revert BaseExtension_UnsupportedHook();
    }

    function afterInitialize(bytes calldata data) external view override {
        revert BaseExtension_UnsupportedHook();
    }

    function checkState(Claim calldata claim, WithdrawParams calldata params) external view override {
        revert BaseExtension_UnsupportedHook();
    }

    function checkBatchState(Claim[] calldata claims, WithdrawParams[] calldata params) external view override {
        revert BaseExtension_UnsupportedHook();
    }

    function releasable(Claim calldata claim, WithdrawParams calldata params) external view override returns (uint256) {
        revert BaseExtension_UnsupportedHook();
    }

    function beforeWithdraw(Claim calldata claim, WithdrawParams calldata params) external view override {
        revert BaseExtension_UnsupportedHook();
    }

    function beforeBatchWithdraw(Claim[] calldata claims, WithdrawParams[] calldata params) external view override {
        revert BaseExtension_UnsupportedHook();
    }

    function afterWithdraw(Claim calldata claim, WithdrawParams calldata params) external view override {
        revert BaseExtension_UnsupportedHook();
    }

    function afterBatchWithdraw(Claim[] calldata claims, WithdrawParams[] calldata params) external view override {
        revert BaseExtension_UnsupportedHook();
    }

    function beforeDonate(Claim calldata claim, WithdrawParams calldata params) external view override {
        revert BaseExtension_UnsupportedHook();
    }

    function afterDonate(Claim calldata claim, WithdrawParams calldata params) external view override {
        revert BaseExtension_UnsupportedHook();
    }

    /* -------------------------------------------------------------------------- */
    /*                             INTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */
    /// @notice Checks if the 'msg.sender' is the Allo contract.
    /// @dev Reverts if the 'msg.sender' is not the Allo contract.
    function _checkOnlyPoolFactory() internal view virtual {
        if (msg.sender != address(_poolFactory)) revert BaseExtension_Unauthorized();
    }

    /**
     * @notice Calculates the actual amount based on allocation of native or erc20 token
     * @param recipientId The recipient identifier
     * @param token The token address
     * @param totalAmount The total amount available
     * @return The calculated allocation amount
     */
    function _pending(Claim calldata claim, WithdrawParams calldata params) internal view returns (uint256) {
        uint256 precision = 10_000;
        if (claim.isPercentage()) {
            return (IPool(msg.sender).totalReceived()) / precision - IPool(msg.sender).released(params.token, claim.recipient);
        } else {
            return claim.value;
        }
    }

    receive() external payable virtual onlyPoolFactory {}
}
