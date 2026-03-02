// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import {ERC165, IERC165} from "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import {IModule} from "../interfaces/IModule.sol";

/**
 * @title BaseModule
 * @notice Base contract for all ModularPool modules.
 * @dev Implements ERC-165 to support IModule's interface, which is a requirement for module installation.
 */
abstract contract BaseModule is ERC165, IModule {

  error NotImplemented();

  /**
   * @dev Returns true if this contract implements the interface defined by
   * `interfaceId`. See the corresponding EIP-165 documentation to learn more.
   * * Supporting the IModule interface is a requirement for module tracking.
   * @param interfaceId The interface ID to check for support.
   * @return True if the contract supports `interfaceId`.
   */
  function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
    return interfaceId == type(IModule).interfaceId || super.supportsInterface(interfaceId);
  }
}
