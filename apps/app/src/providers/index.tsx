import React, { PropsWithChildren } from "react";
import AnkrProvider from "@/providers/AnkrProvider";
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

export type ProvidersProps = PropsWithChildren;

export default async function Providers({ children }: ProvidersProps) {
  return (
    <UIProvider>
      <AnalyticsProvider>
        <ApolloProvider>
          <PrivyProvider>
            <QueryClientProvider>
              <WagmiProvider>
                <SignMessageProvider>
                  <AuthProvider>
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
