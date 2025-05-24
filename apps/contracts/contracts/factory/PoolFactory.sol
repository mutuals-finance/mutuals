// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import { Initializable } from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import { UUPSUpgradeable } from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import { OwnableUpgradeable } from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import { BeaconProxy } from "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";
import { EnumerableMap } from "@openzeppelin/contracts/utils/structs/EnumerableMap.sol";

import { IPoolFactory } from "./interfaces/IPoolFactory.sol";
import { Pool } from "../pool/Pool.sol";

/**
 * @dev This contract is for creating proxy to access Pool instances.
 *
 * The beacon should be initialized before call Pool constructor.
 *
 */
contract PoolFactory is IPoolFactory, Initializable, OwnableUpgradeable, UUPSUpgradeable {
    using EnumerableMap for EnumerableMap.UintToAddressMap;

    /* -------------------------------------------------------------------------- */
    /*                                   STORAGE                                  */
    /* -------------------------------------------------------------------------- */

    /// @dev Contract that stores the implementation address for Pool.
    /// @dev For more details see https://docs.openzeppelin.com/contracts/3.x/api/proxy#UpgradeableBeacon.
    address public beacon;

    /// @dev Track if a pool has been created
    mapping(address pool => bool) private _created;

    /* -------------------------------------------------------------------------- */
    /*                             INITIALIZATION                             */
    /* -------------------------------------------------------------------------- */

    /**
     * @dev Initializes the contract.
     */
    function __PoolFactory_init(address _owner, address _beacon) external initializer {
        __UUPSUpgradeable_init_unchained();
        __Ownable_init_unchained(_owner);
        __PoolFactory_init_unchained(_beacon);
    }

    /// @custom:oz-upgrades-unsafe-allow missing-initializer-call
    function __PoolFactory_init_unchained(address _beacon) internal onlyInitializing {
        beacon = _beacon;
    }

    /* -------------------------------------------------------------------------- */
    /*                             EXTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    /**
     * @notice Create a new payment pool with params and owner.
     * @dev Uses a hash-based incrementing nonce over params and owner.
     * @dev designed to be used with integrating contracts to avoid salt management and needing to handle the potential
     * for griefing via front-running.
     * @param _initialOwner Params to create pool with.
     * @param _salt Salt.
     */
    function createPool(
        address _initialOwner,
        address _registry,
        bytes32[] calldata _extensions,
        bytes[] calldata _data,
        uint _salt
    ) external {
        address beaconProxy = _deployProxy(_getData(_initialOwner, _registry, _extensions, _data), _salt);
        _created[beaconProxy] = true;
        emit PoolCreated(beaconProxy, _initialOwner, _registry, _extensions, _data);
    }

    //returns address that contract with such arguments will be deployed on
    function getAddress(
        address _initialOwner,
        address _registry,
        bytes32[] calldata _extensions,
        bytes[] calldata _data,
        uint _salt
    ) public view returns (address) {
        bytes memory bytecode = _getCreationBytecode(_getData(_initialOwner, _registry, _extensions, _data));

        bytes32 hash = keccak256(abi.encodePacked(bytes1(0xff), address(this), _salt, keccak256(bytecode)));
        return address(uint160(uint(hash)));
    }

    function created(address pool) external view returns (bool) {
        return _created[pool];
    }

    /* -------------------------------------------------------------------------- */
    /*                         PRIVATE/INTERNAL FUNCTIONS                         */
    /* -------------------------------------------------------------------------- */

    //deploying BeaconProxy contract with create2
    function _deployProxy(bytes memory data, uint salt) internal returns (address proxy) {
        bytes memory bytecode = _getCreationBytecode(data);
        assembly {
            proxy := create2(0, add(bytecode, 0x20), mload(bytecode), salt)
            if iszero(extcodesize(proxy)) {
                revert(0, 0)
            }
        }
    }

    //adding constructor arguments to BeaconProxy bytecode
    function _getCreationBytecode(bytes memory _data) internal view returns (bytes memory) {
        return abi.encodePacked(type(BeaconProxy).creationCode, abi.encode(beacon, _data));
    }

    function _getData(
        address _initialOwner,
        address _registry,
        bytes32[] calldata _extensions,
        bytes[] calldata _data
    ) internal pure returns (bytes memory) {
        return abi.encodeWithSelector(Pool(address(0)).__Pool_init.selector, _initialOwner, _registry, _extensions, _data);
    }

    /// @dev Upgrades the implementation of the proxy to new address.
    function _authorizeUpgrade(address) internal override onlyOwner {}
}
