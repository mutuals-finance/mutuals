import { TokenTransfer } from '@ankr.com/ankr.js/dist/types';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';

import clsxm from '@/lib/utils/clsxm';

import {
  AddressCell,
  AmountCell,
  EventDescriptionCell,
  EventIconCell,
} from '@/components/ActivityTable/cells/';

import { ActivityTableProps } from './types';

const columnHelper = createColumnHelper<TokenTransfer>();

export default function ActivityTable({
  transfers: data = [],
  address,
}: ActivityTableProps) {
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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className={'w-full table-auto whitespace-nowrap text-left text-sm'}>
      <thead className={'bg-default-2 sticky left-0 top-0 z-10'}>
        {table?.getHeaderGroups()?.map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header, i) => (
              <th
                key={header.id}
                className={clsxm(
                  `label border-default !table-cell border-b p-3 capitalize`,
                  i <= 0 && 'lg:pl-6',
                  i >= headerGroup.headers.length - 1 && 'lg:pr-6'
                )}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table?.getRowModel()?.rows?.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell, i) => (
              <td
                key={cell.id}
                className={clsxm(
                  `border-default border-b p-3 align-middle`,
                  i <= 0 && 'lg:pl-6',
                  i >= row.getVisibleCells().length - 1 && 'lg:pr-6'
                )}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
