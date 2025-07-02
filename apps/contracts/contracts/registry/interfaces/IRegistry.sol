// SPDX-License-Identifier: MIT

pragma solidity ^0.8.29;

import { IExtension } from "../../extension/interfaces/IExtension.sol";

interface IRegistry {
    function register(address extension, bytes calldata data) external;
    function unregister(bytes32 extensionId) external;
    function extensionOf(bytes32 extensionId) external view returns (IExtension);
}
