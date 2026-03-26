// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

/// @title IModuleRegistry
/// @notice Interface for the permissionless registry and attestation system.
interface IModuleRegistry {
  /* -------------------------------------------------------------------------- */
  /* STRUCTS                                  */
  /* -------------------------------------------------------------------------- */

  struct AttestationRecord {
    uint48 time;
    uint48 expirationTime;
    uint48 revocationTime;
  }

  /* -------------------------------------------------------------------------- */
  /* ERRORS                                   */
  /* -------------------------------------------------------------------------- */

  error Registry_AlreadyRegistered();
  error Registry_NotRegistered();
  error Registry_InvalidModuleInterface();
  error Registry_AlreadyAttested();
  error Registry_AttestationNotFound();
  error Registry_AlreadyRevoked();

  /* -------------------------------------------------------------------------- */
  /* EVENTS                                   */
  /* -------------------------------------------------------------------------- */

  event ModuleRegistered(address indexed module, string moduleId, address indexed deployer);
  event Attested(address indexed module, address indexed attester, uint48 expirationTime);
  event Revoked(address indexed module, address indexed revoker);

  /* -------------------------------------------------------------------------- */
  /* EXTERNAL FUNCTIONS                             */
  /* -------------------------------------------------------------------------- */

  /**
   * @notice Allows anyone to register a newly deployed module in the ecosystem.
   * @param module The address of the deployed IModule.
   */
  function registerModule(address module) external;

  /**
   * @notice Allows an auditor/attester to vouch for a module's security.
   * @param module The module to attest.
   * @param expirationTime Optional expiration timestamp (0 for no expiration).
   */
  function attest(address module, uint48 expirationTime) external;

  /**
   * @notice Allows an auditor to revoke their previous attestation immediately.
   * @param module The module to revoke the attestation for.
   */
  function revoke(address module) external;

  /* -------------------------------------------------------------------------- */
  /* VIEW FUNCTIONS                              */
  /* -------------------------------------------------------------------------- */

  /**
   * @notice Returns whether a module has been registered.
   * @param module The address of the module.
   */
  function isRegistered(address module) external view returns (bool);

  /**
   * @notice Fetches the exact attestation record for a given module and attester.
   */
  function attestations(address module, address attester) external view returns (uint48 time, uint48 expirationTime, uint48 revocationTime);

  /**
   * @notice Checks if a module has a valid, unrevoked, and unexpired attestation from a specific attester.
   */
  function isValidAttestation(address module, address attester) external view returns (bool);

  /**
   * @notice Helper for the Pool contract: Checks if AT LEAST ONE trusted attester has approved the module.
   */
  function isAttestedByAny(address module, address[] calldata trustedAttesters) external view returns (bool);
}
