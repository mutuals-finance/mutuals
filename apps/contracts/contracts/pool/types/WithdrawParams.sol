// SPDX-License-Identifier: MIT

pragma solidity ^0.8.29;

import { Token } from "./Token.sol";

/// @notice Parameter struct for `WithdrawParams`
struct WithdrawParams {
    // amount to withdraw
    uint256 amount;
    // token to withdraw
    Token token;
    // strategy extension specific data
    bytes strategyData;
    // state extension specific data
    bytes stateData;
}
