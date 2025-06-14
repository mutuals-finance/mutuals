import { Allocation } from "@mutuals/sdk-react";

export type UseAllocationArgs = Partial<Allocation>;

export function useAllocation(
  allocation = {} as UseAllocationArgs,
  calculationType = allocation?.calculationType?.[0],
  recipientType = allocation?.recipientType?.[0],
) {
  const isFixed = calculationType == "Fixed";
  const isRecipient = recipientType == "DefaultItem";
  const isGroup = !isRecipient;

  return { isFixed, isRecipient, isGroup, ...allocation };
}
