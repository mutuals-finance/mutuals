import { Td, Tr } from "@mutuals/ui";
import { flexRender, Row, type RowData } from "@tanstack/react-table";

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
