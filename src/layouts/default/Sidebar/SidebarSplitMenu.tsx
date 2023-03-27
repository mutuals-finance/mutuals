import React from 'react';
import {
  IoArrowRedo,
  IoArrowUndo,
  IoSwapHorizontal,
  IoWallet,
} from 'react-icons/io5';

import { SplitImage } from '@/components/SplitImage';

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
export default function SidebarSplitMenu({}: SidebarSplitMenuProps) {
  return (
    <div className={'pt-3'}>
      <div
        className={
          'border-default rounded-default flex w-full flex-col space-y-3 border p-3'
        }
      >
        <div className={'flex items-center space-x-1.5'}>
          <SplitImage
            className={'w-8'}
            src={
              'ipfs://bafkreigqqcndcju2dgbagrwq5ste3f4tfw2427kttacbhjz6zokzm4k2fe'
            }
            alt={'Example'}
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
