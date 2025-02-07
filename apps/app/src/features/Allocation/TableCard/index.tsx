import React, { ReactNode } from "react";
import ContentCard, { type ContentCardProps } from "@/components/ContentCard";
import AllocationTable, {
  AllocationTableProps,
} from "@/features/Allocation/Table";
import type { Split } from "@mutuals/graphql-client-nextjs";
import { Allocation } from "@mutuals/sdk-react";

export type AllocationTableCardProps = Omit<ContentCardProps, "children"> & {
  tableProps?: Omit<AllocationTableProps, "values">;
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
  const allocations = (pool?.allocations ?? []) as unknown as Allocation[];

  const table = <AllocationTable values={allocations} {...tableProps} />;

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
