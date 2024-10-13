import {
  AllocationItemNode,
  AllocationType,
  CreateDefaultAllocationFn,
} from "../types";

export const DEFAULT_ALLOCATION_NODE: Record<
  AllocationType,
  AllocationItemNode | CreateDefaultAllocationFn
> = {
  [AllocationType.Fixed]: {
    node: {
      value: 0,
      allocationType: AllocationType.Fixed,
      recipient: "0x",
    },
  },
  [AllocationType.Percentage]: {
    node: {
      value: 0,
      allocationType: AllocationType.Percentage,
      recipient: "0x",
    },
  },
  [AllocationType.PercentagePrioritized]: (allocationType) => ({
    node: {
      value: 0,
      allocationType: AllocationType.PercentagePrioritized,
    },
    children: new Array(2).fill(DEFAULT_ALLOCATION_NODE[allocationType]),
  }),
  [AllocationType.FixedPrioritized]: (allocationType) => ({
    node: {
      value: 0,
      allocationType: AllocationType.FixedPrioritized,
    },
    children: new Array(2).fill(DEFAULT_ALLOCATION_NODE[allocationType]),
  }),
  [AllocationType.PercentageTimed]: (allocationType) => ({
    node: {
      value: 0,
      allocationType: AllocationType.PercentageTimed,
      timespan: 0,
    },
    children: new Array(2).fill(DEFAULT_ALLOCATION_NODE[allocationType]),
  }),
  [AllocationType.FixedTimed]: (allocationType) => ({
    node: {
      value: 0,
      allocationType: AllocationType.FixedTimed,
      timespan: 0,
    },
    children: new Array(2).fill(DEFAULT_ALLOCATION_NODE[allocationType]),
  }),
};
