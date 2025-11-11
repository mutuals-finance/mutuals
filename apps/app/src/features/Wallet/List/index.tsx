"use client";

import React from "react";

import { usePrivy } from "@privy-io/react-auth";
import { Flex, For, ScrollArea, Show } from "@mutuals/ui";
import WalletCardSkeleton from "@/features/Wallet/Card/Skeleton";
import WalletListContent from "@/features/Wallet/List/Content";

//type WalletListProps = ApolloQueryResult<MeQuery>;

export default function WalletList() {
  const { ready } = usePrivy();

  return (
    <ScrollArea.Root w="full" size="xs">
      <ScrollArea.Viewport>
        <ScrollArea.Content pb="6">
          <Flex gap="6" flexWrap="nowrap">
            <Show
              when={ready}
              fallback={
                <For each={[...Array(4).keys()]}>
                  {(i) => <WalletCardSkeleton key={i} w="64" flexShrink="0" />}
                </For>
              }
            >
              <WalletListContent />
            </Show>
          </Flex>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
    </ScrollArea.Root>
  );
}
