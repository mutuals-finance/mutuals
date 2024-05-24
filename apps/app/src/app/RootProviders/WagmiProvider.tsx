"use client";

import { PropsWithChildren } from "react";
import { State, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/lib/wagmi";

interface WagmiProviderProps {
  initialState?: State;
}

export default function SplitFiWagmiProvider({
  children,
  initialState,
}: PropsWithChildren<WagmiProviderProps>) {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider
      config={config}
      reconnectOnMount={true}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
