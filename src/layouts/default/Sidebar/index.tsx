import React from 'react';
import { useToggle } from 'react-use';

import clsxm from '@/lib/utils/clsxm';

import SidebarBody from './SidebarBody';
import SidebarFooter from './SidebarFooter';

export default function Sidebar() {
  const [collapsed, toggle] = useToggle(false);

  return (
    <div
      className={clsxm(
        `bg-default top-0 left-0 hidden h-screen flex-shrink-0 flex-col pt-32 duration-200 md:sticky md:flex`,
        collapsed ? 'w-[4.5rem]' : 'w-64'
      )}
    >
      <SidebarBody />
      <SidebarFooter collapsed={collapsed} onToggle={() => toggle()} />
    </div>
  );
}
