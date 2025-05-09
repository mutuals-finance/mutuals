// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IPool {
    struct Claim {
        // node id
        uint160 id;
        // token to withdraw
        uint256 token;
        // allocation type
        uint8 allocationType;
        // allocated value
        uint256 value;
        // extension specific data
        bytes data;
    }

    struct WithdrawParams {
        // amount to withdraw
        uint256 amount;
        // extension specific data
        bytes data;
    }
}
