import {
  stateIds,
  strategyIds,
  StateExtensions as MutualsStateExtensions,
  StrategyExtensions as MutualsStrategyExtensions,
} from "@mutuals/sdk";
import { ExtensionType } from "./types";

import { DefaultAllocationInput } from "./components/extensions/default-allocation-input";
import { TokenAllocationInput } from "./components/extensions/token-allocation-input";
import { TokenGatingInput } from "./components/extensions/token-gating-input";
import { PriorityGatingInput } from "./components/extensions/priority-gating-input";
import { TimelockAllocationInput } from "./components/extensions/timelock-allocation-input";

export const StateExtensions: ExtensionType<typeof MutualsStateExtensions> = {
  [stateIds.Offchain]: {
    ...MutualsStateExtensions[stateIds.Offchain],
    renderInput: undefined,
  },
  [stateIds.Onchain]: {
    ...MutualsStateExtensions[stateIds.Onchain],
    renderInput: undefined,
  },
} as ExtensionType<typeof MutualsStateExtensions>;

export const StrategyExtensions: ExtensionType<
  typeof MutualsStrategyExtensions
> = {
  [strategyIds.DefaultAllocation]: {
    ...MutualsStrategyExtensions[strategyIds.DefaultAllocation],
    renderInput: DefaultAllocationInput,
  },
  [strategyIds.TimelockAllocation]: {
    ...MutualsStrategyExtensions[strategyIds.TimelockAllocation],
    renderInput: TimelockAllocationInput,
  },
  [strategyIds.TokenAllocation]: {
    ...MutualsStrategyExtensions[strategyIds.TokenAllocation],
    renderInput: TokenAllocationInput,
  },
  [strategyIds.TokenGating]: {
    ...MutualsStrategyExtensions[strategyIds.TokenGating],
    renderInput: TokenGatingInput,
  },
  [strategyIds.PriorityGating]: {
    ...MutualsStrategyExtensions[strategyIds.PriorityGating],
    renderInput: PriorityGatingInput,
  },
} as ExtensionType<typeof MutualsStrategyExtensions>;

export { stateIds, strategyIds };
