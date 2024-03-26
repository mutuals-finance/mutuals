import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spinner,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi';

import { getAvailableChains, getLogoByChainId } from '@/lib/utils';

export default function Chain() {
  const { isConnected } = useAccount();
  const { isLoading, switchNetwork, pendingChainId } = useSwitchNetwork();
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
          {isConnected && (
            <MenuButton
              as={Button}
              display={{ base: 'none', lg: 'flex' }}
              leftIcon={
                <Box w='4' h={'4'} position={'relative'}>
                  <NextImage
                    src={getLogoByChainId(currentChain?.id)}
                    alt={currentChain?.name || 'UNKNOWN'}
                    fill={true}
                  />
                </Box>
              }
              rightIcon={isOpen ? <IoChevronUp /> : <IoChevronDown />}
              variant={'ghost'}
              isLoading={isLoading}
            >
              {currentChain?.name || 'Unknown'}
            </MenuButton>
          )}

          <MenuList>
            <MenuGroup title='Choose Your Network'>
              {getAvailableChains().map(
                (chain) =>
                  chain.id !== currentChain?.id && (
                    <MenuItem
                      onClick={() => onSelectChain(chain.id)}
                      key={chain.id}
                    >
                      <Box w='3' h='3' position={'relative'} mr={'1'}>
                        <NextImage
                          src={chain.logo}
                          alt={chain.name}
                          fill={true}
                        />
                      </Box>

                      {chain.name}
                      {isLoading && pendingChainId === chain.id && (
                        <Spinner size='xs' ml={'1'} />
                      )}
                    </MenuItem>
                  ),
              )}
            </MenuGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
}
