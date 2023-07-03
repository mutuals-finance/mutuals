import { Image } from '@chakra-ui/next-js';
import {
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spinner,
} from '@chakra-ui/react';
import React from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { useNetwork, useSwitchNetwork } from 'wagmi';

import { getAvailableChains, getLogoByChainId } from '@/lib/utils';

export default function Chain() {
  const { isLoading, pendingChainId, switchNetwork } = useSwitchNetwork();
  const { chain: currentChain } = useNetwork();

  function onSelectChain(chainId: number) {
    if (switchNetwork) {
      switchNetwork(chainId);
    }
  }

  return (
    <Menu closeOnSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            leftIcon={
              <Image
                boxSize='4'
                src={getLogoByChainId(currentChain?.id)}
                alt={currentChain?.name || 'UNKNOWN'}
              />
            }
            rightIcon={isOpen ? <IoChevronUp /> : <IoChevronDown />}
            variant={'ghost'}
            isLoading={isLoading}
          >
            {currentChain?.name || 'Unknown'}{' '}
          </MenuButton>
          <MenuList>
            <MenuGroup title='Choose Your Network'>
              {getAvailableChains().map(
                (chain) =>
                  chain.id !== currentChain?.id && (
                    <MenuItem
                      onClick={() => onSelectChain(chain.id)}
                      key={chain.id}
                    >
                      <Image
                        boxSize='4'
                        src={chain.logo}
                        alt={chain.name}
                        mr={'1'}
                      />
                      {chain.name}
                      {isLoading && pendingChainId === chain.id && (
                        <Spinner size='xs' ml={'1'} />
                      )}
                    </MenuItem>
                  )
              )}
            </MenuGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
}
