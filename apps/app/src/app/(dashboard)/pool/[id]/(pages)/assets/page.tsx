import { getPoolWithTokens } from "@mutuals/graphql-client-nextjs/server";
import { Bleed, Container } from "@mutuals/ui";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AssetTable from "@/features/asset/table";
import type { AssetItem } from "@/features/asset/types";
import ShellPage from "@/features/shell/page";

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
      breadcrumbsEnabled={false}
      description={
        "Your assets contain all tokens that are currently held in your payment pool. This includes any tokens that have been deposited into the pool, but not yet transferred to your wallet."
      }
      title={"Assets"}
    >
      <Container as={"section"} maxW={"7xl"}>
        <Bleed inline={{ mdDown: "6" }}>
          <AssetTable assets={assets} />
        </Bleed>
      </Container>
    </ShellPage>
  );
}
