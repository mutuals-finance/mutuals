// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import { TransferInstruction } from "./Token.sol";

struct PreHookResult {
  TransferInstruction instruction;
  bytes postHookContext;
  bool requiresPostHook;
}
