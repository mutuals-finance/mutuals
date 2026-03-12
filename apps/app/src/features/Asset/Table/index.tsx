"use client";

import { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "@/components/Table";
import { AssetItem, type AssetTableProps } from "@/features/Asset/types";

import AssetTableIconCell from "@/features/Asset/Table/IconCell";
import AssetTableBalanceCell from "@/features/Asset/Table/BalanceCell";
import AssetTableValueCell from "@/features/Asset/Table/ValueCell";

const columnHelper = createColumnHelper<AssetItem>();

const imageProps = { size: "sm" as const };

export default function AssetTable({ assets = [], ...props }: AssetTableProps) {
  const memoizedData = useMemo(() => assets, [assets]);

  const columns = useMemo(
    () => [
      columnHelper.accessor("token", {
        header: "Asset",
        cell: (context) => (
          <AssetTableIconCell imageProps={imageProps} {...context} />
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
    ],
    [],
  );

  return (
    <Table<AssetItem>
      data={memoizedData}
      columns={columns}
      headerRowProps={{ cellProps: { px: "6" } }}
      bodyRowProps={{ cellProps: { px: "6" } }}
      {...props}
    />
  );
}
