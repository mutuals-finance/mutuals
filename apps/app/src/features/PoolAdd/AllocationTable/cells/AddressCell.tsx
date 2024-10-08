import React from "react";
import { AllocationTableCellProps } from "@/features/PoolAdd/types";
import Input from "@/components/Form/Input";
import { getNodeIdFromCellContext } from "@/features/PoolAdd/AllocationTable/utils";
import { Address } from "viem";

type AddressCellProps = AllocationTableCellProps;

export function AddressCell({ id: rootId, ...context }: AddressCellProps) {
  const id = getNodeIdFromCellContext(context, rootId);

  return <Input placeholder={"0x0000...0000"} id={id} size={"sm"} />;
}
