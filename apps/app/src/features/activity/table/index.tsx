"use client";

import { Stack } from "@mutuals/ui";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "@/components/table";
import {
  AddressCell,
  AmountCell,
  EventDescriptionCell,
  EventIconCell,
} from "@/features/activity/table/cells";
import type {
  ActivityTableProps,
  PoolActivityEvent,
} from "@/features/activity/types";

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
        <Stack alignItems={"center"} direction="row" gap={"3"}>
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
      bodyRowProps={{ cellProps: { px: "6" } }}
      columns={columns}
      data={events}
      headerRowProps={{ cellProps: { px: "6" } }}
      {...props}
    />
  );
}
