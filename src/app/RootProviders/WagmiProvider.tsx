'use client';

import { PropsWithChildren } from 'react';
import {
  cookieStorage,
  createConfig,
  createStorage,
  State,
  WagmiProvider,
} from 'wagmi';
import { chains, transports } from '@/lib/wagmi/chains';
import {
  coinbaseWallet,
  injected,
  metaMask,
  safe,
  walletConnect,
} from '@wagmi/connectors';
import { IS_DEV, WALLETCONNECT_PROJECT_ID } from '@/lib/constants';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '@/lib/wagmi';

interface WagmiProviderProps {
  initialState?: State;
}

export default function SplitFiWagmiProvider({
  children,
  initialState,
}: PropsWithChildren<WagmiProviderProps>) {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
