// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {Initializable} from  "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import {BeaconProxy} from "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";
import {UpgradeableBeacon} from "@openzeppelin/contracts/proxy/beacon/UpgradeableBeacon.sol";

import './Pool.sol';
import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/utils/Nonces.sol";

/**
 * @dev This contract is for creating proxy to access Pool instances.
 *
 * The beacon should be initialized before call Pool constructor.
 *
 */
contract PoolFactory is Initializable, UUPSUpgradeable, OwnableUpgradeable {
	/* -------------------------------------------------------------------------- */
	/*                                   EVENTS                                   */
	/* -------------------------------------------------------------------------- */

	event CreatePool(address indexed pool, address owner, bytes32 root);

	/* -------------------------------------------------------------------------- */
	/*                                   STORAGE                                  */
	/* -------------------------------------------------------------------------- */

	/// @dev Contract that stores the implementation address for Pool.
	/// @dev For more details see https://docs.openzeppelin.com/contracts/3.x/api/proxy#UpgradeableBeacon.
	address public beacon;

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
	function __PoolFactory_init(address _owner, address _beacon) external initializer {
		__UUPSUpgradeable_init_unchained();
		__Ownable_init_unchained(_owner);
		__PoolFactory_init_unchained(_owner, _beacon);
	}

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
	 * @param _owner Params to create pool with.
	 * @param _salt Salt.
	 */
	function createPool(
		address _owner,
		bytes32 _root,
		uint _salt
	) external {
		address beaconProxy = deployProxy(getData(_owner, _root), _salt);
		Pool pool = Pool(address(beaconProxy));
		pool.transferOwnership(_owner);
		emit CreatePool(beaconProxy, _owner, _root);
	}

	//returns address that contract with such arguments will be deployed on
	function getAddress(address _owner, bytes32 _root, uint _salt)
	public
	view
	returns (address)
	{
		bytes memory bytecode = getCreationBytecode(getData(_owner, _root));

		bytes32 hash = keccak256(
			abi.encodePacked(bytes1(0xff), address(this), _salt, keccak256(bytecode))
		);

		return address(uint160(uint(hash)));
	}

	/* -------------------------------------------------------------------------- */
	/*                         PRIVATE/INTERNAL FUNCTIONS                         */
	/* -------------------------------------------------------------------------- */

	//deploying BeaconProxy contract with create2
	function deployProxy(bytes memory data, uint salt) internal returns (address proxy){
		bytes memory bytecode = getCreationBytecode(data);
		assembly {
			proxy := create2(0, add(bytecode, 0x20), mload(bytecode), salt)
			if iszero(extcodesize(proxy)) {
				revert(0, 0)
			}
		}
	}

	//adding constructor arguments to BeaconProxy bytecode
	function getCreationBytecode(bytes memory _data) internal view returns (bytes memory) {
		return abi.encodePacked(type(BeaconProxy).creationCode, abi.encode(beacon, _data));
	}

	function getData(address _owner, bytes32 _root) internal pure returns (bytes memory){
		return abi.encodeWithSelector(
			Pool(address(0)).__Pool_init.selector,
			_owner,
			_root
		);
	}

	/// @dev Upgrades the implementation of the proxy to new address.
	function _authorizeUpgrade(address) internal override onlyOwner {}

}
