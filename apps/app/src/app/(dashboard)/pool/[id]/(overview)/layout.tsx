import { Box, Stack } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import Sidebar from "@/app/(dashboard)/pool/[id]/(overview)/Sidebar";
import { getAccountBalance, getTokenTransfers } from "@/lib/ankr";
import { useFragment } from "@/lib/graphql/thegraph/__generated__";
import { splitBaseFragment } from "@/lib/graphql/thegraph/fragments";
import { getMetadata, getPoolDetailsWithShares } from "@/lib/split";
import Description from "@/app/(dashboard)/pool/[id]/(overview)/Description";
import Handlers from "@/app/(dashboard)/pool/[id]/(overview)/Handlers";
import Shares from "@/app/(dashboard)/pool/[id]/(overview)/Shares";
import Assets from "@/app/(dashboard)/pool/[id]/(overview)/Assets";
import Activity from "@/app/(dashboard)/pool/[id]/(overview)/Activity";
import { decodePrefixedAddress } from "@/lib/utils";
import PoolPageShell from "@/app/(dashboard)/pool/[id]/PoolPageShell";

const tabs = [
  {
    title: "Withdraw",
    href: "/pool/maticmum:0x84f36e3afa3d0994401b24f1eabd4fddbdc715db/withdraw",
  },
  {
    title: "Deposit",
    href: "/pool/maticmum:0x84f36e3afa3d0994401b24f1eabd4fddbdc715db/deposit",
  },
];

export default async function PoolOverviewLayout({
  children,
  params,
}: PropsWithChildren<{
  params: {
    id: string;
  };
}>) {
  const id = decodePrefixedAddress(params.id);
  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";
  const isSidebarOpen = tabs.some(({ href }) =>
    href.includes((children as any)?.props?.childPropSegment ?? ""),
  );

  const queries = await Promise.all([
    getPoolDetailsWithShares({ variables: { id } }),
    getAccountBalance({ walletAddress: address, blockchain: "eth" }),
    getTokenTransfers({ address: [address], blockchain: "eth" }),
  ]);

  const poolWithSharesData = queries[0]?.data;
  const pool = useFragment(splitBaseFragment, poolWithSharesData.split);

  const metaData = await getMetadata(pool?.metaDataUri);

  const props = {
    pool,
    shares: poolWithSharesData?.split?.shares,
    metaData,
    balance: queries[1]!,
    activity: queries[2]!,
  };

  return (
    <Stack direction={"row"} gap={"0"} w={"full"}>
      <PoolPageShell metaData={metaData} flex={"1"} minWidth={"0"}>
        <Stack gap={"6"}>
          <Description {...props} />
          <Handlers {...props} />
          <Shares {...props} />
          <Assets {...props} />
          <Activity {...props} />
        </Stack>
      </PoolPageShell>

      <Sidebar tabs={tabs} defaultOpen={isSidebarOpen}>
        {children}
      </Sidebar>
    </Stack>
  );
}
