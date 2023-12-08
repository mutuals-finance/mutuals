'use client';

import { PropsWithChildren } from 'react';
import { WagmiConfig } from 'wagmi';

import { useWagmi } from '@/lib/wagmi';

export default function WagmiProvider({ children }: PropsWithChildren) {
  const wagmiConfig = useWagmi();

  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
