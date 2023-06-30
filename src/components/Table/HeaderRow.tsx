import { Th, Tr } from '@chakra-ui/react';
import { flexRender, HeaderGroup } from '@tanstack/react-table';
import { RowData } from '@tanstack/table-core';
import React from 'react';

type HeaderRowProps<TData extends RowData> = HeaderGroup<TData>;

export default function HeaderRow<TData extends RowData>(
  headerGroup: HeaderRowProps<TData>
) {
  return (
    <Tr>
      {headerGroup.headers.map((header) => (
        <Th key={header.id}>
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </Th>
      ))}
    </Tr>
  );
}
