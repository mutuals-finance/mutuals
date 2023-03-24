import Image from 'next/image';
import React from 'react';
import { useSwitchNetwork } from 'wagmi';

import { getLogoByChainId } from '@/lib/utils/chainLogo';

import Tabs from '@/components/Tabs';

export function ConnectWalletTabs() {
  const { chains } = useSwitchNetwork();

  return (
    <Tabs>
      <Tabs.Titles>
        {chains.map((chain) => (
          <Tabs.Title key={chain.id} className={'flex items-center space-x-3'}>
            <Image
              className={'h-4 w-4'}
              objectFit='contain'
              height={4}
              src={getLogoByChainId(chain.id)}
              alt={chain.name}
            />
            <span className={'block text-lg font-semibold'}>{chain.name}</span>
          </Tabs.Title>
        ))}
      </Tabs.Titles>
      <Tabs.Panels>
        {chains.map((chain) => {
          return <Tabs.Panel key={chain.id}>{chain.name}</Tabs.Panel>;
        })}
      </Tabs.Panels>
    </Tabs>
  );
}
