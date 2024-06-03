import React, { PropsWithChildren } from "react";
import AnkrProvider from "@/app/RootProviders/AnkrProvider";
import "keen-slider/keen-slider.min.css";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/lib/wagmi";
import { UIProvider } from "@splitfi/ui";
import { ApolloProvider } from "@splitfi/sdk/providers";
import WagmiProvider from "@/app/RootProviders/WagmiProvider";
import AuthProvider from "@/context/AuthContext/Provider";
import SignMessageProvider from "@/context/SignMessageContext";

export default function RootProviders({ children }: PropsWithChildren) {
  const cookie = headers().get("cookie") ?? "";
  const wagmiInitialState = cookieToInitialState(config, cookie);

  return (
    <UIProvider>
      <ApolloProvider>
        <WagmiProvider initialState={wagmiInitialState}>
          <SignMessageProvider>
            <AuthProvider>
              <AnkrProvider>{children}</AnkrProvider>
            </AuthProvider>
          </SignMessageProvider>
        </WagmiProvider>
      </ApolloProvider>
    </UIProvider>
  );
}
