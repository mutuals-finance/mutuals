import Image from 'next/image';
import React from 'react';
import {
  IoArrowRedo,
  IoArrowUndo,
  IoSwapHorizontal,
  IoWallet,
} from 'react-icons/io5';

import SidebarLink from '@/layouts/default/Sidebar/SidebarLink';

interface SidebarSplitMenuProps {
  collapsed?: boolean;
}

function MenuLink({
  children,
  icon,
}: React.PropsWithChildren<{ icon: React.ReactNode }>) {
  return (
    <li>
      <SidebarLink href={'/splits/1234'} icon={icon} size={'sm'}>
        {children}
      </SidebarLink>
    </li>
  );
}
export default function SidebarSplitMenu({ collapsed }: SidebarSplitMenuProps) {
  return (
    <div className={'pt-3 pl-3'}>
      <div
        className={
          'bg-default-1 rounded-default flex w-full flex-col space-y-3 p-3'
        }
      >
        <div className={'flex items-center space-x-3'}>
          <Image
            src={
              'https://cloudflare-ipfs.com/ipfs/bafkreigqqcndcju2dgbagrwq5ste3f4tfw2427kttacbhjz6zokzm4k2fe'
            }
            width={128}
            height={128}
            alt={'Image plc'}
            className={
              'border-default rounded-default h-10 w-10 overflow-hidden border object-cover'
            }
          />
          <h4 className={'title-4'}>Secchi</h4>
        </div>
        <ul className={'flex flex-col space-y-1.5'}>
          <MenuLink icon={<IoArrowRedo />}>Withdraw</MenuLink>
          <MenuLink icon={<IoArrowUndo />}>Deposit</MenuLink>
          <MenuLink icon={<IoWallet />}>Assets</MenuLink>
          <MenuLink icon={<IoSwapHorizontal />}>Activity</MenuLink>
        </ul>
      </div>
    </div>
  );
}
