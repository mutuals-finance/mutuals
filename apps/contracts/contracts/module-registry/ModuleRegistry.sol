// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import { IModule } from "../interfaces/IModule.sol";
import { IModuleRegistry } from "../interfaces/IModuleRegistry.sol";
import { Initializable } from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import { UUPSUpgradeable } from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import { OwnableUpgradeable } from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/// @title ModuleRegistry
/// @notice Permissionless registry for protocol modules with an attestation (auditing) system.
contract ModuleRegistry is IModuleRegistry, Initializable, OwnableUpgradeable, UUPSUpgradeable {

  /* -------------------------------------------------------------------------- */
  /* STORAGE                                                                    */
  /* -------------------------------------------------------------------------- */

  // Tracks if a module has been registered in the ecosystem
  mapping(address => bool) public override isRegistered;

  // moduleAddress => attesterAddress => AttestationRecord
  mapping(address => mapping(address => AttestationRecord)) public override attestations;

  /* -------------------------------------------------------------------------- */
  /* INITIALIZATION                                                             */
  /* -------------------------------------------------------------------------- */

  /// @custom:oz-upgrades-unsafe-allow constructor
  constructor() {
    _disableInitializers();
  }

  function initialize(address _owner) external initializer {
    __UUPSUpgradeable_init();
    __Ownable_init(_owner);
  }

  /* -------------------------------------------------------------------------- */
  /* REGISTRATION                                                               */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IModuleRegistry
  function registerModule(address module) external override {
    if (isRegistered[module]) revert Registry_AlreadyRegistered();

    // Verify it complies with our IModule standard
    try IModule(module).supportsInterface(type(IModule).interfaceId) returns (bool supported) {
      if (!supported) revert Registry_InvalidModuleInterface();
    } catch {
      revert Registry_InvalidModuleInterface();
    }

    string memory id = IModule(module).moduleId();
    isRegistered[module] = true;

    emit ModuleRegistered(module, id, msg.sender);
  }

  /* -------------------------------------------------------------------------- */
  /* ATTESTATION MANAGEMENT                                                     */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IModuleRegistry
  function attest(address module, uint48 expirationTime) external override {
    if (!isRegistered[module]) revert Registry_NotRegistered();

    AttestationRecord memory record = attestations[module][msg.sender];
    if (record.time != 0 && record.revocationTime == 0) revert Registry_AlreadyAttested();

    attestations[module][msg.sender] = AttestationRecord({
      time: uint48(block.timestamp),
      expirationTime: expirationTime,
      revocationTime: 0
    });

    emit Attested(module, msg.sender, expirationTime);
  }

  /// @inheritdoc IModuleRegistry
  function revoke(address module) external override {
    AttestationRecord storage record = attestations[module][msg.sender];

    if (record.time == 0) revert Registry_AttestationNotFound();
    if (record.revocationTime != 0) revert Registry_AlreadyRevoked();

    record.revocationTime = uint48(block.timestamp);

    emit Revoked(module, msg.sender);
  }

  /* -------------------------------------------------------------------------- */
  /* VERIFICATION                                                               */
  /* -------------------------------------------------------------------------- */

  /// @inheritdoc IModuleRegistry
  function isValidAttestation(address module, address attester) public view override returns (bool) {
    if (!isRegistered[module]) return false;

    AttestationRecord memory record = attestations[module][attester];

    if (record.time == 0) return false;
    if (record.revocationTime != 0) return false;
    if (record.expirationTime != 0 && block.timestamp >= record.expirationTime) return false;

    return true;
  }

  /// @inheritdoc IModuleRegistry
  function isAttestedByAny(address module, address[] calldata trustedAttesters) external view override returns (bool) {
    uint256 len = trustedAttesters.length;
    for (uint256 i = 0; i < len; ++i) {
      if (isValidAttestation(module, trustedAttesters[i])) {
        return true;
      }
    }
    return false;
  }

  /* -------------------------------------------------------------------------- */
  /* INTERNAL FUNCTIONS                                                         */
  /* -------------------------------------------------------------------------- */

  function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}
