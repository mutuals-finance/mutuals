"use client";

import { For, Show } from "@mutuals/ui";
import { usePrivy } from "@privy-io/react-auth";
import AuthSiginInCard from "@/features/auth/sign-in-card";
import WalletCard from "@/features/wallet/card";

export default function WalletListContent() {
  const { authenticated, user } = usePrivy();

  const wallets = user?.linkedAccounts.filter(
    (account) => account.type === "wallet"
  );

  return (
    <Show
      fallback={
        <AuthSiginInCard
          description={
            "To view and manage your wallets you must sign in to your account."
          }
        />
      }
      when={authenticated}
    >
      <For each={wallets}>
        {(data) => (
          <WalletCard data={data} flexShrink="0" key={data.address} w="64" />
        )}
      </For>
    </Show>
  );
}
