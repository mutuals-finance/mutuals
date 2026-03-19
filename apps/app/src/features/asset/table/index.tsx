"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import Table from "@/components/table";
import AssetTableBalanceCell from "@/features/asset/table/balance-cell";

import AssetTableIconCell from "@/features/asset/table/icon-cell";
import AssetTableValueCell from "@/features/asset/table/value-cell";
import type { AssetItem, AssetTableProps } from "@/features/asset/types";

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
    []
  );

  return (
    <Table<AssetItem>
      bodyRowProps={{ cellProps: { px: "6" } }}
      columns={columns}
      data={memoizedData}
      headerRowProps={{ cellProps: { px: "6" } }}
      {...props}
    />
  );
}
