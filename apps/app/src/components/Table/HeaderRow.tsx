import { Tr, Th } from "@mutuals/ui";
import { flexRender, HeaderGroup, type RowData } from "@tanstack/react-table";
import React from "react";

type HeaderRowProps<TData extends RowData> = HeaderGroup<TData>;

export default function HeaderRow<TData extends RowData>(
  headerGroup: HeaderRowProps<TData>,
) {
  return (
    <Tr>
      {headerGroup.headers.map((header) => (
        <Th key={header.id} py={"3"}>
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </Th>
      ))}
    </Tr>
  );
}
