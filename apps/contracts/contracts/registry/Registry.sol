// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import { IRegistry } from "./interfaces/IRegistry.sol";
import { IExtension } from "../extension/interfaces/IExtension.sol";

import { Initializable } from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import { UUPSUpgradeable } from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import { OwnableUpgradeable } from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import { EnumerableMap } from "@openzeppelin/contracts/utils/structs/EnumerableMap.sol";

/// @title Extension registry contract
/// @notice This contract.
contract Registry is IRegistry, Initializable, OwnableUpgradeable, UUPSUpgradeable {
    using EnumerableMap for EnumerableMap.UintToAddressMap;

    /* -------------------------------------------------------------------------- */
    /*                                   STORAGE                                  */
    /* -------------------------------------------------------------------------- */

    EnumerableMap.UintToAddressMap private extensions;

    /* -------------------------------------------------------------------------- */
    /*                             INITIALIZATION                             */
    /* -------------------------------------------------------------------------- */

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    /**
     * @dev Initializes the contract.
     */
    function __Registry_init(address _owner) external initializer {
        __UUPSUpgradeable_init_unchained();
        __Ownable_init_unchained(_owner);
        __Registry_init_unchained();
    }

    function __Registry_init_unchained() internal onlyInitializing {}

    /* -------------------------------------------------------------------------- */
    /*                             EXTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    function register(address extension, bytes calldata data) external onlyOwner {
        // Extension address cannot be null.
        IExtension instance = IExtension(extension);
        require(extension != address(0));
        instance.beforeInitialize(data);
        extensions.set(uint256(instance.extensionId()), extension);
        instance.afterInitialize(data);
    }

    function unregister(bytes32 extensionId) external onlyOwner {
        extensions.remove(uint256(extensionId));
    }

    function extensionOf(bytes32 extensionId) external view returns (IExtension) {
        return IExtension(extensions.get(uint256(extensionId)));
    }
    /* -------------------------------------------------------------------------- */
    /*                         PRIVATE/INTERNAL FUNCTIONS                         */
    /* -------------------------------------------------------------------------- */

    /// @dev Upgrades the implementation of the proxy to new address.
    function _authorizeUpgrade(address) internal override onlyOwner {}
}
