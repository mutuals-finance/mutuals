import React from "react";
import AllocationProvider from "@/features/Allocation/Provider";
import { AllocationTableProps } from "@/features/Allocation/Table";
import AllocationFormTable from "@/features/Allocation/FormTable";

type AllocationInputProps = Omit<AllocationTableProps, "allocationDataArgs"> & {
  id?: string;
};

export default function AllocationInput({
  id,
  ...props
}: AllocationInputProps) {
  return (
    <AllocationProvider>
      <AllocationFormTable />
    </AllocationProvider>
  );
}
