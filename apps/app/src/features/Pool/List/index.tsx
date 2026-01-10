"use client";

import PoolListContent from "@/features/Pool/List/Content";
import { usePrivy } from "@privy-io/react-auth";
import { For, GridItem, Show, SimpleGrid } from "@mutuals/ui";
import React from "react";
import PoolCardSkeleton from "@/features/Pool/Card/Skeleton";
import AuthSiginInCard from "@/features/Auth/SignInCard";

export default function PoolList() {
  const { authenticated, ready } = usePrivy();

  return (
    <SimpleGrid
      templateColumns={"repeat(auto-fill, minmax(16rem, 1fr))"}
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
        <Show
          when={authenticated}
          fallback={
            <GridItem gridColumn={"1 / -1"}>
              <AuthSiginInCard
                description={
                  "To view and manage your pools you must sign in to your account."
                }
              />
            </GridItem>
          }
        >
          <PoolListContent />
        </Show>
      </Show>
    </SimpleGrid>
  );
}
