import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
} from '@chakra-ui/react';
import { useTheme } from 'next-themes';
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
import { useAccount } from 'wagmi';

import { shortenAddress } from '@/lib/utils';

import UserAvatar from '@/components/UserAvatar';
import WalletModal from '@/components/WalletModal';

export default function User() {
  const { address, isConnected, isConnecting } = useAccount();

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

  return (
    <>
      <Menu closeOnSelect={false}>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              leftIcon={
                isConnected ? (
                  <UserAvatar address={address} />
                ) : (
                  <IoPersonCircle />
                )
              }
              rightIcon={isOpen ? <IoChevronUp /> : <IoChevronDown />}
              variant={'outline'}
              isLoading={isConnecting}
            >
              {displayName}
            </MenuButton>
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
                onClick={openWalletModal}
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
