import { Allocation, CalculationType, RawAllocation } from "../types";
import { StrategyExtensions, StateExtensions } from "../constants";
import { SimpleMerkleTree } from "@openzeppelin/merkle-tree";
export declare const allocation: {
    getConfig: (poolAllocations: Allocation[], indices: number[]) => {
        proof: import("@openzeppelin/merkle-tree/dist/core").MultiProof<string, import("@openzeppelin/merkle-tree/dist/bytes").BytesLike>;
        allocations: any[];
    };
    getTree: (as: Allocation[]) => SimpleMerkleTree;
    toRaw: (a: Allocation) => RawAllocation;
    isItem: (a?: Allocation) => boolean;
    isGroup: (a?: Allocation) => boolean;
    isFixed: (a?: Allocation) => boolean;
    isPercentage: (a?: Allocation) => boolean;
    isPrioritized: (a?: Allocation) => boolean;
    isTimed: (a?: Allocation) => boolean;
};
export declare const getRecipientAllocationOption: (a?: Partial<Allocation>) => Allocation;
export declare const getGroupAllocationOption: (a?: Partial<Allocation>) => any;
export declare const getAllocationRecipientOptions: (current: CalculationType[], cached?: CalculationType[]) => {
    0: any;
    1: any;
    2: any;
    3: any;
};
export declare const getAllocationDefaults: (cached?: Allocation) => {
    5: {
        0: any;
        1: any;
        2: any;
        3: any;
    };
    4: {
        0: any;
        1: any;
        2: any;
        3: any;
    };
};
export declare const recipientTypeName: (recipientType: keyof typeof StateExtensions) => string | undefined;
export declare const calculationTypeName: (calculationType: keyof typeof StrategyExtensions) => string | undefined;
export declare function buildMerkleTree(allocations: Allocation[]): SimpleMerkleTree;
//# sourceMappingURL=allocation.d.ts.map