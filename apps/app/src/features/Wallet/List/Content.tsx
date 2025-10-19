"use client";

import WalletCard from "@/features/Wallet/Card";
import { ScrollArea, Flex } from "@mutuals/ui";

export type WalletListContentProps = {};

export default function WalletListContent(_: WalletListContentProps) {
  const wallets: any[] = [];

  return (
    <ScrollArea.Root w="full" size="xs">
      <ScrollArea.Viewport>
        <ScrollArea.Content py="6">
          <Flex gap="6" flexWrap="nowrap">
            {wallets?.map((wallet) => (
              <WalletCard
                {...wallet}
                key={wallet?.dbid}
                w="40"
                flexShrink="0"
                isPrimaryWallet={false}
              />
            ))}
          </Flex>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal" />
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}
