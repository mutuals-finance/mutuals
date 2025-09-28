"use client";

import { Select, SelectProps } from "@mutuals/ui";

export type AllocationFormTreeSelectProps = SelectProps;

export default function AllocationFormTreeSelect({
  ...props
}: AllocationFormTreeSelectProps) {
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
