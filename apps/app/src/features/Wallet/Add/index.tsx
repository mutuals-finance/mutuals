"use client";

import React, { PropsWithChildren } from "react";
import { useAccount } from "wagmi";
import WalletForm from "@/features/Wallet/Form";
import AuthSignInCard from "@/features/Auth/SignInCard";
import { User } from "@privy-io/node";

interface WalletAddProps extends PropsWithChildren {
  user?: User;
}

export default function WalletAdd({ children, user }: WalletAddProps) {
  const account = useAccount();
  //const walletMap = walletMapFromViewerQuery(data);
  const address = account.address ?? "";

  return (
    <WalletForm.Drawer
      title={"Add Wallet"}
      defaultValues={{ name: "", address }}
    >
      {!user ? (
        <AuthSignInCard />
      ) : (
        <WalletForm.Content>
          {/*
          <Alert status={"info"} fontSize={"xs"}>
            External wallets and multisigs you add here will be included in your
            dashboard and count towards your total earnings. You&apos;ll also
            receive notifications for all these wallets, which you can turn off
            in your settings.
          </Alert>
*/}
        </WalletForm.Content>
      )}
      {/* {!walletMap[address] ? (
        ) : (
        <Alert status="info" size={"lg"} title={"Account already in use"}>
          Your selected account is already linked with your profile. Please
          switch the account inside your wallet app or select another wallet
          provider and try again.
        </Alert>
      )}*/}
    </WalletForm.Drawer>
  );
}
