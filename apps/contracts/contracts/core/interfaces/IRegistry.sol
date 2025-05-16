// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { IExtension } from "../../extensions/interfaces/IExtension.sol";

interface IRegistry {

    function register(address extension) external;
    function unregister(uint256 extensionId) external;
    function extensionOf(uint256 extensionId) external view returns (IExtension);

}
