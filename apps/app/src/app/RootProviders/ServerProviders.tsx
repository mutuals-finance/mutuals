import { PropsWithChildren } from "react";
import { headers } from "next/headers";
import { ApolloProvider } from "@splitfi/sdk/providers";
import { cookieToInitialState } from "wagmi";
import WagmiProvider from "@/app/RootProviders/WagmiProvider";
import { config } from "@/lib/wagmi";

export default function ServerProviders({ children }: PropsWithChildren) {
  //const cookieStore = cookies();
  const wagmiInitialState = cookieToInitialState(
    config,
    headers().get("cookie"),
  );

  return (
    <ApolloProvider>
      <WagmiProvider initialState={wagmiInitialState}>{children}</WagmiProvider>
    </ApolloProvider>
  );
}
