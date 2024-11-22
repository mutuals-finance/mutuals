import {
  Allocation,
  CALCULATION_TYPE_KEY,
  RECIPIENT_TYPE_KEY,
  useAllocationUtils,
} from "@mutuals/sdk-react";

export type UseAllocationArgs = Partial<Allocation>;

export function useAllocation(
  allocation = {} as UseAllocationArgs,
  calculationType = allocation?.calculationType?.[0],
  recipientType = allocation?.recipientType?.[0],
) {
  const isFixed = calculationType == CALCULATION_TYPE_KEY.FIXED;
  const isRecipient = recipientType == RECIPIENT_TYPE_KEY.DEFAULT_RECIPIENT;
  const isGroup = !isRecipient;

  return { isFixed, isRecipient, isGroup, ...allocation };
}
