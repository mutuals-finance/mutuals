import React, { PropsWithChildren } from "react";
import AnkrProvider from "@/providers/AnkrProvider";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/lib/wagmi";
import { UIProvider } from "@splitfi/ui";
import { ApolloProvider } from "@splitfi/sdk/providers";
import WagmiProvider from "@/providers/WagmiProvider";
import AuthProvider from "@/features/Auth/Provider";
import SignMessageProvider from "@/features/Wallet/SignProvider";
import { getViewer } from "@splitfi/sdk/server";

export default async function Providers({ children }: PropsWithChildren) {
  const redirectURL = "/";
  const { data } = await getViewer();

  const cookie = headers().get("cookie") ?? "";
  const wagmiInitialState = cookieToInitialState(config, cookie);

  return (
    <UIProvider>
      <ApolloProvider>
        <WagmiProvider initialState={wagmiInitialState}>
          <SignMessageProvider>
            <AuthProvider redirectTo={redirectURL} query={data}>
              <AnkrProvider>{children}</AnkrProvider>
            </AuthProvider>
          </SignMessageProvider>
        </WagmiProvider>
      </ApolloProvider>
    </UIProvider>
  );
}
