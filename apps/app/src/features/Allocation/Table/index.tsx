import React from "react";
import AllocationGroup, {
  AllocationGroupProps,
} from "@/features/Allocation/Group";
import AllocationControl from "@/features/Allocation/Control";

export type AllocationTableProps = AllocationGroupProps;

export default function AllocationTable({
  allocationDataArgs,
  ...props
}: AllocationTableProps) {
  return (
    <AllocationGroup
      w={"full"}
      allocationDataArgs={allocationDataArgs}
      {...props}
    >
      {(methods) => <AllocationControl {...methods} />}
    </AllocationGroup>
  );
}
