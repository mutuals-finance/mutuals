import React, { PropsWithChildren } from "react";
import AnkrProvider from "@/providers/AnkrProvider";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/lib/wagmi";
import { ApolloProvider } from "@mutuals/graphql-client-nextjs/providers";
import UIProvider from "@/providers/UIProvider";
import WagmiProvider from "@/providers/WagmiProvider";
import AuthProvider from "@/features/Auth/Provider";
import SignMessageProvider from "@/features/Wallet/SignProvider";
import { me } from "@mutuals/graphql-client-nextjs/server";
import MutualsProvider from "@/providers/MutualsProvider";

import "keen-slider/keen-slider.min.css";
import AnalyticsProvider from "@/providers/AnalyticsProvider";

export default async function Providers({ children }: PropsWithChildren) {
  const redirectURL = "/";
  const query = await me();

  const cookie = await headers().then((h) => h.get("cookie") ?? "");
  const wagmiInitialState = cookieToInitialState(config, cookie);

  return (
    <UIProvider>
      <AnalyticsProvider>
        <ApolloProvider>
          <WagmiProvider initialState={wagmiInitialState}>
            <SignMessageProvider>
              <AuthProvider redirectTo={redirectURL} query={query}>
                <AnkrProvider>
                  <MutualsProvider>{children}</MutualsProvider>
                </AnkrProvider>
              </AuthProvider>
            </SignMessageProvider>
          </WagmiProvider>
        </ApolloProvider>
      </AnalyticsProvider>
    </UIProvider>
  );
}
