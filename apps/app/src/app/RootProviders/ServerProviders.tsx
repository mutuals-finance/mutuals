import { PropsWithChildren } from "react";
import { headers } from "next/headers";
import { ApolloProvider } from "@splitfi/sdk/providers";
import { cookieToInitialState } from "wagmi";
import WagmiProvider from "@/app/RootProviders/WagmiProvider";
import { config } from "@/lib/wagmi";
import { UIProvider } from "@splitfi/ui";
import AuthProvider from "@/context/AuthContext/Provider";

export default function ServerProviders({ children }: PropsWithChildren) {
  const cookie = headers().get("cookie") ?? "";
  const wagmiInitialState = cookieToInitialState(config, cookie);

  return (
    <UIProvider>
      <ApolloProvider>
        <WagmiProvider initialState={wagmiInitialState}>
          <AuthProvider>{children}</AuthProvider>
        </WagmiProvider>
      </ApolloProvider>
    </UIProvider>
  );
}
