"use client";

import React from "react";
import { type Balance } from "@ankr.com/ankr.js";
import { createColumnHelper } from "@tanstack/react-table";

import Table, { type TableProps } from "@/components/Table";

import AssetIconCell from "./AssetIconCell";
import { type AssetTableProps } from "./types";
import AssetBalanceCell from "@/components/AssetTable/AssetBalanceCell";
import AssetValueCell from "@/components/AssetTable/AssetValueCell";

const columnHelper = createColumnHelper<Balance>();

export default function AssetTable({
  assets: data = [],
  ...props
}: AssetTableProps & Omit<TableProps<Balance>, "data" | "columns">) {
  const columns = [
    columnHelper.accessor("contractAddress", {
      header: "Asset",
      cell: (context) => <AssetIconCell {...context} />,
    }),
    columnHelper.accessor("balance", {
      header: "Balance",
      cell: (context) => <AssetBalanceCell {...context} />,
    }),
    columnHelper.accessor("balanceUsd", {
      header: "Value",
      cell: (context) => <AssetValueCell {...context} />,
    }),
  ];

  return <Table<Balance> data={data} columns={columns} {...props} />;
}
