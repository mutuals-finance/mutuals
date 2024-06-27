import React, { PropsWithChildren } from "react";
import { getAccountBalance, getTokenTransfers } from "@/lib/ankr";
import { getPoolDetailsFromRouteParams } from "@/lib/split";
import PoolOverviewShares from "@/features/PoolOverview/Shares";
import ActivityTableCard from "@/features/Activity/TableCard";
import AssetTableCard from "@/features/Asset/TableCard";
import PoolOverviewDescription from "@/features/PoolOverview/Description";
import ShellPoolOverview from "@/features/Shell/PoolOverview";
import PoolOverviewHandlers from "@/features/PoolOverview/Handlers";

const tabs = [
  {
    title: "Withdraw",
    href: "/pool/maticmum:0x84f36e3afa3d0994401b24f1eabd4fddbdc715db/withdraw",
  },
  {
    title: "Deposit",
    href: "/pool/maticmum:0x84f36e3afa3d0994401b24f1eabd4fddbdc715db/deposit",
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
    shares: pool.shares ?? [],
    balance: queries[1]!,
    activity: queries[2]!,
  };

  return (
    <ShellPoolOverview
      sidebarProps={{ tabs }}
      content={
        <>
          <PoolOverviewDescription {...props} />
          <PoolOverviewHandlers {...props} />
          <PoolOverviewShares {...props} />
          <AssetTableCard assets={props.balance?.assets?.slice(0, 6)} />
          <ActivityTableCard
            payee={props.pool?.address!}
            transfers={props.activity.transfers.slice(0, 6)}
          />
        </>
      }
      contentProps={{ metaData: pool.metaData }}
    >
      {children}
    </ShellPoolOverview>
  );
}
