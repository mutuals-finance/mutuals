import Popover from '@/components/Popover';
import React, { useState } from 'react';
import WalletModal from '@/components/WalletModal';
import {
  IoHelpOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoMegaphoneOutline,
  IoMoonOutline,
  IoSunnyOutline,
} from 'react-icons/io5';
import { useTheme } from 'next-themes';
import { useAccount } from 'wagmi';
import PopoverItem from '@/components/Popover/PopoverItem';
import UserButton from '@/layouts/default/Header/UserButton';

export default function User() {
  const { address, isConnected, isConnecting } = useAccount();

  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === `light` ? `dark` : `light`);
  }

  function closeWalletModal() {
    setWalletModalOpen(false);
  }

  function openWalletModal() {
    setWalletModalOpen(true);
  }

  return (
    <>
      <Popover
        button={<UserButton {...{ isConnecting, isConnected, address }} />}
      >
        <div className='bg-default rounded-default shadow-default w-screen max-w-xs divide-y'>
          <div className='flex flex-col p-2'>
            <PopoverItem icon={<IoMegaphoneOutline />}>Feedback</PopoverItem>
            <PopoverItem icon={<IoHelpOutline />}>Help</PopoverItem>
          </div>
          <div className='flex flex-col p-2'>
            <PopoverItem
              onClick={toggleTheme}
              highlight={true}
              icon={theme === `light` ? <IoMoonOutline /> : <IoSunnyOutline />}
            >
              {theme === `light` ? `Dark Mode` : `Light Mode`}
            </PopoverItem>
            <PopoverItem
              icon={isConnected ? <IoLogOutOutline /> : <IoLogInOutline />}
              highlight={true}
              onClick={openWalletModal}
            >
              {isConnected ? `Logout` : `Login`}
            </PopoverItem>
          </div>
        </div>
      </Popover>

      <WalletModal open={walletModalOpen} onClose={closeWalletModal} />
    </>
  );
}
