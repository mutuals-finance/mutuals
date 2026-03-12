import React from "react";
import AssetTable from "@/features/Asset/Table";
import ShellPage from "@/features/Shell/Page";
import { Container } from "@mutuals/ui";
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
  const slug = (await params).id;
  const queryOptions = { variables: { slug } };

  const { data, error } = await getPoolWithTokens(queryOptions);

  if (error || !data?.pool || "message" in data.pool) {
    notFound();
  }

  const assets: AssetItem[] =
    data.pool.balance?.tokens?.edges?.map((edge) => edge.node) ?? [];

  return (
    <ShellPage breadcrumbsEnabled={false} title={"Assets"}>
      <Container as={"section"} maxW={"7xl"}>
        <AssetTable assets={assets} />
      </Container>
    </ShellPage>
  );
}
