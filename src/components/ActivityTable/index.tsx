import { TokenTransfer } from '@ankr.com/ankr.js/dist/types';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';

import { formatCurrencyAmount } from '@/lib/utils';
import clsxm from '@/lib/utils/clsxm';

import AddressCell from '@/components/ActivityTable/AddressCell';
import Date from '@/components/Date';

import ActivityTableBadge from './ActivityTableBadge';
import { ActivityTableProps, EventType } from './types';

const columnHelper = createColumnHelper<TokenTransfer>();

export default function ActivityTable({
  transfers: data = [],
  address = '',
  metaData,
}: ActivityTableProps) {
  function getEventType(fromAddress?: string) {
    return fromAddress === address ? EventType.Withdrawal : EventType.Deposit;
  }

  const columns = [
    columnHelper.display({
      id: 'eventIcon',
      header: 'Event',
      cell: ({ row }) => {
        const type = getEventType(row.original.fromAddress);
        return <ActivityTableBadge type={type} />;
      },
    }),
    columnHelper.display({
      id: 'eventDescription',
      header: '',
      cell: ({ row }) => {
        const type = getEventType(row.original.fromAddress);
        return (
          <>
            <span className={'block'}>{type}</span>
            <Date
              className='text-lighter block'
              timestamp={row.original.timestamp.toString()}
            />
          </>
        );
      },
    }),
    columnHelper.accessor('fromAddress', {
      header: 'From',
      cell: (info) => (
        <AddressCell info={info} address={address} {...metaData} />
      ),
    }),
    columnHelper.accessor('toAddress', {
      header: 'To',
      cell: (info) => (
        <AddressCell info={info} address={address} {...metaData} />
      ),
    }),
    columnHelper.accessor('value', {
      header: 'Amount',
      cell: ({ getValue, row }) => {
        const type = getEventType(row.original.fromAddress);
        const isDeposit = type === EventType.Deposit;
        const text = `${formatCurrencyAmount(getValue())} ${
          row.original.tokenSymbol
        }`;

        return (
          <span
            className={clsxm('slashed-zero', isDeposit && 'text-green-600')}
          >
            {isDeposit && '+ '}
            {text}
          </span>
        );
      },
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
