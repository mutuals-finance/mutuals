"use client";

import { DataListItem, DataListRoot, DataListItemProps } from "@mutuals/ui";
import React, { useMemo } from "react";
import { formatUSDPrice } from "@/utils";
import { type WithdrawData } from "@/features/PoolAction/types";
import { AssetItem } from "@/features/Asset/types";

export interface SummaryTableProps extends WithdrawData {
  data?: AssetItem[];
}

export default function SummaryTable({
  assets = {},
  data = [],
  distribute,
}: SummaryTableProps) {
  const total = useMemo(
    () =>
      Object.keys(assets).reduce(
        (acc, index) => {
          const asset = data[Number(index)];

          if (!asset) return acc;

          const assetUsdValue = asset.quotes?.[0]?.value ?? 0;
          const assetTokenAmount = asset.formattedAmount ?? 0;

          return {
            balance: acc.balance + assetUsdValue,
            assetCount: acc.assetCount + assetTokenAmount,
          };
        },
        { balance: 0, assetCount: 0 },
      ),
    [data, assets],
  );

  const userWithdrawValue = total.balance;

  const rows: Record<
    string,
    { label: string; value: number; props?: DataListItemProps }
  > = {
    total: {
      label: "Total Selection",
      value: total.balance,
      props: { border: "none", py: 0 },
    },
    fee: {
      label: "Mutuals Fee",
      value: 0,
      props: { border: "none", py: 0 },
    },
  };

  return (
    <DataListRoot orientation="horizontal" size={"sm"} gap="2">
      {Object.values(rows).map((row) => (
        <DataListItem
          key={row.label}
          label={row.label}
          value={formatUSDPrice(row.value)}
          {...row.props}
        />
      ))}
      <DataListItem
        label={distribute ? "Distributing Total" : "Your Withdrawal"}
        value={formatUSDPrice(userWithdrawValue)}
      />
    </DataListRoot>
  );
}
