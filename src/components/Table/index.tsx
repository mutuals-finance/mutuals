import {
  Table as ChakraTable,
  TableContainer as ChakraTableContainer,
  TableContainerProps as ChakraTableContainerProps,
  TableProps as ChakraTableProps,
  Tbody,
  Thead,
  useColorModeValue,
} from '@chakra-ui/react';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { RowData, TableOptions } from '@tanstack/table-core';
import React from 'react';

import BodyRow from '@/components/Table/BodyRow';
import HeaderRow from '@/components/Table/HeaderRow';

export interface TableProps<TData extends RowData>
  extends Pick<TableOptions<TData>, 'data' | 'columns'>,
    Omit<ChakraTableProps, 'data'> {
  containerProps?: ChakraTableContainerProps;
}

export default function Table<TData extends RowData>({
  data,
  columns,
  containerProps,
  ...props
}: TableProps<TData>) {
  const table = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const tHeadBg = useColorModeValue('gray.100', 'gray.900');

  return (
    <ChakraTableContainer overflowY={'auto'} {...containerProps}>
      <ChakraTable {...props}>
        <Thead
          position={'sticky'}
          top={'0'}
          left={'0'}
          bg={tHeadBg}
          zIndex={'1'}
        >
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
    </ChakraTableContainer>
  );
}
