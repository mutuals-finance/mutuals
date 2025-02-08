import {
  ApolloQueryResult,
  ViewerPoolsQuery,
} from "@mutuals/graphql-client-nextjs";
import {
  Container,
  Heading,
  SimpleGrid,
  EmptyState,
  Group,
  Button,
} from "@mutuals/ui";
import React from "react";

import { TreasurySearchAndCreate } from "./SearchAndCreate";
import PoolCard from "@/features/Pool/Card";
import { HiViewGridAdd } from "react-icons/hi";

export default function PoolList({
  data,
}: ApolloQueryResult<ViewerPoolsQuery>) {
  const viewerPools =
    data?.viewer && "viewerPools" in data.viewer ? data.viewer.viewerPools : [];

  return (
    <Container maxW={"7xl"}>
      <Heading as={"h2"} size={"2xl"} mb={"3"}>
        Payment Pools
      </Heading>

      {!!viewerPools && viewerPools.length > 0 ? (
        <>
          <TreasurySearchAndCreate />
          <SimpleGrid
            templateColumns={"repeat(auto-fill, minmax(16rem, 1fr))"}
            gap={4}
          >
            {viewerPools.map((viewerPool, key) => {
              return <PoolCard key={key} {...viewerPool?.pool} />;
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
