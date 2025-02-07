import React, { ReactNode } from "react";
import ContentCard, { type ContentCardProps } from "@/components/ContentCard";
import AllocationTable, {
  AllocationTableProps,
} from "@/features/Allocation/Table";

export type AllocationTableCardProps = Omit<ContentCardProps, "children"> & {
  tableProps?: AllocationTableProps;
  children?: ReactNode | ((table?: ReactNode) => ReactNode);
};

export default function AllocationTableCard({
  title = "Allocations",
  bodyProps,
  tableProps = { allocationDataArgs: { id: "allocations" } },
  children,
  ...props
}: AllocationTableCardProps) {
  const table = <AllocationTable {...tableProps} />;

  return (
    <ContentCard title={title} bodyProps={{ p: "0", ...bodyProps }} {...props}>
      {typeof children == "function"
        ? children(table)
        : !children
          ? table
          : children}
    </ContentCard>
  );
}
