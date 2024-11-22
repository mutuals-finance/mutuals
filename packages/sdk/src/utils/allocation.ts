import {
  Allocation,
  CalculationType,
  RawAllocation,
  RecipientType,
} from "../types";
import { encodePacked, hexToBytes, keccak256 } from "viem";
import { InvalidAllocationIndicesLengthError } from "../errors";
import {
  CALCULATION_TYPE_CONFIG,
  CALCULATION_TYPE_KEY,
  RECIPIENT_TYPE_CONFIG,
  RECIPIENT_TYPE_KEY,
  ZERO,
} from "../constants";
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
      allocationType: BigInt(0),
      target: "recipient" in a ? BigInt(a.recipient) : ZERO,
      recipient: "recipient" in a ? BigInt(a.recipient) : ZERO,
      amountOrShare: BigInt(a.value),
      position: ZERO,
      timespan: "timespan" in a ? BigInt(a.timespan) : ZERO,
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
    value: a?.value ?? 1,
  }) as Allocation;

export const getGroupAllocationOption = (a?: Partial<Allocation>) => {
  const result: Allocation = {
    recipientType: a?.recipientType ?? [RECIPIENT_TYPE_KEY.DEFAULT_GROUP],
    calculationType: a?.calculationType ?? [CALCULATION_TYPE_KEY.PERCENTAGE],
    children: a?.children ?? [],
    value: a?.value ?? 1,
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
