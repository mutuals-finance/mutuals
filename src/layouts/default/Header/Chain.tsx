import React from 'react';
import Popover from '@/components/Popover';
import PopoverItem from '@/components/Popover/PopoverItem';
import { Chain as WagmiChain, useNetwork, useSwitchNetwork } from 'wagmi';
import Image from 'next/image';
import { getLogoByChainId } from '@/lib/utils/chainLogo';
import ChainButton from '@/layouts/default/Header/ChainButton';

interface ChainSelectorItemProps extends WagmiChain {
  isSwitching: boolean;
  onSelectChain: (chainId: number) => void;
}

function ChainSelectorItem({
  id,
  name,
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
          src={getLogoByChainId(id)}
          alt={name}
        />
      } /*

disabled={isSwitching}
*/
      onClick={() => onSelectChain(id)}
    >
      {name}
      {isSwitching && ' (switching)'}
    </PopoverItem>
  );
}
export default function Chain() {
  const { chains, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
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
          src={getLogoByChainId(currentChain?.id || 1)}
          alt={currentChain?.name || 'UNKNOWN'}
        />
      }
    >
      <div className='rounded-default border-default shadow-default w-60 divide-y border bg-white dark:bg-neutral-900'>
        <div className='flex flex-col p-2'>
          {chains.map(
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
