import { getPool } from "@mutuals/graphql-client-nextjs/server";
import { Stack } from "@mutuals/ui";
import { notFound } from "next/navigation";
import type { PropsWithChildren } from "react";
import ActivityTableCard from "@/features/activity/table-card";
import AssetTableCard from "@/features/asset/table-card";
import PoolOverviewDescription from "@/features/pool-overview/description";
import PoolOverviewHandlers from "@/features/pool-overview/handlers";
import ShellPoolOverview from "@/features/shell/pool-overview";

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

  const pool = data.pool;
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
      content={
        <Stack gap={"4"}>
          <PoolOverviewDescription queryOptions={queryOptions} />
          <PoolOverviewHandlers queryOptions={queryOptions} />
          <AssetTableCard
            queryOptions={queryOptions}
            tableProps={{
              css: {
                "& tbody tr:last-of-type td": {
                  borderBottom: "none",
                },
              },
            }}
          />
          <ActivityTableCard
            queryOptions={queryOptions}
            tableProps={{
              css: {
                "& tbody tr:last-of-type td": {
                  borderBottom: "none",
                },
              },
            }}
          />
        </Stack>
      }
      contentProps={{ queryOptions }}
      sidebarProps={{ tabs }}
    >
      {children}
    </ShellPoolOverview>
  );
}
