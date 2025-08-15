import React from "react";

import WalletListContent from "@/features/Wallet/List/Content";
import {
  ApolloQueryResult,
  ViewerWalletsQuery,
} from "@mutuals/graphql-client-nextjs";
import AuthSiginInCard from "@/features/Auth/SignInCard";

type WalletListProps = ApolloQueryResult<ViewerWalletsQuery>;

export default function WalletList({ data }: WalletListProps) {
  return data?.viewer ? (
    <WalletListContent />
  ) : (
    <AuthSiginInCard
      description={
        "To view and manage your wallets you must sign in to your account."
      }
    />
  );
}
