// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import { TransferInstruction } from "./Token.sol";

struct PreHookResult {
  TransferInstruction[] instructions;
  bytes postHookContext;
  bool requiresPostHook;
}
