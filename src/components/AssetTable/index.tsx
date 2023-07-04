import { type Balance } from '@ankr.com/ankr.js';
import { TableProps } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import React, { HTMLProps } from 'react';

import { formatCurrencyAmount, formatUSDPrice } from '@/lib/utils';

import Table from '@/components/Table';

import AssetCell from './AssetCell';
import { type AssetTableProps } from './types';

const columnHelper = createColumnHelper<Balance>();

export default function AssetTable({
  assets: data = [],
  ...props
}: AssetTableProps & TableProps) {
  const columns = [
    columnHelper.accessor('contractAddress', {
      header: 'Asset',
      cell: (context) => <AssetCell {...context} />,
    }),
    columnHelper.accessor('balance', {
      header: 'Balance',
      cell: ({ getValue, row }) =>
        `${formatCurrencyAmount(getValue())} ${row.original.tokenSymbol}`,
    }),
    columnHelper.accessor('balanceUsd', {
      header: 'Value',
      cell: ({ getValue }) => formatUSDPrice(getValue()),
    }),
  ];

  return <Table<Balance> data={data} columns={columns} {...props} />;
}
