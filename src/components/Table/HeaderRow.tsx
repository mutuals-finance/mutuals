import {
  flexRender,
  getCoreRowModel,
  HeaderGroup,
  Row,
  useReactTable,
} from '@tanstack/react-table';
import { RowData, TableOptions } from '@tanstack/table-core';
import React, { HTMLProps } from 'react';

import clsxm from '@/lib/utils/clsxm';

import Cell from '@/components/Table/Cell';

type HeaderRowProps<TData extends RowData> = HeaderGroup<TData>;

export default function HeaderRow<TData extends RowData>(
  headerGroup: HeaderRowProps<TData>
) {
  return (
    <tr>
      {headerGroup.headers.map((header, index) => (
        <Cell
          as={'th'}
          key={header.id}
          index={index}
          length={headerGroup.headers.length}
          className={'text-light h-10 capitalize'}
        >
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </Cell>
      ))}
    </tr>
  );
}
