import { flexRender, Row } from '@tanstack/react-table';
import { RowData } from '@tanstack/table-core';
import React from 'react';

import Cell from '@/components/Table/Cell';

type BodyRowProps<TData extends RowData> = Row<TData>;

export default function BodyRow<TData extends RowData>(
  row: BodyRowProps<TData>
) {
  return (
    <tr>
      {row.getVisibleCells().map((cell, index) => (
        <Cell
          as={'td'}
          key={cell.id}
          index={index}
          length={row.getVisibleCells().length}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </Cell>
      ))}
    </tr>
  );
}
