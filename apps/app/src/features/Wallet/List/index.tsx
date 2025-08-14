import { Box, Container, Heading } from "@mutuals/ui";
import React from "react";

import WalletListContent from "@/features/Wallet/List/Content";
import {
  ApolloQueryResult,
  ViewerWalletsQuery,
} from "@mutuals/graphql-client-nextjs";
import AuthSiginInCard from "@/features/Auth/SignInCard";

type WalletListProps = ApolloQueryResult<ViewerWalletsQuery>;

export default function WalletList({ data }: WalletListProps) {
  return (
    <Box my={"12"}>
      <Container maxW={"7xl"}>
        <Heading as={"h2"} textStyle={"3xl"} mb={"4"}>
          Wallets
        </Heading>
        {data?.viewer ? (
          <WalletListContent />
        ) : (
          <AuthSiginInCard
            description={
              "To view and manage your wallets you must sign in to your account."
            }
          />
        )}
      </Container>
    </Box>
  );
}
