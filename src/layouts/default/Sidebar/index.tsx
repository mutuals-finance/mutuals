import React from 'react';
import { IoMenu } from 'react-icons/all';
import { useToggle } from 'react-use';

import clsxm from '@/lib/utils/clsxm';

import { ButtonOutline } from '@/components/Button';

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
        `bg-default relative top-0 left-0 z-10 hidden h-screen flex-shrink-0 flex-col duration-200 md:sticky md:flex`,
        collapsed ? 'w-[4.5rem]' : 'w-64'
      )}
    >
      <SidebarHeader />
      <SidebarBody />
      <SidebarFooter collapsed={collapsed} onToggle={() => toggle()} />
    </div>
  );
}
