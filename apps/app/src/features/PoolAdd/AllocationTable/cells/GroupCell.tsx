import React from "react";
import { AllocationTableCellProps } from "@/features/PoolAdd/types";
import Select from "@/components/Form/Select";

type AddressCellProps = AllocationTableCellProps;

export function GroupCell({ id, getValue, row }: AddressCellProps) {
  const itemId = "any";
  return (
    <Select
      items={["Timed Allocation", "Prioritized Allocation"]}
      id={`${itemId}.allocationType`}
      size={"sm"}
      placeholder={"Timed"}
    />
  );
}
