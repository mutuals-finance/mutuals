import React, { useEffect, useState } from 'react';
import { IoChevronDown, IoPersonCircle } from 'react-icons/io5';
import { ButtonOutline } from '@/components/Button';
import { shortenAddress } from '@/lib/utils';
import UserAvatar from '@/components/UserAvatar';

type AppHeaderUserButtonProps = {
  isConnected: boolean;
  isConnecting: boolean;
  address?: `0x${string}`;
};

export default function UserButton({
  isConnected,
  isConnecting,
  address = '0x',
}: AppHeaderUserButtonProps) {
  const [displayName, setDisplayName] = useState<string>('');

  useEffect(() => {
    setDisplayName(isConnected ? shortenAddress(address) : 'Login');
  }, [address]);

  return (
    <ButtonOutline
      icon={
        <span className='flex h-6 w-6 items-center justify-center rounded-full'>
          {isConnected ? (
            <UserAvatar address={address} />
          ) : (
            <IoPersonCircle className={`flex flex-1`} />
          )}
        </span>
      }
      iconAfter={
        <IoChevronDown className='ease-out-expo duration-100 ui-open:rotate-180 ui-open:transform' />
      }
    >
      {isConnecting ? 'Connecting...' : displayName}
    </ButtonOutline>
  );
}
