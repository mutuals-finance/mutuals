import {
  Table as ChakraTable,
  TableContainer as ChakraTableContainer,
  TableContainerProps as ChakraTableContainerProps,
  TableHeadProps as ChakraTableHeadProps,
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
  headProps?: ChakraTableHeadProps;
  headerHidden?: boolean;
}

export default function Table<TData extends RowData>({
  data,
  columns,
  containerProps,
  headProps,
  headerHidden = false,
  ...props
}: TableProps<TData>) {
  const table = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <ChakraTableContainer {...containerProps}>
      <ChakraTable {...props}>
        {!headerHidden && (
          <Thead
            position={'sticky'}
            top={'0'}
            left={'0'}
            zIndex={'1'}
            bg={'bg.1'}
            borderBottom={'1px'}
            borderColor={'border.1'}
            {...headProps}
          >
            {table
              ?.getHeaderGroups()
              ?.map((headerGroup) => (
                <HeaderRow<TData> {...headerGroup} key={headerGroup.id} />
              ))}
          </Thead>
        )}
        <Tbody>
          {table
            ?.getRowModel()
            ?.rows?.map((row) => <BodyRow<TData> {...row} key={row.id} />)}
        </Tbody>
      </ChakraTable>
    </ChakraTableContainer>
  );
}
