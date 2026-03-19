import { ApolloProvider } from "@mutuals/graphql-client-nextjs/components";
import type { PropsWithChildren } from "react";
import AuthProvider from "@/features/Auth/Provider";
import SignMessageProvider from "@/features/Wallet/SignProvider";
import AnalyticsProvider from "@/providers/AnalyticsProvider";
import AnkrProvider from "@/providers/AnkrProvider";
import MutualsProvider from "@/providers/MutualsProvider";
import PrivyProvider from "@/providers/PrivyProvider";
import QueryClientProvider from "@/providers/QueryProvider";
import UIProvider from "@/providers/UIProvider";
import WagmiProvider from "@/providers/WagmiProvider";

export type ProvidersProps = PropsWithChildren;

export default function Providers({ children }: ProvidersProps) {
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
