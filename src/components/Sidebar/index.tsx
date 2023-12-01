import React from 'react';

import { SidebarHeader } from '@/components/Sidebar/SidebarHeader';
import { SidebarWrapper } from '@/components/Sidebar/SidebarWrapper';

import { SidebarContent } from './SidebarContent';
import { SidebarFooter } from './SidebarFooter';

export { SidebarContent, SidebarFooter, SidebarHeader, SidebarWrapper };

interface SidebarProps {
  isOpen?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function Sidebar({
  isOpen,
  header,
  footer,
  children,
}: React.PropsWithChildren<SidebarProps>) {
  return (
    <SidebarWrapper isOpen={isOpen}>
      {header && <SidebarHeader>{header}</SidebarHeader>}
      {children && <SidebarContent>{children}</SidebarContent>}
      {footer && <SidebarFooter>{footer}</SidebarFooter>}
    </SidebarWrapper>
  );
}
