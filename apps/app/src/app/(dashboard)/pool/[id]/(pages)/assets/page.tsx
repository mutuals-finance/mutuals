import React from "react";
import AssetTable from "@/features/Asset/Table";
import ShellPage from "@/features/Shell/Page";
import { Container } from "@mutuals/ui";
import { Metadata } from "next";
import { getTokenBalances } from "@/lib/moralis";

export const metadata: Metadata = {
  title: "Assets",
};

export default async function PoolAssetsPage() {
  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  const assets = await getTokenBalances(address, 1);

  return (
    <ShellPage breadcrumbsEnabled={false} title={"Assets"}>
      <Container as={"section"} maxW={"7xl"}>
        <AssetTable assets={assets} />
      </Container>
    </ShellPage>
  );
}
