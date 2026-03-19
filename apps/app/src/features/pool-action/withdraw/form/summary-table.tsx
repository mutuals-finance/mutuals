"use client";

import {
  DataListItem,
  type DataListItemProps,
  DataListRoot,
} from "@mutuals/ui";
import { useMemo } from "react";
import type { AssetItem } from "@/features/asset/types";
import type { WithdrawData } from "@/features/pool-action/types";
import { formatUSDPrice } from "@/utils";

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

          if (!asset) {
            return acc;
          }

          const assetUsdValue = asset.quotes?.[0]?.value ?? 0;
          const assetTokenAmount = asset.formattedAmount ?? 0;

          return {
            balance: acc.balance + assetUsdValue,
            assetCount: acc.assetCount + assetTokenAmount,
          };
        },
        { balance: 0, assetCount: 0 }
      ),
    [data, assets]
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
    <DataListRoot gap="2" orientation="horizontal" size={"sm"}>
      {Object.values(rows).map((row) => (
        <DataListItem
          key={row.label}
          label={row.label}
          value={formatUSDPrice(row.value)}
          {...row.props}
        />
      ))}
      <DataListItem
        borderColor={"border"}
        borderTop={"1px solid"}
        fontWeight={"medium"}
        label={distribute ? "Distributing Total" : "Your Withdrawal"}
        pt={"2"}
        value={formatUSDPrice(userWithdrawValue)}
      />
    </DataListRoot>
  );
}
