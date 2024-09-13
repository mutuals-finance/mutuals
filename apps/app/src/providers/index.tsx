import React, { PropsWithChildren } from "react";
import AnkrProvider from "@/providers/AnkrProvider";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/lib/wagmi";
import { UIProvider } from "@mutuals/ui";
import { ApolloProvider } from "@mutuals/graphql-client-nextjs/providers";
import WagmiProvider from "@/providers/WagmiProvider";
import AuthProvider from "@/features/Auth/Provider";
import SignMessageProvider from "@/features/Wallet/SignProvider";
import { getViewer } from "@mutuals/graphql-client-nextjs/server";
import MutualsProvider from "@/providers/MutualsProvider";

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
              <AnkrProvider>
                <MutualsProvider>{children}</MutualsProvider>
              </AnkrProvider>
            </AuthProvider>
          </SignMessageProvider>
        </WagmiProvider>
      </ApolloProvider>
    </UIProvider>
  );
}
