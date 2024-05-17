import { PropsWithChildren } from "react";
import ApolloProvider from "./ApolloProvider";
import { cookies, headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import WagmiProvider from "@/app/RootProviders/WagmiProvider";
import { config } from "@/lib/wagmi";

export default function ServerProviders({ children }: PropsWithChildren) {
  const cookieStore = cookies();
  const delay = Number(
    cookieStore.get("apollo-x-custom-delay")?.value ?? 10000,
  );
  const wagmiInitialState = cookieToInitialState(
    config,
    headers().get("cookie"),
  );

  return (
    <ApolloProvider delay={delay}>
      <WagmiProvider initialState={wagmiInitialState}>{children}</WagmiProvider>
    </ApolloProvider>
  );
}
