import React from "react";
import AssetTable from "@/features/Asset/Table";
import { getAccountBalance } from "@/lib/ankr";
import ContentCard from "@/components/ContentCard";
import ShellPage from "@/features/Shell/Page";
import { Container } from "@splitfi/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assets",
};

export default async function PoolAssetsPage() {
  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  const balance = await getAccountBalance({
    walletAddress: address,
    blockchain: "eth",
    pageSize: 50,
  });

  return (
    <ShellPage breadcrumbsEnabled={false} title={"Assets"}>
      <Container as={"section"} variant={"shell"}>
        <ContentCard
          bodyProps={{ p: "0" }}
          sx={{ overflow: "auto !important" }}
        >
          <AssetTable assets={balance?.assets} tableProps={{ size: "sm" }} />
        </ContentCard>
      </Container>
    </ShellPage>
  );
}
