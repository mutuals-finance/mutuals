import {
  Allocation,
  CalculationType,
  RawAllocation,
  RecipientType,
} from "../types";
import { encodePacked, Hex, hexToBytes, keccak256, toHex } from "viem";
import { InvalidAllocationIndicesLengthError } from "../errors";
import {
  CALCULATION_TYPE_CONFIG,
  CALCULATION_TYPE_KEY,
  RECIPIENT_TYPE_CONFIG,
  RECIPIENT_TYPE_KEY,
  ZERO,
} from "../constants";
import {
  SimpleMerkleTree,
  StandardMerkleTree,
} from "@openzeppelin/merkle-tree";

export const allocation = {
  getConfig: (poolAllocations: Allocation[], indices: number[]) => {
    if (indices.length > poolAllocations.length) {
      throw new InvalidAllocationIndicesLengthError();
    }

    const allocations = indices.map(
      (index) => poolAllocations[index],
    ) as Allocation[];

    const tree = allocation.getTree(poolAllocations);
    const proof = tree.getMultiProof(indices);

    return {
      proof,
      allocations,
    };
  },

  getTree: (as: Allocation[]) => {
    return SimpleMerkleTree.of(
      as.map((a) =>
        hexToBytes(
          keccak256(
            encodePacked(
              new Array(8).fill("uint256"),
              Object.values(allocation.toRaw(a)),
            ),
          ),
        ),
      ),
    );
  },

  toRaw: (a: Allocation): RawAllocation => {
    return {
      id: "recipient" in a ? BigInt(a.recipient ?? "") : ZERO,
      allocationType: BigInt(0),
      target: "recipient" in a ? BigInt(a.recipient ?? "") : ZERO,
      recipient: "recipient" in a ? BigInt(a.recipient ?? "") : ZERO,
      amountOrShare: BigInt(a.value),
      position: ZERO,
      timespan: "timespan" in a ? BigInt(a.timespan ?? 0) : ZERO,
    };
  },

  isItem: (a?: Allocation) =>
    a?.recipientType?.[0] == RECIPIENT_TYPE_KEY.DEFAULT_RECIPIENT,

  isGroup: (a?: Allocation) => !allocation.isItem(a),

  isFixed: (a?: Allocation) =>
    a?.calculationType?.[0] == CALCULATION_TYPE_KEY.FIXED,

  isPercentage: (a?: Allocation) =>
    a?.calculationType?.[0] == CALCULATION_TYPE_KEY.PERCENTAGE,

  isPrioritized: (a?: Allocation) =>
    a?.recipientType?.[0] == RECIPIENT_TYPE_KEY.PRIORITIZED_GROUP,

  isTimed: (a?: Allocation) =>
    a?.recipientType?.[0] == RECIPIENT_TYPE_KEY.TIMED_GROUP,
};

export const getRecipientAllocationOption = (a?: Partial<Allocation>) =>
  ({
    recipient: a?.recipient ?? "",
    recipientType: a?.recipientType ?? [RECIPIENT_TYPE_KEY.DEFAULT_RECIPIENT],
    calculationType: a?.calculationType ?? [CALCULATION_TYPE_KEY.PERCENTAGE],
    value: a?.value ?? "1",
  }) as Allocation;

export const getGroupAllocationOption = (a?: Partial<Allocation>) => {
  const result: Allocation = {
    recipientType: a?.recipientType ?? [RECIPIENT_TYPE_KEY.DEFAULT_GROUP],
    calculationType: a?.calculationType ?? [CALCULATION_TYPE_KEY.PERCENTAGE],
    children: a?.children ?? [],
    value: a?.value ?? "1",
  };

  if (allocation.isTimed(result)) {
    result.timespan = a?.timespan ?? 0;
  }

  return result;
};

export const getAllocationRecipientOptions = (
  current: CalculationType[],
  cached?: CalculationType[],
) => {
  const sharedProps = {
    calculationType: current,
  };

  const cachedRecipient = getRecipientAllocationOption({
    calculationType: cached,
  });

  const sharedGroupProps = {
    ...sharedProps,
    children: new Array(2).fill(cachedRecipient),
  };

  return {
    [RECIPIENT_TYPE_KEY.DEFAULT_RECIPIENT]:
      getRecipientAllocationOption(sharedProps),
    [RECIPIENT_TYPE_KEY.DEFAULT_GROUP]: getGroupAllocationOption({
      ...sharedGroupProps,
      recipientType: [RECIPIENT_TYPE_KEY.DEFAULT_GROUP],
    }),
    [RECIPIENT_TYPE_KEY.TIMED_GROUP]: getGroupAllocationOption({
      ...sharedGroupProps,
      recipientType: [RECIPIENT_TYPE_KEY.TIMED_GROUP],
    }),
    [RECIPIENT_TYPE_KEY.PRIORITIZED_GROUP]: getGroupAllocationOption({
      ...sharedGroupProps,
      recipientType: [RECIPIENT_TYPE_KEY.PRIORITIZED_GROUP],
    }),
  };
};

export const getAllocationDefaults = (cached?: Allocation) => ({
  [CALCULATION_TYPE_KEY.FIXED]: getAllocationRecipientOptions(
    [CALCULATION_TYPE_KEY.FIXED],
    cached?.calculationType,
  ),
  [CALCULATION_TYPE_KEY.PERCENTAGE]: getAllocationRecipientOptions(
    [CALCULATION_TYPE_KEY.PERCENTAGE],
    cached?.calculationType,
  ),
});

export const recipientTypeName = (recipientType: RecipientType) =>
  RECIPIENT_TYPE_CONFIG[recipientType]?.name;
export const calculationTypeName = (calculationType: CalculationType) =>
  CALCULATION_TYPE_CONFIG[calculationType]?.name;

// Utility to compute a hash using viem's keccak256
function computeHash(data: {
  value: string;
  calculationType: string[];
  recipientType: string[];
  recipient?: string;
  timespan?: number;
  children: Hex;
}): string {
  console.log({ data });
  // Encode all fields to match Solidity's abi.encodePacked
  const encoded = encodePacked(
    ["string", "string[]", "string[]", "string", "uint256", "bytes32"],
    [
      data.value,
      data.calculationType,
      data.recipientType,
      data.recipient || "",
      BigInt(data.timespan || "0"),
      data.children,
    ],
  );

  // Compute keccak256 hash of the encoded bytes
  return keccak256(encoded);
}

// Function to compute the Merkle root for the entire tree
export function buildMerkleTree(allocations: Allocation[]): SimpleMerkleTree {
  const stack: Array<
    Omit<Allocation, "children"> & { hash: string; children: Hex }
  > = [];

  // Recursive function to compute node hash and handle Merkle tree building for children
  function traverseNode(node: Allocation): { hash: string; children: Hex } {
    let childrenHash = toHex(0, { size: 32 }); // Initialize with empty bytes32 (0x000...000)

    // If the node has children, compute their hashes and Merkle root
    if (node.children && node.children.length > 0) {
      const childHashes = node.children.map(
        (child: Allocation) => traverseNode(child).hash,
      );
      // Use SimpleMerkleTree.of to compute the Merkle root for the children
      const merkleTree = SimpleMerkleTree.of(childHashes);
      childrenHash = merkleTree.root as Hex; // Ensure it's treated as Hex
    }

    // Compute the hash for the current node, including the Merkle root of its children
    const data = {
      value: node.value,
      calculationType: node.calculationType,
      recipientType: node.recipientType,
      recipient: node.recipient,
      timespan: node.timespan,
      children: childrenHash,
    };

    const hashedNode = { ...data, hash: computeHash(data) };

    // Store the node hash and its children hash for future Merkle tree construction
    stack.push(hashedNode);

    return hashedNode;
  }

  allocations.forEach(traverseNode);

  return SimpleMerkleTree.of(stack.map((n) => n.hash));
}
