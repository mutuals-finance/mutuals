import { Allocation, RawAllocation } from "../types";
import { SimpleMerkleTree } from "@openzeppelin/merkle-tree";
import { encodePacked, hexToBytes, keccak256 } from "viem";
import { ZERO } from "../constants";
import { InvalidAllocationIndicesLengthError } from "../errors";

export const getAllocationConfig = (
  poolAllocations: Allocation[],
  indices: number[],
) => {
  if (indices.length > poolAllocations.length) {
    throw new InvalidAllocationIndicesLengthError();
  }

  const allocations = indices.map(
    (index) => poolAllocations[index],
  ) as Allocation[];

  const tree = getAllocationTree(poolAllocations);
  const proof = tree.getMultiProof(indices);

  return {
    proof,
    allocations,
  };
};

export const getAllocationTree = (allocations: Allocation[]) => {
  return SimpleMerkleTree.of(
    allocations.map((a) =>
      hexToBytes(
        keccak256(
          encodePacked(
            new Array(8).fill("uint256"),
            Object.values(getRawAllocation(a)),
          ),
        ),
      ),
    ),
  );
};

export const getRawAllocation = (a: Allocation): RawAllocation => {
  return {
    id: a.id,
    version: BigInt(a.version),
    allocationType: BigInt(a.allocationType),
    target: "target" in a ? a.target : ZERO,
    recipient: "recipient" in a ? BigInt(a.recipient) : ZERO,
    amountOrShare: "amount" in a ? a.amount : a.share,
    position: "position" in a ? BigInt(a.position) : ZERO,
    timespan: "timespan" in a ? BigInt(a.timespan) : ZERO,
  };
};
