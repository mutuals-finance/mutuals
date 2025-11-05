import React, { PropsWithChildren } from "react";
import AnkrProvider from "@/providers/AnkrProvider";
import { me } from "@mutuals/graphql-client-nextjs/server";
import { ApolloProvider } from "@mutuals/graphql-client-nextjs/providers";

import UIProvider from "@/providers/UIProvider";
import AuthProvider from "@/features/Auth/Provider";
import SignMessageProvider from "@/features/Wallet/SignProvider";
import MutualsProvider from "@/providers/MutualsProvider";
import AnalyticsProvider from "@/providers/AnalyticsProvider";
import PrivyProvider from "@/providers/PrivyProvider";
import WagmiProvider from "@/providers/WagmiProvider";
import QueryClientProvider from "@/providers/QueryProvider";

import "keen-slider/keen-slider.min.css";

export default async function Providers({ children }: PropsWithChildren) {
  const redirectURL = "/";
  const query = await me();

  return (
    <UIProvider>
      <AnalyticsProvider>
        <ApolloProvider>
          <PrivyProvider>
            <QueryClientProvider>
              <WagmiProvider>
                <SignMessageProvider>
                  <AuthProvider redirectTo={redirectURL} query={query}>
                    <AnkrProvider>
                      <MutualsProvider>{children}</MutualsProvider>
                    </AnkrProvider>
                  </AuthProvider>
                </SignMessageProvider>
              </WagmiProvider>
            </QueryClientProvider>
          </PrivyProvider>
        </ApolloProvider>
      </AnalyticsProvider>
    </UIProvider>
  );
}
