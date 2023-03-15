import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { shortenAddress } from "@/lib/utils";
import Date from "@/components/Date";
import { ActivityTableProps, SplitEvent } from "./types";
import ActivityTableBadge from "./ActivityTableBadge";
import { useActivityEvents } from "@/components/ActivityTable/useActivityEvents";

const columnHelper = createColumnHelper<SplitEvent>();

const columns = [
  columnHelper.accessor("event", {
    cell: (info) => <ActivityTableBadge type={info.getValue()} />,
  }),
  columnHelper.accessor("price", { header: "Amount" }),
  columnHelper.accessor("by", {
    cell: (info) =>
      info.getValue() !== "" ? shortenAddress(info.getValue()) : "",
  }),
  columnHelper.accessor("to", {
    cell: (info) =>
      info.getValue() !== "" ? shortenAddress(info.getValue()) : "",
  }),
  columnHelper.accessor("timestamp", {
    header: "Time",
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
    <table className="table-auto whitespace-nowrap text-left w-full">
      <thead className={"sticky top-0 left-0 bg-default-2"}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header, i) => (
              <th
                key={header.id}
                className={`p-3 label !table-cell border-b border-default capitalize ${
                  i <= 0
                    ? "lg:pl-6"
                    : i >= headerGroup.headers.length - 1
                    ? "lg:pr-6"
                    : ""
                }`}
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
                className={`p-3 border-b border-default align-top ${
                  i <= 0
                    ? "lg:pl-6"
                    : i >= row.getVisibleCells().length - 1
                    ? "lg:pr-6"
                    : ""
                }`}
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
