import { encodePacked, hexToBytes, keccak256, toHex } from "viem";
import { InvalidAllocationIndicesLengthError } from "../errors";
import { StrategyExtensions, StateExtensions, ZERO } from "../constants";
import { SimpleMerkleTree } from "@openzeppelin/merkle-tree";
export const allocation = {
    getConfig: (poolAllocations, indices) => {
        if (indices.length > poolAllocations.length) {
            throw new InvalidAllocationIndicesLengthError();
        }
        const allocations = indices.map((index) => poolAllocations[index]);
        const tree = allocation.getTree(poolAllocations);
        const proof = tree.getMultiProof(indices);
        return {
            proof,
            allocations,
        };
    },
    getTree: (as) => {
        return SimpleMerkleTree.of(as.map((a) => hexToBytes(keccak256(encodePacked(new Array(8).fill("uint256"), Object.values(allocation.toRaw(a)))))));
    },
    toRaw: (a) => {
        var _a, _b, _c, _d;
        return {
            id: "recipientAddress" in a ? BigInt((_a = a.recipientAddress) !== null && _a !== void 0 ? _a : "") : ZERO,
            allocationType: BigInt(0),
            target: "recipientAddress" in a ? BigInt((_b = a.recipientAddress) !== null && _b !== void 0 ? _b : "") : ZERO,
            recipient: "recipientAddress" in a ? BigInt((_c = a.recipientAddress) !== null && _c !== void 0 ? _c : "") : ZERO,
            amountOrShare: BigInt(a.value),
            position: ZERO,
            timespan: "timespan" in a ? BigInt((_d = a.recipientAddress) !== null && _d !== void 0 ? _d : 0) : ZERO,
        };
    },
    isItem: (a) => { var _a; return ((_a = a === null || a === void 0 ? void 0 : a.recipientType) === null || _a === void 0 ? void 0 : _a[0]) == 0; },
    isGroup: (a) => !allocation.isItem(a),
    isFixed: (a) => { var _a; return ((_a = a === null || a === void 0 ? void 0 : a.calculationType) === null || _a === void 0 ? void 0 : _a[0]) == 5; },
    isPercentage: (a) => { var _a; return ((_a = a === null || a === void 0 ? void 0 : a.calculationType) === null || _a === void 0 ? void 0 : _a[0]) == 4; },
    isPrioritized: (a) => { var _a; return ((_a = a === null || a === void 0 ? void 0 : a.recipientType) === null || _a === void 0 ? void 0 : _a[0]) == 3; },
    isTimed: (a) => { var _a; return ((_a = a === null || a === void 0 ? void 0 : a.recipientType) === null || _a === void 0 ? void 0 : _a[0]) == 2; },
};
export const getRecipientAllocationOption = (a) => {
    var _a, _b, _c, _d;
    return ({
        recipientAddress: (_a = a === null || a === void 0 ? void 0 : a.recipientAddress) !== null && _a !== void 0 ? _a : "",
        recipientType: (_b = a === null || a === void 0 ? void 0 : a.recipientType) !== null && _b !== void 0 ? _b : [0],
        calculationType: (_c = a === null || a === void 0 ? void 0 : a.calculationType) !== null && _c !== void 0 ? _c : [4],
        value: (_d = a === null || a === void 0 ? void 0 : a.value) !== null && _d !== void 0 ? _d : "1",
    });
};
export const getGroupAllocationOption = (a) => {
    var _a, _b, _c, _d;
    const result = {
        recipientType: (_a = a === null || a === void 0 ? void 0 : a.recipientType) !== null && _a !== void 0 ? _a : [1],
        calculationType: (_b = a === null || a === void 0 ? void 0 : a.calculationType) !== null && _b !== void 0 ? _b : [4],
        children: (_c = a === null || a === void 0 ? void 0 : a.children) !== null && _c !== void 0 ? _c : [],
        value: (_d = a === null || a === void 0 ? void 0 : a.value) !== null && _d !== void 0 ? _d : "1",
    };
    if (allocation.isTimed(result)) {
        // result.timespan = a?.timespan ?? 0;
    }
    return result;
};
export const getAllocationRecipientOptions = (current, cached) => {
    const sharedProps = {
        calculationType: current,
    };
    const cachedRecipient = getRecipientAllocationOption({
        calculationType: cached,
    });
    const sharedGroupProps = Object.assign(Object.assign({}, sharedProps), { children: new Array(2).fill(cachedRecipient) });
    return {
        [0]: getRecipientAllocationOption(sharedProps),
        [1]: getGroupAllocationOption(Object.assign(Object.assign({}, sharedGroupProps), { recipientType: [1] })),
        [2]: getGroupAllocationOption(Object.assign(Object.assign({}, sharedGroupProps), { recipientType: [2] })),
        [3]: getGroupAllocationOption(Object.assign(Object.assign({}, sharedGroupProps), { recipientType: [3] })),
    };
};
export const getAllocationDefaults = (cached) => ({
    [5]: getAllocationRecipientOptions([5], cached === null || cached === void 0 ? void 0 : cached.calculationType),
    [4]: getAllocationRecipientOptions([4], cached === null || cached === void 0 ? void 0 : cached.calculationType),
});
export const recipientTypeName = (recipientType) => { var _a; return (_a = StateExtensions[recipientType]) === null || _a === void 0 ? void 0 : _a.name; };
export const calculationTypeName = (calculationType) => { var _a; return (_a = StrategyExtensions[calculationType]) === null || _a === void 0 ? void 0 : _a.name; };
// Utility to compute a hash using viem's keccak256
function computeHash(data) {
    console.log({ data });
    // Encode all fields to match Solidity's abi.encodePacked
    const encoded = encodePacked(["string", "string[]", "string[]", "string", "uint256", "bytes32"], [
        data.value,
        data.calculationType,
        data.recipientType,
        data.recipientAddress || "",
        BigInt("0"),
        data.children,
    ]);
    // Compute keccak256 hash of the encoded bytes
    return keccak256(encoded);
}
// Function to compute the Merkle root for the entire tree
export function buildMerkleTree(allocations) {
    const stack = [];
    // Recursive function to compute node hash and handle Merkle tree building for children
    function traverseNode(node) {
        let childrenHash = toHex(0, { size: 32 }); // Initialize with empty bytes32 (0x000...000)
        // If the node has children, compute their hashes and Merkle root
        if (!!node && node.children && node.children.length > 0) {
            const childHashes = node.children.map((child) => traverseNode(child).hash);
            // Use SimpleMerkleTree.of to compute the Merkle root for the children
            const merkleTree = SimpleMerkleTree.of(childHashes);
            childrenHash = merkleTree.root; // Ensure it's treated as Hex
        }
        // Compute the hash for the current node, including the Merkle root of its children
        const data = {
            value: node.value,
            calculationType: node.calculationType,
            recipientType: node.recipientType,
            recipientAddress: node.recipientAddress,
            timespan: "",
            children: childrenHash,
        };
        const hashedNode = Object.assign(Object.assign({}, data), { hash: computeHash(data) });
        // Store the node hash and its children hash for future Merkle tree construction
        stack.push(hashedNode);
        return hashedNode;
    }
    allocations.forEach(traverseNode);
    return SimpleMerkleTree.of(stack.map((n) => n.hash));
}
