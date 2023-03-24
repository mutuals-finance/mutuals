import React from 'react';
import { useToggle } from 'react-use';

import SidebarBody from './SidebarBody';
import SidebarFooter from './SidebarFooter';

export default function Sidebar() {
  const [collapsed, toggle] = useToggle(false);

  return (
    <div
      className={`bg-default top-0 left-0 hidden h-screen flex-shrink-0 flex-col pt-32 duration-200 md:sticky md:flex`}
    >
      <SidebarBody collapsed={collapsed} />
      <SidebarFooter collapsed={collapsed} onToggle={() => toggle()} />
    </div>
  );
}
