import { Allocation, AllocationType, RawAllocation } from "../types";
import { encodePacked, hexToBytes, keccak256 } from "viem";
import { InvalidAllocationIndicesLengthError } from "../errors";
import { ZERO } from "../constants";
import { SimpleMerkleTree } from "@openzeppelin/merkle-tree";

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
      id: "recipient" in a ? BigInt(a.recipient) : ZERO,
      allocationType: BigInt(a.allocationType),
      target: "recipient" in a ? BigInt(a.recipient) : ZERO,
      recipient: "recipient" in a ? BigInt(a.recipient) : ZERO,
      amountOrShare: BigInt("amount" in a ? a.amount : a.share),
      position: ZERO,
      timespan: "timespan" in a ? BigInt(a.timespan) : ZERO,
    };
  },

  isGroup: (a?: Allocation): boolean => {
    return allocation.isPrioritized(a) || allocation.isTimed(a);
  },

  isItem: (a?: Allocation): boolean => {
    return !allocation.isGroup(a);
  },

  isFixed: (a?: Allocation): boolean => {
    return (
      a?.allocationType == AllocationType.Fixed ||
      a?.allocationType == AllocationType.FixedTimed ||
      a?.allocationType == AllocationType.FixedPrioritized
    );
  },

  isPercentage: (a?: Allocation): boolean => {
    return (
      a?.allocationType == AllocationType.Percentage ||
      a?.allocationType == AllocationType.PercentageTimed ||
      a?.allocationType == AllocationType.PercentagePrioritized
    );
  },

  isPrioritized: (a?: Allocation): boolean => {
    return (
      a?.allocationType == AllocationType.PercentagePrioritized ||
      a?.allocationType == AllocationType.FixedPrioritized
    );
  },

  isTimed: (a?: Allocation): boolean => {
    return (
      a?.allocationType == AllocationType.PercentageTimed ||
      a?.allocationType == AllocationType.FixedTimed
    );
  },
};
