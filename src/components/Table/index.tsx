import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { RowData, TableOptions } from '@tanstack/table-core';
import React, { HTMLProps } from 'react';

import clsxm from '@/lib/utils/clsxm';

import BodyRow from '@/components/Table/BodyRow';
import HeaderRow from '@/components/Table/HeaderRow';

interface TableProps<TData extends RowData>
  extends Pick<TableOptions<TData>, 'data' | 'columns'>,
    Omit<HTMLProps<HTMLTableElement>, 'data'> {}

export default function Table<TData extends RowData>({
  data,
  columns,
  className,
  ...props
}: TableProps<TData>) {
  const table = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table
      className={clsxm(
        'w-full table-auto whitespace-nowrap text-left',
        className
      )}
      {...props}
    >
      <thead className={'bg-default-2 sticky left-0 top-0 z-10'}>
        {table?.getHeaderGroups()?.map((headerGroup) => (
          <HeaderRow<TData> {...headerGroup} key={headerGroup.id} />
        ))}
      </thead>
      <tbody>
        {table?.getRowModel()?.rows?.map((row) => (
          <BodyRow<TData> {...row} key={row.id} />
        ))}
      </tbody>
    </table>
  );
}
