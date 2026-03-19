"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { type State, WagmiProvider } from "wagmi";
import { config } from "@/lib/wagmi";

interface WagmiProviderProps {
  initialState?: State;
}

const queryClient = new QueryClient();

export default function MutualsWagmiProvider({
  children,
  initialState: _initialState,
}: PropsWithChildren<WagmiProviderProps>) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>{children}</WagmiProvider>
    </QueryClientProvider>
  );
}
