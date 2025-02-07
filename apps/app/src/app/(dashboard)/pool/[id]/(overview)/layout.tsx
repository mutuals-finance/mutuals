import React, { PropsWithChildren } from "react";
import { getAccountBalance, getTokenTransfers } from "@/lib/ankr";
import { getPoolDetailsFromRouteParams } from "@/lib/split";
import ActivityTableCard from "@/features/Activity/TableCard";
import AssetTableCard from "@/features/Asset/TableCard";
import PoolOverviewDescription from "@/features/PoolOverview/Description";
import ShellPoolOverview from "@/features/Shell/PoolOverview";
import PoolOverviewHandlers from "@/features/PoolOverview/Handlers";
import { Stack } from "@mutuals/ui";
import AllocationTableCard from "@/features/Allocation/TableCard";

const tabs = [
  {
    title: "Withdraw",
    value: "withdraw",
    href: "/pool/2s4NOxbwvXdpJ9daLIqqvBnpl7V/withdraw",
  },
  {
    title: "Deposit",
    value: "deposit",
    href: "/pool/2s4NOxbwvXdpJ9daLIqqvBnpl7V/deposit",
  },
];

export default async function PoolOverviewLayout({
  children,
  params,
}: PropsWithChildren<{
  params: {
    id: string;
  };
}>) {
  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  const queries = await Promise.all([
    getPoolDetailsFromRouteParams(params),
    getAccountBalance({ walletAddress: address, blockchain: "eth" }),
    getTokenTransfers({ address: [address], blockchain: "eth" }),
  ]);

  const pool = queries[0];

  const props = {
    pool,
    balance: queries[1]!,
    activity: queries[2]!,
  };

  return (
    <ShellPoolOverview
      sidebarProps={{ tabs }}
      content={
        <Stack gap={"4"}>
          <PoolOverviewDescription {...props} />
          <PoolOverviewHandlers {...props} />
          <AllocationTableCard {...props} />
          <AssetTableCard assets={props.balance?.assets?.slice(0, 6)} />
          <ActivityTableCard
            payee={address}
            transfers={props.activity.transfers.slice(0, 6)}
          />
        </Stack>
      }
      contentProps={{ pool }}
    >
      {children}
    </ShellPoolOverview>
  );
}
