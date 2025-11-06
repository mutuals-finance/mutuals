"use client";

import { PropsWithChildren } from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { PRIVY_APP_ID } from "@/constants";

export default function MutualsPrivyProvider({ children }: PropsWithChildren) {
  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        appearance: {
          walletList: [
            "detected_wallets",
            "metamask",
            "coinbase_wallet",
            "rainbow",
            "wallet_connect",
          ],
        },
        embeddedWallets: {
          showWalletUIs: false,
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
