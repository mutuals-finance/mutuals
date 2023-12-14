'use client';

import { type Balance } from '@ankr.com/ankr.js';
import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import React from 'react';

import { formatCurrencyAmount, formatUSDPrice } from '@/lib/utils';

import Table, { type TableProps } from '@/components/Table';

import AssetCell from './AssetCell';
import { type AssetTableProps } from './types';

const columnHelper = createColumnHelper<Balance>();

export default function AssetTable({
  assets: data = [],
  ...props
}: AssetTableProps & Omit<TableProps<Balance>, 'data' | 'columns'>) {
  const columns = [
    columnHelper.accessor('contractAddress', {
      header: 'Asset',
      cell: (context) => <AssetCell {...context} />,
    }),
    columnHelper.accessor('balance', {
      header: 'Balance',
      cell: ({ getValue, row }) => (
        <>
          <Text variant={'slashed-zero'} as={'span'}>
            {formatCurrencyAmount(getValue())}
          </Text>{' '}
          {row.original.tokenSymbol}
        </>
      ),
    }),
    columnHelper.accessor('balanceUsd', {
      header: 'Value',
      cell: ({ getValue }) => (
        <Text variant={'slashed-zero'} as={'span'}>
          {formatUSDPrice(getValue())}
        </Text>
      ),
    }),
  ];

  return <Table<Balance> data={data} columns={columns} {...props} />;
}
