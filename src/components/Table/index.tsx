import {
  Table as ChakraTable,
  TableContainer,
  TableProps as ChakraTableProps,
  Tbody,
  Thead,
} from '@chakra-ui/react';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { RowData, TableOptions } from '@tanstack/table-core';
import React, { HTMLProps } from 'react';

import clsxm from '@/lib/utils/clsxm';

import BodyRow from '@/components/Table/BodyRow';
import HeaderRow from '@/components/Table/HeaderRow';

interface TableProps<TData extends RowData>
  extends Pick<TableOptions<TData>, 'data' | 'columns'>,
    Omit<ChakraTableProps, 'data'> {}

export default function Table<TData extends RowData>({
  data,
  columns,
  ...props
}: TableProps<TData>) {
  const table = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer position={'relative'}>
      <ChakraTable {...props}>
        <Thead position={'sticky'} top={'0'} left={'0'} bg={'gray.100'}>
          {table?.getHeaderGroups()?.map((headerGroup) => (
            <HeaderRow<TData> {...headerGroup} key={headerGroup.id} />
          ))}
        </Thead>
        <Tbody>
          {table?.getRowModel()?.rows?.map((row) => (
            <BodyRow<TData> {...row} key={row.id} />
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
}
