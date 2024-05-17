import { Text } from "@splitfi/ui";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

import { formatUSDPrice } from "@/lib/utils";

import Table, { type TableProps } from "@/components/Table";

import PayerCell from "./PayerCell";
import { type Payer, type PayerTableProps } from "./types";

export default function PayerTable({
  payers: data = [],
  ...props
}: PayerTableProps & Omit<TableProps<Payer>, "data" | "columns">) {
  const columnHelper = createColumnHelper<Payer>();

  const columns = [
    columnHelper.accessor("payee", {
      header: "Address",
      cell: (context) => <PayerCell {...context} />,
    }),
    columnHelper.accessor("timestamp", {
      header: "Total",
      cell: ({ getValue }) => (
        <Text variant={"slashed-zero"} as={"span"}>
          {formatUSDPrice(getValue())}
        </Text>
      ),
    }),
  ];

  return (
    <Table<Payer> data={data} columns={columns} fontSize={"sm"} {...props} />
  );
}
