"use client";

import { type TokenTransfer } from "@ankr.com/ankr.js";
import { Stack } from "@mutuals/ui";
import { createColumnHelper } from "@tanstack/react-table";

import {
  AddressCell,
  AmountCell,
  EventDescriptionCell,
  EventIconCell,
} from "@/features/Activity/Table/cells";
import Table from "@/components/Table";
import { type ActivityTableProps } from "@/features/Activity/types";

const columnHelper = createColumnHelper<TokenTransfer>();

export default function ActivityTable({
  transfers: data = [],
  payee,
  ...props
}: ActivityTableProps) {
  const columns = [
    columnHelper.display({
      id: "eventIcon",
      header: "Event",
      cell: (context) => (
        <Stack direction="row" alignItems={"center"} gap={"3"}>
          <EventIconCell {...context} address={payee} />
          <EventDescriptionCell {...context} address={payee} />
        </Stack>
      ),
    }),
    columnHelper.accessor("fromAddress", {
      header: "From",
      cell: (context) => <AddressCell {...context} address={payee} />,
    }),
    columnHelper.accessor("toAddress", {
      header: "To",
      cell: (context) => <AddressCell {...context} address={payee} />,
    }),
    columnHelper.accessor("value", {
      header: "Amount",
      cell: (context) => <AmountCell {...context} address={payee} />,
    }),
  ];

  return <Table<TokenTransfer> data={data} columns={columns} {...props} />;
}
