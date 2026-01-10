import React, { PropsWithChildren } from "react";
import { getPoolDetailsFromRouteParams } from "@/lib/split";
import ActivityTableCard from "@/features/Activity/TableCard";
import AssetTableCard from "@/features/Asset/TableCard";
import PoolOverviewDescription from "@/features/PoolOverview/Description";
import ShellPoolOverview from "@/features/Shell/PoolOverview";
import PoolOverviewHandlers from "@/features/PoolOverview/Handlers";
import { Stack } from "@mutuals/ui";
import { getTokenBalances } from "@/lib/moralis";
import { getTokenTransfers } from "@/lib/ankr";

const tabs = [
  {
    title: "Withdraw",
    value: "withdraw",
    href: "/pool/example/withdraw",
  },
  {
    title: "Deposit",
    value: "deposit",
    href: "/pool/example/deposit",
  },
];

export default async function PoolOverviewLayout({
  children,
  params,
}: PropsWithChildren<{
  params: Promise<{
    id: string;
  }>;
}>) {
  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  const queries = await Promise.all([
    getPoolDetailsFromRouteParams(await params),
    getTokenBalances(address, 1),
    getTokenTransfers({ address: [address], blockchain: "eth" }),
  ]);

  const pool = queries[0];

  const props = {
    pool,
    assets: queries[1], // queries[1]!,
    activity: queries[2]!,
  };

  return (
    <ShellPoolOverview
      sidebarProps={{ tabs }}
      content={
        <Stack gap={"4"}>
          <PoolOverviewDescription {...props} />
          <PoolOverviewHandlers {...props} />
          {/*
          <AllocationTableCard {...props} />
*/}
          <AssetTableCard assets={props.assets.slice(0, 10)} />
          <ActivityTableCard
            payee={address}
            transfers={props.activity?.slice(0, 10)}
          />
        </Stack>
      }
      contentProps={{ pool }}
    >
      {children}
    </ShellPoolOverview>
  );
}
