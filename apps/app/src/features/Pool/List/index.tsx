"use client";

import { useViewerPoolList } from "@mutuals/graphql-client-nextjs/client";
import { For, GridItem, Show, SimpleGrid } from "@mutuals/ui";
import { usePrivy } from "@privy-io/react-auth";
import AuthSiginInCard from "@/features/auth/sign-in-card";
import PoolCardSkeleton from "@/features/pool/card/skeleton";
import PoolListContent from "@/features/pool/list/content";
import PoolListEmptyState from "@/features/pool/list/empty-state";

export default function PoolList() {
  const { authenticated, ready } = usePrivy();
  const { data, loading: queryLoading } = useViewerPoolList({
    skip: !authenticated,
  });

  const loading = !ready || (authenticated && queryLoading);

  return (
    <SimpleGrid
      gap={6}
      templateColumns={"repeat(auto-fill, minmax(14rem, 1fr))"}
    >
      <Show
        fallback={
          <For each={[...new Array(3).keys()]}>
            {(i) => <PoolCardSkeleton key={i} />}
          </For>
        }
        when={!loading}
      >
        <Show
          fallback={
            <GridItem gridColumn={"1 / -1"}>
              <AuthSiginInCard
                description={
                  "To view and manage your pools you must sign in to your account."
                }
              />
            </GridItem>
          }
          when={authenticated}
        >
          {data?.viewer && data.viewer.__typename === "User" ? (
            <PoolListContent {...data.viewer} />
          ) : (
            <GridItem gridColumn={"1 / -1"}>
              <PoolListEmptyState />
            </GridItem>
          )}
        </Show>
      </Show>
    </SimpleGrid>
  );
}
