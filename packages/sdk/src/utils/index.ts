import { Allocation } from "@/types";
import { SimpleMerkleTree } from "@openzeppelin/merkle-tree";
import { encodePacked, fromHex, hexToBytes, keccak256 } from "viem";
import { ZERO } from "@/constants";
import { BytesLike } from "@openzeppelin/merkle-tree/src/bytes";

export const getAllocationConfig = (
  poolAllocations: Allocation[],
  indices: number[],
) => {
  if (indices.length > poolAllocations.length) {
    throw new InvalidIndicesLength();
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
  const types = [
    "uint256",
    "uint256",
    "uint256",
    "uint256",
    "uint256",
    "uint256",
    "uint256",
    "uint256",
  ];
  const rawAllocations = getRawAllocations(allocations);

  return SimpleMerkleTree.of(
    hexToBytes(
      keccak256(encodePacked(types, rawAllocations)),
    ) as unknown as BytesLike[],
  );
};

export const getRawAllocations = (allocations: Allocation[]) => {
  return allocations.map((a) => ({
    ...a,
    allocationType: BigInt(a.allocationType),
    target: "target" in a ? a.target : ZERO,
    recipient: "recipient" in a ? BigInt(a.recipient) : ZERO,
    amountOrShare: "amount" in a ? a.amount : a.share,
    position: "position" in a ? a.position : ZERO,
    timespan: "timespan" in a ? a.timespan : ZERO,
  }));
};

export const getAllocationRoot = (allocations: Allocation[]): string => {
  return getAllocationTree(allocations).root;
};
