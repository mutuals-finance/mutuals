import React from 'react';
import { useToggle } from 'react-use';

import clsxm from '@/lib/utils/clsxm';

import SidebarBody from './SidebarBody';
import SidebarFooter from './SidebarFooter';

function SidebarHeader() {
  return <div />;
}

export default function Sidebar() {
  const [collapsed, toggle] = useToggle(false);

  return (
    <div
      className={clsxm(
        `bg-default relative left-0 top-0 z-10 hidden h-screen flex-shrink-0 flex-col duration-200 md:sticky md:flex`,
        collapsed ? 'w-[4.5rem]' : 'w-64'
      )}
    >
      <SidebarHeader />
      <SidebarBody />
      <SidebarFooter collapsed={collapsed} onToggle={() => toggle()} />
    </div>
  );
}
