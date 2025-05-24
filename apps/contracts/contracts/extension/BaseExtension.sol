// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import { IPool } from "../pool/interfaces/IPool.sol";
import { IPoolFactory } from "../factory/interfaces/IPoolFactory.sol";
import { IExtension } from "./interfaces/IExtension.sol";
import { IRegistry } from "../registry/interfaces/IRegistry.sol";
import { Claim } from "../pool/types/Claim.sol";
import { WithdrawParams } from "../pool/types/WithdrawParams.sol";

/// @title BaseExtension Contract
/// @notice This contract is the base contract for all extensions
/// @dev This contract is implemented by all extensions.
abstract contract BaseExtension is IExtension {
    /* -------------------------------------------------------------------------- */
    /*                                   ERRORS                                   */
    /* -------------------------------------------------------------------------- */

    /// @notice Throws when the hook is not implemented
    error BaseExtension_UnsupportedHook();

    /// @notice Throws when the caller is not deployed by the PoolFactory
    error BaseExtension_UnknownPool();

    // @notice Throws when the factory address is invalid (zero address)
    error BaseExtension_InvalidFactory();

    /// @notice Throws when the extension is already initialized
    error BaseExtension_AlreadyInitialized();

    /* -------------------------------------------------------------------------- */
    /*                            STORAGE                                         */
    /* -------------------------------------------------------------------------- */

    /// @notice The name of the extension
    string internal _EXTENSION_NAME;

    /// @notice The id of the extension
    bytes32 internal _EXTENSION_ID;

    /// @notice The address of the pool factory contract
    IPoolFactory internal _factory;

    /* -------------------------------------------------------------------------- */
    /*                             INITIALIZE                             */
    /* -------------------------------------------------------------------------- */

    constructor(string memory _extensionName, bytes32 _extensionId) {
        _EXTENSION_NAME = _extensionName;
        _EXTENSION_ID = _extensionId;
    }

    function initialize(address __factory) external {
        __BaseExtension_init(__factory);
        // emit Initialized();
    }

    function __BaseExtension_init(address __factory) internal virtual {
        // check if factory is not initialized already, if it is, revert
        if (__factory != address(0)) revert BaseExtension_AlreadyInitialized();

        // check if the factory address is valid and not zero (0), if it is, revert
        if (__factory == address(0)) revert BaseExtension_InvalidFactory();
        _factory = IPoolFactory(__factory);
    }

    /* -------------------------------------------------------------------------- */
    /*                             EXTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    function extensionId() external view returns (bytes32) {
        return _EXTENSION_ID;
    }

    function extensionName() external view returns (string memory) {
        return _EXTENSION_NAME;
    }

    function beforeInitialize(
        // solc-ignore-next-line unused-param
        bytes calldata data
    ) external virtual {
        revert BaseExtension_UnsupportedHook();
    }

    function afterInitialize(
        // solc-ignore-next-line unused-param
        bytes calldata data
    ) external virtual {
        revert BaseExtension_UnsupportedHook();
    }

    function beforeInitializePool(
        // solc-ignore-next-line unused-param
        bytes calldata data
    ) external virtual {
        revert BaseExtension_UnsupportedHook();
    }

    function afterInitializePool(
        // solc-ignore-next-line unused-param
        bytes calldata data
    ) external virtual {
        revert BaseExtension_UnsupportedHook();
    }

    function checkState(
        // solc-ignore-next-line unused-param
        Claim calldata claim,
        // solc-ignore-next-line unused-param
        WithdrawParams calldata params
    ) external view virtual {
        revert BaseExtension_UnsupportedHook();
    }

    function checkBatchState(
        // solc-ignore-next-line unused-param
        Claim[] calldata claims,
        // solc-ignore-next-line unused-param
        WithdrawParams[] calldata params
    ) external view virtual {
        revert BaseExtension_UnsupportedHook();
    }

    function releasable(
        // solc-ignore-next-line unused-param
        Claim calldata claim,
        // solc-ignore-next-line unused-param
        WithdrawParams calldata params
    ) external view virtual returns (uint256) {
        revert BaseExtension_UnsupportedHook();
    }

    function beforeWithdraw(
        // solc-ignore-next-line unused-param
        Claim calldata claim,
        // solc-ignore-next-line unused-param
        WithdrawParams calldata params
    ) external virtual {
        revert BaseExtension_UnsupportedHook();
    }

    function beforeBatchWithdraw(
        // solc-ignore-next-line unused-param
        Claim[] calldata claims,
        // solc-ignore-next-line unused-param
        WithdrawParams[] calldata params
    ) external virtual {
        revert BaseExtension_UnsupportedHook();
    }

    function afterWithdraw(
        // solc-ignore-next-line unused-param
        Claim calldata claim,
        // solc-ignore-next-line unused-param
        WithdrawParams calldata params
    ) external virtual {
        revert BaseExtension_UnsupportedHook();
    }

    function afterBatchWithdraw(
        // solc-ignore-next-line unused-param
        Claim[] calldata claims,
        // solc-ignore-next-line unused-param
        WithdrawParams[] calldata params
    ) external virtual {
        revert BaseExtension_UnsupportedHook();
    }

    /* -------------------------------------------------------------------------- */
    /*                             INTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    /**
     * @notice Calculates the actual amount based on allocation of native or erc20 token
     * @param claim The claim
     * @param params The params
     * @return The calculated pending amount
     */
    function _pending(Claim calldata claim, WithdrawParams calldata params) internal view returns (uint256) {
        uint256 precision = 10_000;
        if (claim.isPercentage()) {
            IPool pool = _pool();
            return pool.totalReceived(params.token) / precision - pool.released(claim.id, params.token);
        } else {
            return claim.value;
        }
    }

    // @notice Returns only the pool contract instance that was created by the factory
    function _pool() internal view returns (IPool) {
        return IPool(msg.sender);
    }

    /// @notice Checks if the pool was created by the factory
    function _checkPoolCreated(IPool pool) internal view {
        if (!_factory.created(address(pool))) {
            revert BaseExtension_UnknownPool();
        }
    }

    receive() external payable virtual {}
}
