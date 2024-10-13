import React from "react";
import { getTokenTransfers } from "@/lib/ankr";
import ShellPage from "@/features/Shell/Page";
import { Container } from "@mutuals/ui";
import ActivityTableCard from "@/features/Activity/TableCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activity",
};

export default async function PoolActivityPage() {
  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";
  const activity = await getTokenTransfers({
    address: [address],
    blockchain: "eth",
  });

  return (
    <ShellPage
      title={"Activity"}
      description={
        "Your activity contains all withdrawals and deposits associated with your payment pool. Currently, ERC20 Token Transfers are tracked."
      }
      breadcrumbsEnabled={false}
    >
      <Container as={"section"} variant={"shell"}>
        <ActivityTableCard
          cardProps={{
            css: { overflow: "auto !important" },
            bodyProps: { p: "0" },
          }}
          transfers={activity?.transfers ?? []}
          size={"sm"}
          payee={address}
        />
      </Container>
    </ShellPage>
  );
}
