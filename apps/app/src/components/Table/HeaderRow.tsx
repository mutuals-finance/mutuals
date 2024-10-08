import { Table as ChakraTable } from "@mutuals/ui";
import { flexRender, HeaderGroup, type RowData } from "@tanstack/react-table";
import React from "react";

type HeaderRowProps<TData extends RowData> = HeaderGroup<TData>;

export default function HeaderRow<TData extends RowData>(
  headerGroup: HeaderRowProps<TData>,
) {
  return (
    <ChakraTable.Row>
      {headerGroup.headers.map((header) => (
        <ChakraTable.ColumnHeader
          key={header.id}
          css={{ width: `${header.getSize()}px` }}
        >
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </ChakraTable.ColumnHeader>
      ))}
    </ChakraTable.Row>
  );
}
