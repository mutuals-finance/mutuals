import React, { ReactNode } from "react";
import ContentCard, { type ContentCardProps } from "@/components/ContentCard";
import AllocationTable, {
  AllocationTableProps,
} from "@/features/Allocation/Table";
import type { Split } from "@mutuals/graphql-client-nextjs";

export type AllocationTableCardProps = Omit<ContentCardProps, "children"> & {
  tableProps?: AllocationTableProps;
  pool?: Split;
  children?: ReactNode | ((table?: ReactNode) => ReactNode);
};

export default function AllocationTableCard({
  title = "Allocations",
  tableProps,
  children,
  pool,
  ...props
}: AllocationTableCardProps) {
  const table = <AllocationTable {...tableProps} />;

  return (
    <ContentCard title={title} {...props}>
      {typeof children == "function"
        ? children(table)
        : !children
          ? table
          : children}
    </ContentCard>
  );
}
