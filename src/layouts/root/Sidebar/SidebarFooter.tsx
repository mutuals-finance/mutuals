import React from 'react';
import {
  IoChevronBack,
  IoChevronForward,
  IoHelp,
  IoSettings,
} from 'react-icons/io5';

import { ButtonOutline } from '@/components/Button';

import SidebarLink from '@/layouts/root/Sidebar/SidebarLink';

interface AppSidebarFooterProps {
  onToggle: () => void;
  collapsed: boolean;
}

export default function SidebarFooter({
  onToggle,
  collapsed,
}: AppSidebarFooterProps) {
  return (
    <div className={'flex flex-shrink-0 flex-col space-y-3 p-3 lg:pb-6'}>
      <div className={'ml-auto translate-x-7'}>
        <ButtonOutline
          icon={collapsed ? <IoChevronForward /> : <IoChevronBack />}
          onClick={onToggle}
        />
      </div>

      <SidebarLink href={'/settings'} icon={<IoSettings />}>
        Settings
      </SidebarLink>
    </div>
  );
}
