import { Dispatch } from "react";
import { Allocation, CalculationType, RecipientType } from "@mutuals/sdk/types";
export type UseAllocationDefaults = {
    defaults: Record<CalculationType, Record<RecipientType, Allocation>>;
    setCached: Dispatch<Allocation>;
    cached: Allocation | undefined;
};
export declare const useAllocationDefaults: () => UseAllocationDefaults;
export declare const useAllocationUtils: () => {
    getConfig: (poolAllocations: Allocation[], indices: number[]) => {
        proof: import("@openzeppelin/merkle-tree/dist/core").MultiProof<string, import("@openzeppelin/merkle-tree/dist/bytes").BytesLike>;
        allocations: any[];
    };
    getTree: (as: Allocation[]) => import("@openzeppelin/merkle-tree").SimpleMerkleTree;
    toRaw: (a: Allocation) => import("@mutuals/sdk/types").RawAllocation;
    isItem: (a?: Allocation) => boolean;
    isGroup: (a?: Allocation) => boolean;
    isFixed: (a?: Allocation) => boolean;
    isPercentage: (a?: Allocation) => boolean;
    isPrioritized: (a?: Allocation) => boolean;
    isTimed: (a?: Allocation) => boolean;
};
//# sourceMappingURL=allocation.d.ts.map