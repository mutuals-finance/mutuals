import { TokenTransfer } from '@ankr.com/ankr.js/dist/types';
import { createColumnHelper } from '@tanstack/react-table';
import React, { HTMLProps } from 'react';

import {
  AddressCell,
  AmountCell,
  EventDescriptionCell,
  EventIconCell,
} from '@/components/ActivityTable/cells/';
import Table from '@/components/Table';

import { ActivityTableProps } from './types';

const columnHelper = createColumnHelper<TokenTransfer>();

export default function ActivityTable({
  transfers: data = [],
  address,
  ...props
}: ActivityTableProps & Omit<HTMLProps<HTMLTableElement>, 'data'>) {
  const columns = [
    columnHelper.display({
      id: 'eventIcon',
      header: 'Event',
      cell: (context) => <EventIconCell {...context} address={address} />,
    }),
    columnHelper.display({
      id: 'eventDescription',
      header: '',
      cell: (context) => (
        <EventDescriptionCell {...context} address={address} />
      ),
    }),
    columnHelper.accessor('fromAddress', {
      header: 'From',
      cell: (context) => <AddressCell {...context} address={address} />,
    }),
    columnHelper.accessor('toAddress', {
      header: 'To',
      cell: (context) => <AddressCell {...context} address={address} />,
    }),
    columnHelper.accessor('value', {
      header: 'Amount',
      cell: (context) => <AmountCell {...context} address={address} />,
    }),
  ];

  return <Table<TokenTransfer> data={data} columns={columns} {...props} />;
}
