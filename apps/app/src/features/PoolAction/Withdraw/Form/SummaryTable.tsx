import { DataListItem, DataListRoot, DataListItemProps } from "@mutuals/ui";
import React, { useMemo } from "react";
import { formatPrice } from "src/utils";
import { type WithdrawData } from "@/features/PoolAction/types";
import { Share } from "@mutuals/graphql-client-nextjs/thegraph";
import { Balance } from "@ankr.com/ankr.js/dist/types";

export interface SummaryTableProps extends WithdrawData {
  shares?: Share[];
  data?: Balance[];
}

export default function SummaryTable({
  assets = {},
  data = [],
  distribute,
  shares,
}: SummaryTableProps) {
  const share = shares ? shares[0] : null;

  const total = useMemo(
    () =>
      Object.keys(assets).reduce(
        (total, index) => {
          const asset = data[Number(index)];

          if (!asset) {
            return { balance: 0, assetCount: 0 };
          }

          return {
            balance: total.balance + Number(asset.balanceUsd),
            assetCount: total.assetCount + Number(asset.balance),
          };
        },
        { balance: 0, assetCount: 0 },
      ),
    [data, assets],
  );

  const userWithdraw = Number(share?.value || "0.00") * total?.balance;

  const rows: Record<string, { value: number; props?: DataListItemProps }> = {
    "Total Withdrawal": {
      value: distribute ? total?.balance : userWithdraw,
      props: { border: "none", py: 0 },
    },
    "Mutuals Fee": { value: 0 },
  };

  return (
    <DataListRoot>
      {Object.keys(rows).map((col) => (
        <DataListItem
          key={col}
          label={col}
          value={formatPrice(rows[col]?.value.toString() ?? "")}
          {...rows[col]?.props}
        />
      ))}
      <DataListItem
        label={"Your Withdrawal"}
        value={formatPrice(userWithdraw.toString())}
      />
    </DataListRoot>
  );
}
