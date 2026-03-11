import * as DefaultAllocation from "./default-allocation";
import * as PriorityGating from "./priority-gating";
import * as TimelockAllocation from "./timelock-allocation";
import * as TokenAllocation from "./token-allocation";
import * as TokenGating from "./token-gating";
export default [
  DefaultAllocation.module,
  PriorityGating.module,
  TimelockAllocation.module,
  TokenAllocation.module,
  TokenGating.module,
];
