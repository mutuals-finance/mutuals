import React from 'react';
import {
  IoAnalytics,
  IoGitNetwork,
  IoGrid,
  IoPeople,
  IoSwapHorizontal,
  IoWallet,
} from 'react-icons/io5';

import SidebarLink from '@/layouts/default/Sidebar/SidebarLink';
import SidebarSplitMenu from '@/layouts/default/Sidebar/SidebarSplitMenu';

function AppSidebarBodyNav() {
  return (
    <ul className={'flex flex-col space-y-3 p-3'}>
      <li>
        <SidebarLink href={'/splits'} icon={<IoGrid />}>
          Splits
        </SidebarLink>
        <SidebarSplitMenu />
      </li>
      <li>
        <SidebarLink href={'/address-book'} icon={<IoPeople />}>
          Address-book
        </SidebarLink>
      </li>
    </ul>
  );
}

export default function SidebarBody() {
  return (
    <div className={`flex-1 overflow-y-auto`}>
      <AppSidebarBodyNav />
    </div>
  );
}
