import { Table as ChakraTable } from "@mutuals/ui";
import {
  getCoreRowModel,
  useReactTable,
  RowData,
  TableOptions,
} from "@tanstack/react-table";
import React from "react";

import BodyRow, { type BodyRowProps } from "@/components/Table/BodyRow";
import HeaderRow, { type HeaderRowProps } from "@/components/Table/HeaderRow";

export interface TableProps<TData extends RowData> extends Omit<
  TableOptions<TData>,
  "getCoreRowModel"
> {
  containerProps?: ChakraTable.ScrollAreaProps;
  headerProps?: ChakraTable.HeaderProps;
  bodyProps?: ChakraTable.BodyProps;
  bodyRowProps?: Pick<BodyRowProps<TData>, "cellProps">;
  headerRowProps?: Pick<HeaderRowProps<TData>, "cellProps">;
  tableProps?: ChakraTable.RootProps & { showRowBorder?: boolean };
  headerHidden?: boolean;
}

export default function Table<TData extends RowData>({
  containerProps,
  headerProps,
  headerHidden = false,
  tableProps,
  headerRowProps,
  bodyRowProps,
  bodyProps,
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
          <ChakraTable.Header {...headerProps}>
            {table?.getHeaderGroups()?.map((headerGroup) => (
              <HeaderRow<TData>
                {...headerGroup}
                {...headerRowProps}
                key={headerGroup.id}
              />
            ))}
          </ChakraTable.Header>
        )}
        <ChakraTable.Body {...bodyProps}>
          {table?.getRowModel()?.rows?.map((row) => (
            <BodyRow<TData>
              {...row}
              showRowBorder={tableProps?.showRowBorder}
              {...bodyRowProps}
              key={row.id}
            />
          ))}
        </ChakraTable.Body>
      </ChakraTable.Root>
    </ChakraTable.ScrollArea>
  );
}
