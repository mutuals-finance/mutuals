"use client";

import {
  ColumnDef,
  createColumnHelper,
  ExpandedState,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import Table from "@/components/Table";

import type {
  AllocationDataItem,
  AllocationTableProps,
  PoolAddData,
} from "@/features/PoolAdd/types";
import {
  ActionCell,
  AddressCell,
  CheckboxCell,
  GroupCell,
  ValueCell,
} from "@/features/PoolAdd/AllocationTable/cells";
import React, { useMemo } from "react";
import {
  FieldArrayWithId,
  useFieldArray,
  useFormContext,
} from "react-hook-form";
import { AllocationNode, useAllocationUtils } from "@mutuals/sdk-react";

const columnHelper = createColumnHelper<AllocationDataItem>();

export default function AllocationTable({
  data = [],
  ...props
}: AllocationTableProps) {
  const { control } = useFormContext<PoolAddData>();

  const id = "allocations";

  const methods = useFieldArray({
    control,
    name: id,
  });

  const cellProps = useMemo(() => ({ ...methods, id }), [methods, id]);

  const { isGroup } = useAllocationUtils();

  const columns = useMemo<ColumnDef<AllocationDataItem>[]>(
    () => [
      columnHelper.display({
        id: "checkbox",
        cell: (context) => <CheckboxCell {...context} {...cellProps} />,
        enableResizing: false,
        size: 32,
      }),
      columnHelper.accessor("node.recipient", {
        cell: (context) =>
          isGroup(context.row.original.node) ? (
            <GroupCell {...context} {...cellProps} />
          ) : (
            <AddressCell {...context} {...cellProps} />
          ),
        size: 450,
      }),
      columnHelper.accessor("node.value", {
        cell: (context) => <ValueCell {...context} {...cellProps} />,
        size: 158,
      }),
      columnHelper.display({
        id: "actions",
        cell: (context) => <ActionCell {...context} {...cellProps} />,
        enableResizing: false,
        size: 58,
      }),
    ],
    [isGroup, cellProps],
  );

  return (
    <Table<AllocationDataItem>
      {...{
        data,
        columns,
        state: {
          expanded: true,
        },
        getRowId: (row) => row.id,
        getSubRows: (row) => row.children as AllocationDataItem[],
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
