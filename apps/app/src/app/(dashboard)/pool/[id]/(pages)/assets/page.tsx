import React from "react";
import AssetTable from "@/features/Asset/Table";
import ShellPage from "@/features/Shell/Page";
import { Container, Bleed } from "@mutuals/ui";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getPoolWithTokens } from "@mutuals/graphql-client-nextjs/server";
import { type AssetItem } from "@/features/Asset/types";

export const metadata: Metadata = {
  title: "Assets",
};

export default async function PoolAssetsPage({
  params,
}: PageProps<"/pool/[id]/assets">) {
  const { id: slug } = await params;
  const queryOptions = { variables: { slug } };

  const { data, error } = await getPoolWithTokens(queryOptions);

  if (error || !data?.pool || "message" in data.pool) {
    notFound();
  }

  const edges = data.pool.balance?.tokens?.edges ?? [];
  const assets: AssetItem[] = edges?.map((edge) => edge.node);

  return (
    <ShellPage
      title={"Assets"}
      breadcrumbsEnabled={false}
      description={
        "Your assets contain all tokens that are currently held in your payment pool. This includes any tokens that have been deposited into the pool, but not yet transferred to your wallet."
      }
    >
      <Container as={"section"} maxW={"7xl"}>
        <Bleed inline={{ mdDown: "6" }}>
          <AssetTable assets={assets} />
        </Bleed>
      </Container>
    </ShellPage>
  );
}
