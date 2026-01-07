import { Table as ChakraTable } from "@mutuals/ui";
import { flexRender, HeaderGroup, type RowData } from "@tanstack/react-table";
import React from "react";

export type HeaderRowProps<TData extends RowData> = HeaderGroup<TData> & {
  cellProps?: ChakraTable.CellProps;
};

export default function HeaderRow<TData extends RowData>({
  cellProps,
  ...props
}: HeaderRowProps<TData>) {
  return (
    <ChakraTable.Row>
      {props.headers.map((header) => (
        <ChakraTable.ColumnHeader
          key={header.id}
          {...cellProps}
          css={{ width: `${header.getSize()}px`, ...cellProps?.css }}
        >
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </ChakraTable.ColumnHeader>
      ))}
    </ChakraTable.Row>
  );
}
