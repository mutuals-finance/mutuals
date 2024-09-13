import {
  Table as ChakraTable,
  TableContainer as ChakraTableContainer,
  TableContainerProps as ChakraTableContainerProps,
  TableHeadProps as ChakraTableHeadProps,
  TableProps as ChakraTableProps,
  Tbody,
  Thead,
} from "@mutuals/ui";
import {
  getCoreRowModel,
  useReactTable,
  RowData,
  TableOptions,
} from "@tanstack/react-table";
import React from "react";

import BodyRow from "@/components/Table/BodyRow";
import HeaderRow from "@/components/Table/HeaderRow";

export interface TableProps<TData extends RowData>
  extends Omit<TableOptions<TData>, "getCoreRowModel"> {
  containerProps?: ChakraTableContainerProps;
  headProps?: ChakraTableHeadProps;
  tableProps?: ChakraTableProps;
  headerHidden?: boolean;
}

export default function Table<TData extends RowData>({
  containerProps,
  headProps,
  headerHidden = false,
  tableProps,
  ...props
}: TableProps<TData>) {
  const table = useReactTable<TData>({
    getCoreRowModel: getCoreRowModel(),
    ...props,
  });

  return (
    <ChakraTableContainer w={"full"} {...containerProps}>
      <ChakraTable {...tableProps}>
        {!headerHidden && (
          <Thead
            position={"sticky"}
            top={"0"}
            left={"0"}
            zIndex={"1"}
            bg={"bg.1"}
            borderBottom={"1px"}
            borderColor={"border.1"}
            {...headProps}
          >
            {table
              ?.getHeaderGroups()
              ?.map((headerGroup) => (
                <HeaderRow<TData> {...headerGroup} key={headerGroup.id} />
              ))}
          </Thead>
        )}
        <Tbody>
          {table
            ?.getRowModel()
            ?.rows?.map((row) => <BodyRow<TData> {...row} key={row.id} />)}
        </Tbody>
      </ChakraTable>
    </ChakraTableContainer>
  );
}
