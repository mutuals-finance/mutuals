"use client";

import { type Balance } from "@ankr.com/ankr.js";
import { createColumnHelper } from "@tanstack/react-table";

import Table from "@/components/Table";
import { type AssetTableProps } from "@/features/Asset/types";

import AssetTableIconCell from "@/features/Asset/Table/IconCell";
import AssetTableBalanceCell from "@/features/Asset/Table/BalanceCell";
import AssetTableValueCell from "@/features/Asset/Table/ValueCell";

const columnHelper = createColumnHelper<Balance>();

export default function AssetTable({
  assets: data = [],
  ...props
}: AssetTableProps) {
  const columns = [
    columnHelper.accessor("contractAddress", {
      header: "Asset",
      cell: (context) => <AssetTableIconCell {...context} />,
    }),
    columnHelper.accessor("balance", {
      header: "Balance",
      cell: (context) => <AssetTableBalanceCell {...context} />,
    }),
    columnHelper.accessor("balanceUsd", {
      header: "Value",
      cell: (context) => <AssetTableValueCell {...context} />,
    }),
  ];

  return <Table<Balance> data={data} columns={columns} {...props} />;
}
