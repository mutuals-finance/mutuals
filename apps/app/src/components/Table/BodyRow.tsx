import { Td, Tr, useColorModeValue } from "@chakra-ui/react";
import { flexRender, Row } from "@tanstack/react-table";
import { RowData } from "@tanstack/table-core";
import React from "react";

type BodyRowProps<TData extends RowData> = Row<TData>;

export default function BodyRow<TData extends RowData>(
  row: BodyRowProps<TData>,
) {
  return (
    <Tr>
      {row.getVisibleCells().map((cell) => (
        <Td py={"2"} key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </Td>
      ))}
    </Tr>
  );
}
