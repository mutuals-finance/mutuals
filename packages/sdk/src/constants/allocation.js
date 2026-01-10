export const stateIds = {
    Offchain: "offchain",
    Onchain: "onchain",
};
export const StateExtensions = {
    [stateIds.Offchain]: {
        key: stateIds.Offchain,
        name: "Offchain",
    },
    [stateIds.Onchain]: {
        key: stateIds.Onchain,
        name: "Onchain",
    },
};
export const strategyIds = {
    DefaultAllocation: "default_allocation",
    TimelockAllocation: "timelock_allocation",
    TokenAllocation: "token_allocation",
    TokenGating: "token_gating",
    PriorityGating: "priority_gating",
};
export const StrategyExtensions = {
    [strategyIds.DefaultAllocation]: {
        key: strategyIds.DefaultAllocation,
        name: "Default Allocation",
    },
    [strategyIds.TimelockAllocation]: {
        key: strategyIds.TimelockAllocation,
        name: "Timelock Allocation",
    },
    [strategyIds.TokenAllocation]: {
        key: strategyIds.TokenAllocation,
        name: "Token Allocation",
    },
    [strategyIds.TokenGating]: {
        key: strategyIds.TokenGating,
        name: "Token Gating",
    },
    [strategyIds.PriorityGating]: {
        key: strategyIds.PriorityGating,
        name: "Priority Gating",
    },
};
export const allocationIds = {
    Percentage: "percentage",
    Fixed: "fixed",
};
export const AllocationType = {
    [allocationIds.Percentage]: {
        key: allocationIds.Percentage,
        name: "Percentage",
    },
    [allocationIds.Fixed]: {
        key: allocationIds.Fixed,
        name: "Fixed",
    },
};
