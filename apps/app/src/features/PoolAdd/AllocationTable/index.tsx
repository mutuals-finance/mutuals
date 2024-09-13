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
  AllocationTableProps,
  PoolAddData,
} from "@/features/PoolAdd/types";
import {
  ActionCell,
  AddressCell,
  GroupCell,
  ShareOrAmountCell,
} from "@/features/PoolAdd/AllocationTable/cells";
import { Box, Checkbox, HStack } from "@mutuals/ui";
import React, { useMemo, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { AllocationNode, useAllocationUtils } from "@mutuals/sdk-react";

const columnHelper = createColumnHelper<AllocationNode>();

export default function AllocationTable({
  data = [],
  ...props
}: AllocationTableProps) {
  const { control } = useFormContext<PoolAddData>();
  const methods = useFieldArray({
    control,
    name: "allocations",
  });

  const { isGroup } = useAllocationUtils();
  const columns = useMemo<ColumnDef<AllocationNode>[]>(
    () => [
      columnHelper.accessor("node.recipient", {
        header: ({ table }) => (
          <>
            <HStack>
              <Checkbox
                ml={"8"}
                {...{
                  checked: table.getIsAllRowsSelected(),
                  indeterminate: table.getIsSomeRowsSelected(),
                  onChange: table.getToggleAllRowsSelectedHandler(),
                }}
              />
              <Box>Setup Allocations</Box>
            </HStack>
          </>
        ),
        cell: (context) =>
          isGroup(context.row.original.node) ? (
            <GroupCell {...context} {...methods} />
          ) : (
            <AddressCell {...context} {...methods} />
          ),
      }),
      columnHelper.accessor("node.share", {
        header: "",
        cell: (context) => <ShareOrAmountCell {...context} {...methods} />,
      }),
      columnHelper.display({
        id: "actions",
        cell: (context) => <ActionCell {...context} {...methods} />,
      }),
    ],
    [isGroup, methods],
  );

  const [expanded, setExpanded] = useState<ExpandedState>({});

  return (
    <Table<AllocationNode>
      {...{
        data,
        columns,
        state: {
          expanded,
        },
        onExpandedChange: setExpanded,
        getSubRows: (row) => row.children,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        debugTable: true,
      }}
      {...props}
    />
  );
}
