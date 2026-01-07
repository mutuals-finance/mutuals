import { KeyedValue } from "../types";
export declare const stateIds: {
    Offchain: string;
    Onchain: string;
};
export declare const StateExtensions: KeyedValue<typeof stateIds>;
export declare const strategyIds: {
    DefaultAllocation: string;
    TimelockAllocation: string;
    TokenAllocation: string;
    TokenGating: string;
    PriorityGating: string;
};
export declare const StrategyExtensions: KeyedValue<typeof strategyIds>;
export declare const allocationIds: {
    Percentage: string;
    Fixed: string;
};
export declare const AllocationType: KeyedValue<typeof allocationIds>;
//# sourceMappingURL=allocation.d.ts.map