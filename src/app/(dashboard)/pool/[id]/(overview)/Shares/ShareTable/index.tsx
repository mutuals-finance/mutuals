import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import React from 'react';

import { formatPercentage } from '@/lib/utils';

import Table, { type TableProps } from '@/components/Table';

import ShareCell from './ShareCell';
import { type ActiveShare, type ShareTableProps } from './types';

export default function ShareTable({
  shares: data = [],
  ...props
}: ShareTableProps & Omit<TableProps<ActiveShare>, 'data' | 'columns'>) {
  const columnHelper = createColumnHelper<ActiveShare>();

  const columns = [
    columnHelper.accessor('payee', {
      cell: (context) => <ShareCell {...context} />,
    }),
    columnHelper.accessor('value', {
      cell: ({ getValue }) => (
        <Text as={'span'}>
          {formatPercentage((getValue() * 100).toString())}
        </Text>
      ),
    }),
  ];

  return (
    <Table<ActiveShare>
      data={data}
      columns={columns}
      fontSize={'sm'}
      {...props}
    />
  );
}
