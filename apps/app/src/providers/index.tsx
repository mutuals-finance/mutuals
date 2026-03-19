import { ApolloProvider } from "@mutuals/graphql-client-nextjs/components";
import type { PropsWithChildren } from "react";
import AuthProvider from "@/features/auth/provider";
import SignMessageProvider from "@/features/wallet/sign-provider";
import AnalyticsProvider from "@/providers/analytics-provider";
import AnkrProvider from "@/providers/ankr-provider";
import MutualsProvider from "@/providers/mutuals-provider";
import PrivyProvider from "@/providers/privy-provider";
import QueryClientProvider from "@/providers/query-provider";
import UIProvider from "@/providers/ui-provider";
import WagmiProvider from "@/providers/wagmi-provider";

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
