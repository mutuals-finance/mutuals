"use client";

import { useQuery } from "@apollo/client";
import { Container, Heading, SimpleGrid } from "@splitfi/ui";
import React from "react";
import { useAccount } from "wagmi";

import { SPLITS_BY_PAYEE } from "@/lib/graphql/thegraph/queries";

import { SplitFragmentCard } from "@/components/Split/Card";

import { TreasurySearchAndCreate } from "@/app/(dashboard)/PoolList/SearchAndCreate";

export default function PoolList() {
  const { address, isConnected } = useAccount();

  const { data } = useQuery(SPLITS_BY_PAYEE, {
    variables: { payee: address },
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
        {Array(4)
          .fill(data?.splits[0])
          .map((fragment, index) => {
            return <SplitFragmentCard fragment={fragment} key={index} />;
          })}
      </SimpleGrid>
    </Container>
  );
}
