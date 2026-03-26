// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import {IModule} from "../../interfaces/IModule.sol";
import {IValidationModule} from "../../interfaces/IValidationModule.sol";
import {Claim} from "../../types/Token.sol";
import {BaseModule} from "../BaseModule.sol";

/**
 * @title Onchain Mapping Validation Module
 * @notice Validates claims using a simple on-chain allowlist.
 * @dev Dynamic `vArgs` are ignored because the truth is stored entirely in state.
 */
contract OnchainMappingValidationModule is IValidationModule, BaseModule {
  // Pool => Claim ID => Is Allowed
  mapping(address => mapping(uint256 => bool)) public exists;

  error ClaimNotAllowed(uint256 claimId);

  // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  // ┃    Module interface functions    ┃
  // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

  /// @inheritdoc IModule
  function moduleId() external pure override returns (string memory) {
    return "mutuals.onchain-mapping-validation-module.1.0.0";
  }

  /// @inheritdoc IModule
  function onInstall(bytes calldata data) external override {
    if (data.length > 0) {
      uint256[] memory initialClaims = abi.decode(data, (uint256[]));
      for(uint256 i = 0; i < initialClaims.length; i++) {
        exists[msg.sender][initialClaims[i]] = true;
      }
    }
  }

  /// @inheritdoc IModule
  function onUninstall(bytes calldata /* data */) external override {}

  function supportsInterface(bytes4 interfaceId) public view virtual override(BaseModule, IERC165) returns (bool) {
    return interfaceId == type(IValidationModule).interfaceId || super.supportsInterface(interfaceId);
  }

  // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  // ┃    Validation functions          ┃
  // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

  /**
   * @notice Toggles the validity of a specific claim.
   */
  function setClaimStatus(uint256 claimId, bool status) external {
    exists[msg.sender][claimId] = status;
  }

  /**
   * @notice Toggles the validity of multiple claims in one transaction.
   */
  function setClaimStatusBatch(uint256[] calldata claimIds, bool[] calldata statuses) external {
    require(claimIds.length == statuses.length, "ArrayLengthMismatch");
    for(uint256 i = 0; i < claimIds.length; i++) {
      exists[msg.sender][claimIds[i]] = statuses[i];
    }
  }

  /// @inheritdoc IValidationModule
  function validateRuntime(Claim calldata claim, bytes calldata /* vArgs */) external view override {
    if (!exists[msg.sender][claim.id]) {
      revert ClaimNotAllowed(claim.id);
    }
  }

  /// @inheritdoc IValidationModule
  function validateRuntimeBatch(Claim[] calldata claims, bytes[] calldata /* vArgs */) external view override {
    for (uint256 i = 0; i < claims.length; i++) {
      if (!exists[msg.sender][claims[i].id]) {
        revert ClaimNotAllowed(claims[i].id);
      }
    }
  }
}
