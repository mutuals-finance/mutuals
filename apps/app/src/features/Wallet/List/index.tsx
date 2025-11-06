import React from "react";

import WalletListContent from "@/features/Wallet/List/Content";
import AuthSiginInCard from "@/features/Auth/SignInCard";
import { User } from "@privy-io/node";

//type WalletListProps = ApolloQueryResult<MeQuery>;

type WalletListProps = { user?: User };

export default async function WalletList({ user }: WalletListProps) {
  return !user ? (
    <AuthSiginInCard
      description={
        "To view and manage your wallets you must sign in to your account."
      }
    />
  ) : (
    <WalletListContent user={user} />
  );
}
