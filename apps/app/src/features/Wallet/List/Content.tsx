import { ScrollArea, Flex } from "@mutuals/ui";
import { User } from "@privy-io/node";

import WalletCard, { WalletCardAccountType } from "@/features/Wallet/Card";

export type WalletListContentProps = { user?: User };

export default function WalletListContent({ user }: WalletListContentProps) {
  const wallets = user?.linked_accounts.filter((account) =>
    /^(wallet|smart_wallet)$/.test(account.type),
  ) as WalletCardAccountType[] | undefined;

  return (
    <ScrollArea.Root w="full" size="xs">
      <ScrollArea.Viewport>
        <ScrollArea.Content pb="6">
          <Flex gap="6" flexWrap="nowrap">
            {wallets?.map((wallet) => (
              <WalletCard
                key={wallet.walletIndex}
                data={wallet}
                w="52"
                flexShrink="0"
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
