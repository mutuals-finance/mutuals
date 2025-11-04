"use client";

import React, { PropsWithChildren } from "react";
import { PARA_API_KEY, WALLETCONNECT_PROJECT_ID } from "@/constants";
import { ParaProvider } from "@getpara/react-sdk";
import { config as wagmiConfig } from "@/lib/wagmi";
import "@getpara/react-sdk/styles.css";
import { cookieStorage, createStorage } from "wagmi";

export default function MutualsParaProvider({ children }: PropsWithChildren) {
  return (
    <ParaProvider
      paraClientConfig={{
        apiKey: PARA_API_KEY,
      }}
      config={{
        appName: "Mutuals",
      }}
      externalWalletConfig={{
        includeWalletVerification: true,
        wallets: [
          "METAMASK",
          "WALLETCONNECT",
          "COINBASE",
          "PHANTOM",
          "OKX",
          "HAHA",
          "BACKPACK",
          "RAINBOW",
        ],
        createLinkedEmbeddedForExternalWallets: "ALL",
        connectionOnly: false,
        evmConnector: {
          config: {
            chains: wagmiConfig.chains,
            ssr: true, // Enable SSR support
            storage: createStorage({
              storage: cookieStorage,
            }),
          },
          // wagmiProviderProps={}
        },
        walletConnect: {
          projectId: WALLETCONNECT_PROJECT_ID,
        },
      }}
      /*paraModalConfig={{
        logo: YOUR_LOGO,
      }}*/
    >
      {children}
    </ParaProvider>
  );
}
