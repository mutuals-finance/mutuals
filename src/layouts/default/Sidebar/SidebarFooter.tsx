import React from 'react';
import { IoChevronBack, IoChevronForward, IoSettings } from 'react-icons/io5';

import { ButtonOutline } from '@/components/Button';

import SidebarLink from '@/layouts/default/Sidebar/SidebarLink';

interface AppSidebarFooterProps {
  onToggle: () => void;
  collapsed: boolean;
}

export default function SidebarFooter({
  onToggle,
  collapsed,
}: AppSidebarFooterProps) {
  return (
    <div className={'flex flex-shrink-0 flex-col space-y-2 p-2 lg:pb-6'}>
      <div className={'ml-auto translate-x-7'}>
        <ButtonOutline
          icon={collapsed ? <IoChevronForward /> : <IoChevronBack />}
          onClick={onToggle}
        />
      </div>

      <SidebarLink dense={collapsed} href={'/settings'} icon={<IoSettings />}>
        Settings
      </SidebarLink>
    </div>
  );
}
