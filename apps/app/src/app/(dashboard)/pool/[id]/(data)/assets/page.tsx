import React from "react";
import AssetTable from "@/components/AssetTable";
import { getAccountBalance } from "@/lib/ankr";
import ContentCard from "@/components/ContentCard";
import PageShell from "@/components/Shell/PageShell";

export default async function PoolAssetsPage() {
  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  const balance = await getAccountBalance({
    walletAddress: address,
    blockchain: "eth",
    pageSize: 50,
  });

  return (
    <>
      <PageShell breadcrumbsEnabled={false} title={"Assets"}>
        <ContentCard
          bodyProps={{ p: "0" }}
          sx={{ overflow: "auto !important" }}
        >
          <AssetTable assets={balance?.assets} size={"sm"} />
        </ContentCard>
      </PageShell>
    </>
  );
}
