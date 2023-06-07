import Image from 'next/image';
import React from 'react';
import { useNetwork, useSwitchNetwork } from 'wagmi';

import { getAvailableChains, getLogoByChainId } from '@/lib/utils';

import Popover from '@/components/Popover';
import PopoverItem from '@/components/Popover/PopoverItem';

import ChainButton from '@/layouts/root/Header/ChainButton';

import type { Chain } from '#/chain';

interface ChainSelectorItemProps extends Chain {
  isSwitching: boolean;
  onSelectChain: (chainId: number) => void;
}

function ChainSelectorItem({
  id,
  name,
  logo,
  isSwitching,
  onSelectChain,
}: ChainSelectorItemProps) {
  return (
    <PopoverItem
      icon={
        <Image
          className={'h-4 w-4'}
          objectFit='contain'
          height={8}
          src={logo}
          alt={name}
        />
      } /*

disabled={isSwitching}
*/
      onClick={() => onSelectChain(id)}
    >
      {name}
      {isSwitching && ' (...)'}
    </PopoverItem>
  );
}
export default function Chain() {
  const { isLoading, pendingChainId, switchNetwork } = useSwitchNetwork();
  const { chain: currentChain } = useNetwork();

  function onSelectChain(chainId: number) {
    if (switchNetwork) {
      switchNetwork(chainId);
    }
  }

  return (
    <Popover
      button={
        <ChainButton
          src={getLogoByChainId(currentChain?.id)}
          alt={currentChain?.name || 'UNKNOWN'}
        />
      }
    >
      <div className='rounded-default border-default shadow-default w-60 divide-y border bg-white dark:bg-neutral-900'>
        <div className='flex flex-col p-3'>
          <span className={'label mb-1 block pb-1'}>Choose Your Network</span>
          {getAvailableChains().map(
            (chain) =>
              chain.id !== currentChain?.id && (
                <ChainSelectorItem
                  key={chain.id}
                  isSwitching={isLoading && pendingChainId === chain.id}
                  onSelectChain={onSelectChain}
                  {...chain}
                />
              )
          )}
        </div>
      </div>
    </Popover>
  );
}
