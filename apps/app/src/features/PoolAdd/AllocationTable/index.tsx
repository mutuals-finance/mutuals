import {
  createColumnHelper,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import Table from "@/components/Table";

import type { AllocationTableProps } from "@/features/PoolAdd/types";
import {
  ActionCell,
  CheckboxCell,
  ValueCell,
} from "@/features/PoolAdd/AllocationTable/cells";
import { AllocationNode } from "@mutuals/sdk-react";
import { useMemo } from "react";

const columnHelper = createColumnHelper<AllocationNode>();

export default function AllocationTable({
  data = [],
  id,
  ...props
}: AllocationTableProps) {
  const columns = useMemo(
    () => [
      columnHelper.accessor("node", {
        cell: (context) => <CheckboxCell {...context} id={id} />,
        size: 500,
      }),
      columnHelper.accessor("node.value", {
        cell: (context) => <ValueCell {...context} id={id} />,
        size: 158,
      }),
      columnHelper.display({
        id: "actions",
        cell: (context) => <ActionCell {...context} id={id} />,
        size: 58,
      }),
    ],
    [id],
  );

  return (
    <Table<AllocationNode>
      {...{
        data,
        columns,
        state: {
          expanded: true,
        },
        getSubRows: (row) => row.children,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        debugTable: true,
      }}
      headerHidden={true}
      tableProps={{ showRowBorder: false }}
      {...props}
    />
  );
}
