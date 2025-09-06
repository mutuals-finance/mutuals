"use client";

import { Select, SelectProps } from "@mutuals/ui";

export type AllocationFormTreeComboboxProps = SelectProps;

export default function AllocationFormTreeCombobox({
  ...props
}: AllocationFormTreeComboboxProps) {
  return (
    <Select
      size="xs"
      w={"24"}
      flex={"0 0 auto"}
      positioning={{ sameWidth: false }}
      onClick={(e) => {
        e.stopPropagation();
      }}
      {...props}
    />
  );
}
