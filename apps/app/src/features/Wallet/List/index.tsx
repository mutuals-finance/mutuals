"use client";

import { Flex, For, ScrollArea, Show } from "@mutuals/ui";

import { usePrivy } from "@privy-io/react-auth";
import WalletCardSkeleton from "@/features/wallet/card/skeleton";
import WalletListContent from "@/features/wallet/list/content";

//type WalletListProps = ApolloQueryResult<MeQuery>;

export default function WalletList() {
  const { ready } = usePrivy();

  return (
    <ScrollArea.Root size="xs" w="full">
      <ScrollArea.Viewport>
        <ScrollArea.Content pb="6">
          <Flex flexWrap="nowrap" gap="6">
            <Show
              fallback={
                <For each={[...new Array(4).keys()]}>
                  {(i) => <WalletCardSkeleton flexShrink="0" key={i} w="64" />}
                </For>
              }
              when={ready}
            >
              <WalletListContent />
            </Show>
          </Flex>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
    </ScrollArea.Root>
  );
}
