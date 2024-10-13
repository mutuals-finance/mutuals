import { Table as ChakraTable } from "@mutuals/ui";
import { flexRender, Row, type RowData } from "@tanstack/react-table";

type BodyRowProps<TData extends RowData> = Row<TData>;

export default function BodyRow<TData extends RowData>({
  showRowBorder = true,
  ...row
}: BodyRowProps<TData> & { showRowBorder?: boolean }) {
  return (
    <ChakraTable.Row>
      {row.getVisibleCells().map((cell) => (
        <ChakraTable.Cell
          key={cell.id}
          css={{ width: `${cell.column.getSize()}px` }}
          borderBottomWidth={!showRowBorder ? "0px" : "1px"}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </ChakraTable.Cell>
      ))}
    </ChakraTable.Row>
  );
}
