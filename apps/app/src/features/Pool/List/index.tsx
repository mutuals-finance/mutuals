"use client";

import PoolListContent from "@/features/Pool/List/Content";
import { usePrivy } from "@privy-io/react-auth";
import { For, Show, SimpleGrid } from "@mutuals/ui";
import React from "react";
import PoolCardSkeleton from "@/features/Pool/Card/Skeleton";

export default function PoolList() {
  const { authenticated, ready } = usePrivy();

  return (
    <SimpleGrid
      columns={{ base: 2, lg: 3 }}
      /*
      templateColumns={"repeat(auto-fill, minmax(16rem, 1fr))"}
*/
      gap={6}
    >
      <Show
        when={ready}
        fallback={
          <For each={[...Array(3).keys()]}>
            {(i) => <PoolCardSkeleton key={i} />}
          </For>
        }
      >
        <PoolListContent />
      </Show>
    </SimpleGrid>
  );
}
