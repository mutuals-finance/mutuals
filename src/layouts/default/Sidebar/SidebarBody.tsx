import React from 'react';
import { IoAnalytics, IoGitNetwork } from 'react-icons/io5';
import SidebarLink from '@/layouts/default/Sidebar/SidebarLink';

interface AppSidebarBodyNavProps {
  collapsed: boolean;
}
function AppSidebarBodyNav({ collapsed }: AppSidebarBodyNavProps) {
  return (
    <ul className={'flex flex-col space-y-3 p-3'}>
      <li>
        <SidebarLink dense={collapsed} href={'/splits'} icon={<IoGitNetwork />}>
          Splits
        </SidebarLink>
      </li>
      <li>
        <SidebarLink
          dense={collapsed}
          href={'/settings'}
          icon={<IoAnalytics />}
        >
          Activity
        </SidebarLink>
      </li>
    </ul>
  );
}

export default function SidebarBody(props: AppSidebarBodyNavProps) {
  return (
    <div className={`flex-1 overflow-y-auto`}>
      <AppSidebarBodyNav {...props} />
    </div>
  );
}
