"use client";

import { Stack } from "@mutuals/ui";
import { createColumnHelper } from "@tanstack/react-table";

import {
  AddressCell,
  AmountCell,
  EventDescriptionCell,
  EventIconCell,
} from "@/features/Activity/Table/cells";
import Table from "@/components/Table";
import {
  type ActivityTableProps,
  type PoolActivityEvent,
} from "@/features/Activity/types";

const columnHelper = createColumnHelper<PoolActivityEvent>();

export default function ActivityTable({
  events = [],
  ...props
}: ActivityTableProps) {
  const columns = [
    columnHelper.display({
      id: "eventIcon",
      header: "Event",
      cell: (context) => (
        <Stack direction="row" alignItems={"center"} gap={"3"}>
          <EventIconCell {...context} />
          <EventDescriptionCell {...context} />
        </Stack>
      ),
    }),
    columnHelper.accessor("from", {
      header: "From",
      cell: (context) => <AddressCell {...context} />,
    }),
    columnHelper.accessor("to", {
      header: "To",
      cell: (context) => <AddressCell {...context} />,
    }),
    columnHelper.accessor("amount", {
      header: "Amount",
      cell: (context) => <AmountCell {...context} />,
    }),
  ];

  return (
    <Table<PoolActivityEvent>
      data={events}
      columns={columns}
      headerRowProps={{ cellProps: { px: "6" } }}
      bodyRowProps={{ cellProps: { px: "6" } }}
      {...props}
    />
  );
}
