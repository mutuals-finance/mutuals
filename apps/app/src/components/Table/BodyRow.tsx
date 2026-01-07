import { Table as ChakraTable } from "@mutuals/ui";
import { flexRender, Row, type RowData } from "@tanstack/react-table";

export type BodyRowProps<TData extends RowData> = Row<TData> & {
  cellProps?: ChakraTable.CellProps;
};

export default function BodyRow<TData extends RowData>({
  cellProps,
  ...row
}: BodyRowProps<TData> & { showRowBorder?: boolean }) {
  return (
    <ChakraTable.Row>
      {row.getVisibleCells().map((cell) => (
        <ChakraTable.Cell
          key={cell.id}
          {...cellProps}
          css={{ width: `${cell.column.getSize()}px`, ...cellProps?.css }}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </ChakraTable.Cell>
      ))}
    </ChakraTable.Row>
  );
}
