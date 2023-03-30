import React from 'react';
import { IoGrid, IoPeople } from 'react-icons/io5';

import SidebarLink from '@/layouts/default/Sidebar/SidebarLink';

function AppSidebarBodyNav() {
  return (
    <ul className={'flex flex-col space-y-3 p-3'}>
      <li>
        <SidebarLink href={'/splits'} icon={<IoGrid />}>
          Splits
        </SidebarLink>
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
    <div className={`mt-32 flex-1 overflow-y-auto`}>
      <AppSidebarBodyNav />
    </div>
  );
}
