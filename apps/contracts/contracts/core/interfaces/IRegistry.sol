// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IExtension } from "../../extensions/interfaces/IExtension.sol";

interface IRegistry {
    function register(address extension) external;
    function unregister(bytes32 extensionId) external;
    function extensionOf(bytes32 extensionId) external view returns (IExtension);
}
