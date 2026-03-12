"use client";

import { createColumnHelper } from "@tanstack/react-table";
import Table from "@/components/Table";
import { AssetItem, type AssetTableProps } from "@/features/Asset/types";

import AssetTableIconCell from "@/features/Asset/Table/IconCell";
import AssetTableBalanceCell from "@/features/Asset/Table/BalanceCell";
import AssetTableValueCell from "@/features/Asset/Table/ValueCell";

const columnHelper = createColumnHelper<AssetItem>();

export default function AssetTable({
  assets: data = [],
  ...props
}: AssetTableProps) {
  const columns = [
    columnHelper.accessor("token", {
      header: "Asset",
      cell: (context) => (
        <AssetTableIconCell imageProps={{ size: "sm" }} {...context} />
      ),
    }),
    columnHelper.accessor("formattedAmount", {
      header: "Balance",
      cell: (context) => <AssetTableBalanceCell {...context} />,
    }),
    columnHelper.accessor("quotes", {
      header: "Value",
      cell: (context) => <AssetTableValueCell {...context} />,
    }),
  ];

  return (
    <Table<AssetItem>
      data={data}
      columns={columns}
      headerRowProps={{ cellProps: { px: "6" } }}
      bodyRowProps={{ cellProps: { px: "6" } }}
      {...props}
    />
  );
}
