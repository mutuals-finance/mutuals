import Popover from "@/components/Popover";
import React, { useState } from "react";
import WalletModal from "@/components/WalletModal";
import Davatar from "@davatar/react";
import {
  IoHelpOutline,
  IoMoonOutline,
  IoPersonSharp,
  IoSettingsOutline,
  IoSunnyOutline,
  IoWalletOutline,
} from "react-icons/io5";
import { useTheme } from "next-themes";
import { useAccount } from "wagmi";

interface UserAvatarProps {
  isConnected: boolean;
  address?: string;
}

function UserAvatar({ isConnected, address }: UserAvatarProps) {
  const generatedAvatarType = `jazzicon`;

  return (
    <div className="flex items-center justify-center rounded-full">
      {isConnected && !address ? (
        <Davatar
          size={30}
          address={address || ``}
          generatedAvatarType={generatedAvatarType}
        />
      ) : (
        <IoPersonSharp className={`w-4 h-4`} />
      )}
    </div>
  );
}

interface UserPopoverItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  highlight?: boolean;
  onClick?: (...args: any[]) => void;
}

function UserPopoverItem({
  icon,
  children,
  highlight,
  onClick,
}: UserPopoverItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-start space-x-2 px-6 py-2 w-full text-left text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-color ease-out-expo duration-200 ${
        highlight && `font-bold`
      }`}
    >
      {icon}
      <span className={`block`}>{children}</span>
    </button>
  );
}

export default function UserPopover() {
  const { address, isConnected } = useAccount();

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
        button={
          <div className={`flex items-center space-x-2 text-neutral-600`}>
            <UserAvatar isConnected={isConnected} address={address} />
            <span className={"block text-default font-semibold"}>
              User Name
            </span>
          </div>
        }
      >
        <div className="w-screen max-w-xs bg-neutral-50 dark:bg-neutral-900 rounded-xl shadow divide-y">
          <div className="flex flex-col py-2">
            <UserPopoverItem
              icon={<IoWalletOutline />}
              highlight={true}
              onClick={openWalletModal}
            >
              {isConnected ? `Disconnect Wallet` : `Connect Wallet`}
            </UserPopoverItem>
            <UserPopoverItem icon={<IoSettingsOutline />}>
              Settings
            </UserPopoverItem>
          </div>
          <div className="flex flex-col py-2">
            <UserPopoverItem icon={<IoHelpOutline />}>Help</UserPopoverItem>
            <UserPopoverItem
              onClick={toggleTheme}
              icon={theme === `light` ? <IoMoonOutline /> : <IoSunnyOutline />}
            >
              {theme === `light` ? `Dark Mode` : `Light Mode`}
            </UserPopoverItem>
          </div>
        </div>
      </Popover>

      <WalletModal open={walletModalOpen} onClose={closeWalletModal} />
    </>
  );
}
