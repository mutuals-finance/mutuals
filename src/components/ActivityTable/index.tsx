import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';

import { shortenAddress } from '@/lib/utils';
import clsxm from '@/lib/utils/clsxm';

import { useActivityEvents } from '@/components/ActivityTable/useActivityEvents';
import Date from '@/components/Date';

import ActivityTableBadge from './ActivityTableBadge';
import { ActivityTableProps, SplitEvent } from './types';

const columnHelper = createColumnHelper<SplitEvent>();

const columns = [
  columnHelper.accessor('event', {
    cell: (info) => <ActivityTableBadge type={info.getValue()} />,
  }),
  columnHelper.accessor('price', { header: 'Amount' }),
  columnHelper.accessor('by', {
    cell: (info) =>
      info.getValue() !== '' ? shortenAddress(info.getValue()) : '',
  }),
  columnHelper.accessor('to', {
    cell: (info) =>
      info.getValue() !== '' ? shortenAddress(info.getValue()) : '',
  }),
  columnHelper.accessor('timestamp', {
    header: 'Time',
    cell: (info) => <Date timestamp={info.getValue() as string} />,
  }),
];

export default function ActivityTable({ transactions }: ActivityTableProps) {
  const data = transactions.flatMap(useActivityEvents);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className={'w-full table-auto whitespace-nowrap text-left'}>
      <thead className={'bg-default-2 sticky top-0 left-0'}>
        {table.getHeaderGroups().map((headerGroup) => (
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
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell, i) => (
              <td
                key={cell.id}
                className={clsxm(
                  `border-default border-b p-3 align-top`,
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
