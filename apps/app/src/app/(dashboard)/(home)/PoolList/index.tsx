"use client";

import { useQuery } from "@splitfi/sdk";
import { Container, Heading, SimpleGrid } from "@splitfi/ui";
import React from "react";
import { useAccount } from "wagmi";

import { TreasurySearchAndCreate } from "./SearchAndCreate";
import SplitCard from "@/components/Split/Card";
import { PoolListByRecipientDocument } from "@splitfi/sdk/thegraph";

export default function PoolList() {
  const { address, isConnected } = useAccount();

  const { data } = useQuery(PoolListByRecipientDocument, {
    variables: { recipient: address?.toString() ?? "" },
    context: { clientName: "thegraph" },
    skip: !isConnected,
  });

  return (
    <Container variant={"shell"}>
      <Heading as={"h2"} size={"lg"} mb={"6"}>
        Payment Pools
      </Heading>

      <TreasurySearchAndCreate />
      <SimpleGrid
        templateColumns={"repeat(auto-fit, minmax(22rem, 1fr))"}
        spacing={6}
      >
        {!!data?.splits && data.splits.length > 0
          ? Array(4)
              .fill(data?.splits[0])
              .map((split, key) => {
                return <SplitCard key={key} {...split} />;
              })
          : "No data"}
      </SimpleGrid>
    </Container>
  );
}
