"use client";

import { useQuery } from "@mutuals/sdk";
import { Container, Heading, SimpleGrid } from "@mutuals/ui";
import React from "react";
import { useAccount } from "wagmi";

import { TreasurySearchAndCreate } from "./SearchAndCreate";
import PoolCard from "@/features/Pool/Card";
import { PoolListByRecipientDocument } from "@mutuals/sdk/thegraph";

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
                return <PoolCard key={key} {...split} />;
              })
          : "No data"}
      </SimpleGrid>
    </Container>
  );
}
