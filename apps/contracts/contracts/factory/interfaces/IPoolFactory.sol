// SPDX-License-Identifier: MIT

pragma solidity ^0.8.29;

interface IPoolFactory {
    /* -------------------------------------------------------------------------- */
    /*                                   EVENTS                                   */
    /* -------------------------------------------------------------------------- */
    event PoolCreated(
        address indexed pool,
        address indexed owner,
        address indexed registry,
        bytes32[] extensions,
        bytes[] data
    );

    /* -------------------------------------------------------------------------- */
    /*                             EXTERNAL FUNCTIONS                             */
    /* -------------------------------------------------------------------------- */

    function createPool(
        address _initialOwner,
        address _registry,
        bytes32[] calldata _extensions,
        bytes[] calldata _data,
        uint _salt
    ) external;

    function getAddress(
        address _initialOwner,
        address _registry,
        bytes32[] calldata _extensions,
        bytes[] calldata _data,
        uint _salt
    ) external view returns (address);

    function created(address pool) external view returns (bool);
}
