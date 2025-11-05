"use client";

import { PropsWithChildren } from "react";
import { State, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/lib/wagmi";

interface WagmiProviderProps {
  initialState?: State;
}

const queryClient = new QueryClient();

export default function MutualsWagmiProvider({
  children,
  initialState,
}: PropsWithChildren<WagmiProviderProps>) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>{children}</WagmiProvider>
    </QueryClientProvider>
  );
}
