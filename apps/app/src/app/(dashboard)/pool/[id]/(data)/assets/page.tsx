import { Box } from "@splitfi/ui";
import React, { PropsWithChildren } from "react";
import { decodePrefixedAddress } from "@/lib/utils";
import { getMetadata, getPoolDetails } from "@/lib/split";
import { useFragment } from "@/lib/graphql/thegraph/__generated__";
import { splitBaseFragment } from "@/lib/graphql/thegraph/fragments";
import AssetTable from "@/components/AssetTable";
import { getAccountBalance } from "@/lib/ankr";
import ContentCard from "@/components/ContentCard";
import PageShell from "@/components/Shell/PageShell";

interface PoolAssetsPageProps {
  params: { id: string };
}

export default async function PoolAssetsPage({
  params,
}: PropsWithChildren<PoolAssetsPageProps>) {
  const id = decodePrefixedAddress(params.id);
  const { data } = await getPoolDetails({ variables: { id } });

  const pool = useFragment(splitBaseFragment, data.split);
  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  const metaData = await getMetadata(pool?.metaDataUri);
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
