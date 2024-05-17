import React from "react";
import { getTokenTransfers } from "@/lib/ankr";
import ContentCard from "@/components/ContentCard";
import ActivityTable from "@/components/ActivityTable";
import PageShell from "@/components/Shell/PageShell";

export default async function PoolAssetsPage() {
  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  /*
  const id = decodePrefixedAddress(params.id);
  const { data } = await getPoolDetails({ variables: { id } });

  const pool = useFragment(splitBaseFragment, data.split);

  const metaData = await getMetadata(pool?.metaDataUri);
*/
  const activity = await getTokenTransfers({
    address: [address],
    blockchain: "eth",
  });

  return (
    <>
      <PageShell
        title={"Activity"}
        description={
          "Your activity contains all withdrawals and deposits associated with your payment pool. Currently, ERC20 Token Transfers are tracked."
        }
        breadcrumbsEnabled={false}
      >
        <ContentCard
          bodyProps={{ p: "0" }}
          sx={{ overflow: "auto !important" }}
        >
          <ActivityTable
            transfers={activity?.transfers ?? []}
            address={address}
            size={"sm"}
          />
        </ContentCard>
      </PageShell>
    </>
  );
}
