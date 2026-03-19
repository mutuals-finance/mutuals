"use client";

import type { User } from "@privy-io/node";
import type { PropsWithChildren } from "react";
import { useAccount } from "wagmi";
import AuthSignInCard from "@/features/auth/sign-in-card";
import WalletForm from "@/features/wallet/form";

interface WalletAddProps extends PropsWithChildren {
  user?: User;
}

export default function WalletAdd({
  children: _children,
  user,
}: WalletAddProps) {
  const account = useAccount();
  //const walletMap = walletMapFromViewerQuery(data);
  const address = account.address ?? "";

  return (
    <WalletForm.Drawer
      defaultValues={{ name: "", address }}
      title={"Add Wallet"}
    >
      {user ? (
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
      ) : (
        <AuthSignInCard />
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
