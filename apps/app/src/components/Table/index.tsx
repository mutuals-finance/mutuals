import { Table as ChakraTable } from "@mutuals/ui";
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
  containerProps?: ChakraTable.ScrollAreaProps;
  headProps?: ChakraTable.HeaderProps;
  tableProps?: ChakraTable.RootProps & { showRowBorder?: boolean };
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
    <ChakraTable.ScrollArea w="full" {...containerProps}>
      <ChakraTable.Root w="full" {...tableProps}>
        {!headerHidden && (
          <ChakraTable.Header {...headProps}>
            {table
              ?.getHeaderGroups()
              ?.map((headerGroup) => (
                <HeaderRow<TData> {...headerGroup} key={headerGroup.id} />
              ))}
          </ChakraTable.Header>
        )}
        <ChakraTable.Body>
          {table
            ?.getRowModel()
            ?.rows?.map((row) => (
              <BodyRow<TData>
                {...row}
                showRowBorder={tableProps?.showRowBorder}
                key={row.id}
              />
            ))}
        </ChakraTable.Body>
      </ChakraTable.Root>
    </ChakraTable.ScrollArea>
  );
}
