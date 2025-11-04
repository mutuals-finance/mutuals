import React, { PropsWithChildren } from "react";
import AnkrProvider from "@/providers/AnkrProvider";
import { me } from "@mutuals/graphql-client-nextjs/server";
import { ApolloProvider } from "@mutuals/graphql-client-nextjs/providers";

import UIProvider from "@/providers/UIProvider";
import AuthProvider from "@/features/Auth/Provider";
import SignMessageProvider from "@/features/Wallet/SignProvider";
import MutualsProvider from "@/providers/MutualsProvider";
import AnalyticsProvider from "@/providers/AnalyticsProvider";
import ParaProvider from "@/providers/ParaProvider";
import QueryProvider from "@/providers/QueryProvider";
import AuthStateProvider from "@/features/Auth/StateProvider";

import "keen-slider/keen-slider.min.css";

export default async function Providers({ children }: PropsWithChildren) {
  const redirectURL = "/";
  const query = await me();

  return (
    <UIProvider>
      <AnalyticsProvider>
        <ApolloProvider>
          <QueryProvider>
            <ParaProvider>
              <AuthStateProvider>
                <SignMessageProvider>
                  <AuthProvider redirectTo={redirectURL} query={query}>
                    <AnkrProvider>
                      <MutualsProvider>{children}</MutualsProvider>
                    </AnkrProvider>
                  </AuthProvider>
                </SignMessageProvider>
              </AuthStateProvider>
            </ParaProvider>
          </QueryProvider>
        </ApolloProvider>
      </AnalyticsProvider>
    </UIProvider>
  );
}
