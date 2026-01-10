"use client";

import { createColumnHelper } from "@tanstack/react-table";

import Table from "@/components/Table";
import { type AssetTableProps } from "@/features/Asset/types";

import AssetTableIconCell from "@/features/Asset/Table/IconCell";
import AssetTableBalanceCell from "@/features/Asset/Table/BalanceCell";
import AssetTableValueCell from "@/features/Asset/Table/ValueCell";
import { ERC20TokenBalance } from "@/lib/moralis";

const columnHelper = createColumnHelper<ERC20TokenBalance>();

export default function AssetTable({
  assets: data = [],
  ...props
}: AssetTableProps) {
  const columns = [
    columnHelper.accessor("tokenAddress", {
      header: "Asset",
      cell: (context) => (
        <AssetTableIconCell imageProps={{ size: "sm" }} {...context} />
      ),
    }),
    columnHelper.accessor("usdValue", {
      header: "Balance",
      cell: (context) => <AssetTableBalanceCell {...context} />,
    }),
    columnHelper.accessor("balance", {
      header: "Value",
      cell: (context) => <AssetTableValueCell {...context} />,
    }),
  ];

  return (
    <Table<ERC20TokenBalance>
      data={data}
      columns={columns}
      headerRowProps={{ cellProps: { px: "6" } }}
      bodyRowProps={{ cellProps: { px: "6" } }}
      {...props}
    />
  );
}
