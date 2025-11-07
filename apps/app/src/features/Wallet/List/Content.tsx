"use client";

import { Show, For } from "@mutuals/ui";
import { usePrivy } from "@privy-io/react-auth";

import WalletCard from "@/features/Wallet/Card";
import AuthSiginInCard from "@/features/Auth/SignInCard";
import React from "react";

export default function WalletListContent() {
  const { authenticated, user } = usePrivy();

  const wallets = user?.linkedAccounts.filter(
    (account) => account.type == "wallet",
  );

  return (
    <Show
      when={authenticated}
      fallback={
        <AuthSiginInCard
          description={
            "To view and manage your wallets you must sign in to your account."
          }
        />
      }
    >
      <For each={wallets}>
        {(data) => (
          <WalletCard key={data.address} data={data} w="52" flexShrink="0" />
        )}
      </For>
    </Show>
  );
}
