"use client";

import React, { PropsWithChildren } from "react";
import { useAccount } from "wagmi";
import WalletForm from "@/features/Wallet/Form";
import {
  ApolloQueryResult,
  ViewerWalletsQuery,
} from "@mutuals/graphql-client-nextjs";
import { walletMapFromViewerQuery } from "@/utils";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@mutuals/ui";

interface WalletAddProps
  extends PropsWithChildren,
    ApolloQueryResult<ViewerWalletsQuery> {}

export default function WalletAdd({ children, data }: WalletAddProps) {
  const account = useAccount();
  const walletMap = walletMapFromViewerQuery(data);
  const address = account.address ?? "";

  return (
    <WalletForm.Drawer
      title={"Add Wallet"}
      defaultValues={{ name: "", address }}
    >
      {!walletMap[address] ? (
        <WalletForm.Content>
          <Alert status={"info"} fontSize={"xs"}>
            External wallets and multisigs you add here will be included in your
            dashboard and count towards your total earnings. You&apos;ll also
            receive notifications for all these wallets, which you can turn off
            in your settings.
          </Alert>
          {children}
        </WalletForm.Content>
      ) : (
        <Alert
          status="info"
          variant="subtle"
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          size={"lg"}
        >
          <AlertIcon boxSize={"6"} />
          <AlertTitle fontWeight={"600"} mt={3} mb={1}>
            Account already in use
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Your selected account is already linked with your profile. Please
            switch the account inside your wallet app or select another wallet
            provider and try again.
          </AlertDescription>
        </Alert>
      )}
    </WalletForm.Drawer>
  );
}
