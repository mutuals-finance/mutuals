import { TokenTransfer } from '@ankr.com/ankr.js/dist/types';
import { Flex, TableProps } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import React from 'react';

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
}: ActivityTableProps & TableProps) {
  const columns = [
    columnHelper.display({
      id: 'eventIcon',
      header: 'Event',
      cell: (context) => (
        <Flex alignItems={'center'} gap={'6'}>
          <EventIconCell {...context} address={address} />
          <EventDescriptionCell {...context} address={address} />
        </Flex>
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
