"use client";

import { useQuery } from "@mutuals/graphql-client-nextjs";
import {
  Container,
  Heading,
  SimpleGrid,
  EmptyState,
  Group,
  Button,
} from "@mutuals/ui";
import React from "react";
import { useAccount } from "wagmi";

import { TreasurySearchAndCreate } from "./SearchAndCreate";
import PoolCard from "@/features/Pool/Card";
import { PoolListByRecipientDocument } from "@mutuals/graphql-client-nextjs/thegraph";
import { HiViewGridAdd } from "react-icons/hi";

export default function PoolList() {
  const { address, isConnected } = useAccount();

  const { data } = useQuery(PoolListByRecipientDocument, {
    variables: { recipient: address?.toString() ?? "" },
    context: { clientName: "thegraph" },
    skip: !isConnected,
  });

  return (
    <Container maxW={"7xl"}>
      <Heading as={"h2"} size={"2xl"} mb={"3"}>
        Payment Pools
      </Heading>

      {!!data?.splits && data.splits.length > 0 ? (
        <>
          <TreasurySearchAndCreate />
          <SimpleGrid
            templateColumns={"repeat(auto-fit, minmax(22rem, 1fr))"}
            gap={6}
          >
            {Array(4)
              .fill(data?.splits[0])
              .map((split, key) => {
                return <PoolCard key={key} {...split} />;
              })}
          </SimpleGrid>
        </>
      ) : (
        <EmptyState
          icon={<HiViewGridAdd />}
          title="Start receiving funds"
          description="Add a new payment pool to get started"
        >
          <Group>
            <Button>Create Payment Pool</Button>
            <Button variant="outline">Import</Button>
          </Group>
        </EmptyState>
      )}
    </Container>
  );
}
