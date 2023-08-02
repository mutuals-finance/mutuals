import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Show,
  useColorMode,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
  IoChevronDown,
  IoChevronUp,
  IoHelpOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoMegaphoneOutline,
  IoMoonOutline,
  IoPersonCircle,
  IoSunnyOutline,
} from 'react-icons/io5';
import { useAccount, useDisconnect } from 'wagmi';

import { shortenAddress } from '@/lib/utils';

import UserAvatar from '@/components/UserAvatar';
import WalletModal from '@/components/WalletModal';

export default function User() {
  const { address, isConnected, isConnecting } = useAccount();
  const { disconnect } = useDisconnect();
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [displayName, setDisplayName] = useState<string>('');

  useEffect(() => {
    setDisplayName(isConnected ? shortenAddress(address) : 'Login');
  }, [isConnected, address]);

  const { colorMode, toggleColorMode } = useColorMode();

  function closeWalletModal() {
    setWalletModalOpen(false);
  }

  function openWalletModal() {
    setWalletModalOpen(true);
  }

  const avatarIcon = (size = 'xs') =>
    isConnected ? (
      <UserAvatar address={address} size={size} />
    ) : (
      <IoPersonCircle />
    );
  return (
    <>
      <Menu closeOnSelect={false}>
        {({ isOpen }) => (
          <>
            <Show above='lg'>
              <MenuButton
                as={Button}
                leftIcon={avatarIcon()}
                rightIcon={isOpen ? <IoChevronUp /> : <IoChevronDown />}
                variant={'outline'}
                isLoading={isConnecting}
              >
                {displayName}
              </MenuButton>
            </Show>

            <Show below='lg'>
              <MenuButton
                as={IconButton}
                aria-label={'Show user menu'}
                icon={avatarIcon('sm')}
                borderRadius={'full'}
                variant={'outline'}
                isLoading={isConnecting}
              >
                {displayName}
              </MenuButton>
            </Show>

            <MenuList>
              <MenuItem icon={<IoMegaphoneOutline />}>Feedback</MenuItem>
              <MenuItem icon={<IoHelpOutline />}>Help</MenuItem>
              <MenuDivider />
              <MenuItem
                fontWeight={'600'}
                icon={
                  colorMode === `light` ? <IoMoonOutline /> : <IoSunnyOutline />
                }
                onClick={toggleColorMode}
              >
                {colorMode === `light` ? `Dark Mode` : `Light Mode`}
              </MenuItem>
              <MenuItem
                icon={isConnected ? <IoLogOutOutline /> : <IoLogInOutline />}
                onClick={() => (isConnected ? disconnect() : openWalletModal())}
                fontWeight={'600'}
              >
                {isConnected ? `Logout` : `Login`}
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>

      <WalletModal open={walletModalOpen} onClose={closeWalletModal} />
    </>
  );
}
