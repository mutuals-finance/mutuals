import React, { PropsWithChildren } from "react";
import ActivityTableCard from "@/features/Activity/TableCard";
import AssetTableCard from "@/features/Asset/TableCard";
import PoolOverviewDescription from "@/features/PoolOverview/Description";
import ShellPoolOverview from "@/features/Shell/PoolOverview";
import PoolOverviewHandlers from "@/features/PoolOverview/Handlers";
import { Stack } from "@mutuals/ui";
import { getPool } from "@mutuals/graphql-client-nextjs/server";
import { notFound } from "next/navigation";
import {
  getFragmentData,
  PoolWithOwnerAndContractFragmentDoc,
} from "@mutuals/graphql-client-nextjs";

export default async function PoolOverviewLayout({
  children,
  params,
}: PropsWithChildren<{
  params: Promise<{
    id: string;
  }>;
}>) {
  const queryOptions = { variables: { slug: (await params).id } };

  const { data } = await getPool(queryOptions);

  if (!data?.pool || "message" in data.pool) {
    notFound();
  }

  const pool = getFragmentData(PoolWithOwnerAndContractFragmentDoc, data.pool);
  const tabs = [
    {
      title: "Withdraw",
      value: "withdraw",
      href: `/pool/${pool.slug}/withdraw`,
    },
    {
      title: "Deposit",
      value: "deposit",
      href: `/pool/${pool.slug}/deposit`,
    },
  ];

  return (
    <ShellPoolOverview
      sidebarProps={{ tabs }}
      contentProps={{ queryOptions }}
      content={
        <Stack gap={"4"}>
          <PoolOverviewDescription queryOptions={queryOptions} />
          <PoolOverviewHandlers queryOptions={queryOptions} />
          <AssetTableCard />
          <ActivityTableCard />
        </Stack>
      }
    >
      {children}
    </ShellPoolOverview>
  );
}
