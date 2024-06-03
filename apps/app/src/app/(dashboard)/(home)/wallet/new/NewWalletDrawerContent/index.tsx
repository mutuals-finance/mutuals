"use client";

import React, { PropsWithChildren } from "react";
import { useAccount } from "wagmi";
import WalletDrawer from "@/app/(dashboard)/(home)/wallet/WalletDrawer";
import { ApolloQueryResult, ViewerWalletsQuery } from "@splitfi/sdk";
import { walletMapFromViewerQuery } from "@/utils";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@splitfi/ui";

interface NewWalletDrawerContentProps
  extends PropsWithChildren,
    ApolloQueryResult<ViewerWalletsQuery> {}
export default function NewWalletDrawerContent({
  children,
  data,
}: NewWalletDrawerContentProps) {
  const account = useAccount();
  const walletMap = walletMapFromViewerQuery(data);
  const address = account.address ?? "";

  return (
    <WalletDrawer.Drawer
      title={"Add Wallet"}
      defaultValues={{ name: "", address }}
    >
      {!walletMap[address] ? (
        <WalletDrawer.Form>{children}</WalletDrawer.Form>
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
    </WalletDrawer.Drawer>
  );
}
