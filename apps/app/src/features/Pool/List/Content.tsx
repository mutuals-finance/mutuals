"use client";

import PoolListEmptyState from "@/features/Pool/List/EmptyState";
import { For, GridItem } from "@mutuals/ui";
import React from "react";
import { useViewerPoolList } from "@mutuals/graphql-client-nextjs/client";
import { Pool } from "@mutuals/graphql-client-nextjs";
import PoolCard from "@/features/Pool/Card";

//export type PoolListContentProps = ApolloQueryResult<MyPoolsQuery>;

export default function PoolListContent() {
  const { data, loading } = useViewerPoolList();

  const pools = (data?.viewer?.pools ?? []) as Array<Pool>;

  return (
    <For
      each={pools}
      fallback={
        <GridItem gridColumn={"1 / -1"}>
          <PoolListEmptyState />
        </GridItem>
      }
    >
      {(pool) => <PoolCard key={pool.id} {...pool} />}
      {/*
      <HStack mb={"6"} gap={"6"} alignItems={"center"}>
        <Form flex={"1"}>
          <InputGroup startElement={<IoSearch />}>
            <Input id="" placeholder="Search..." />
          </InputGroup>
        </Form>
      </HStack>

      {data.viewer!.viewerPools!.map((viewerPool, key) => (
        <PoolCard key={key} {...viewerPool?.pool} />
      ))}
*/}
    </For>
  );
}
