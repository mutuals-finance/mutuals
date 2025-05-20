// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import { IPool } from "../pool/interfaces/IPool.sol";
import { IExtension } from "./interfaces/IExtension.sol";
import { IRegistry } from "../pool/interfaces/IRegistry.sol";
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
    string internal _EXTENSION_NAME;
    // immutable?

    /// @notice The id of the extension
    bytes32 internal _EXTENSION_ID;
    // immutable?

    /// @notice The factory contract
    address internal _poolFactory;

    /* -------------------------------------------------------------------------- */
    /*                             INITIALIZE                             */
    /* -------------------------------------------------------------------------- */

    constructor(string memory _extensionName, bytes32 _extensionId) {
        _EXTENSION_NAME = _extensionName;
        _EXTENSION_ID = _extensionId;
    }

    function initialize(address __poolFactory) external virtual {
        __BaseExtension_init(__poolFactory);

        // emit Initialized(__poolFactory);
    }

    function __BaseExtension_init(address __poolFactory) internal virtual {
        // check if factory is not initialized already, if it is, revert
        if (__poolFactory != address(0)) revert BaseExtension_AlreadyInitialized();

        // check if the factory address is valid and not zero (0), if it is, revert
        if (__poolFactory == address(0)) revert BaseExtension_InvalidRegistry();
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

    function beforeDonate(
        // solc-ignore-next-line unused-param
        Claim calldata claim,
        // solc-ignore-next-line unused-param
        WithdrawParams calldata params
    ) external virtual {
        revert BaseExtension_UnsupportedHook();
    }

    function afterDonate(
        // solc-ignore-next-line unused-param
        Claim calldata claim,
        // solc-ignore-next-line unused-param
        WithdrawParams calldata params
    ) external virtual {
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
     * @param claim The claim
     * @param params The params
     * @return The calculated pending amount
     */
    function _pending(Claim calldata claim, WithdrawParams calldata params) internal view returns (uint256) {
        uint256 precision = 10_000;
        if (claim.isPercentage()) {
            return
                (IPool(msg.sender).totalReceived(params.token)) /
                precision -
                IPool(msg.sender).released(claim.id, params.token);
        } else {
            return claim.value;
        }
    }

    receive() external payable virtual onlyPoolFactory {}
}
