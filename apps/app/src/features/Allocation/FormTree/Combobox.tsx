"use client";

import { Select, SelectProps } from "@mutuals/ui";

export type AllocationFormTreeComboboxProps = SelectProps;

export default function AllocationFormTreeCombobox({
  ...props
}: AllocationFormTreeComboboxProps) {
  return (
    <Select
      positioning={{ sameWidth: false }}
      onClick={(e) => {
        e.stopPropagation();
      }}
      {...props}
    />
  );
}
