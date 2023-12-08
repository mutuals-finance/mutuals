import React from 'react';

import { SidebarHeader } from '@/components/Sidebar/SidebarHeader';
import {
  SidebarWrapper,
  SidebarWrapperProps,
} from '@/components/Sidebar/SidebarWrapper';

import { SidebarContent } from './SidebarContent';
import { SidebarFooter } from './SidebarFooter';
import { BoxProps } from '@chakra-ui/react';

export { SidebarContent, SidebarFooter, SidebarHeader, SidebarWrapper };

interface SidebarProps extends SidebarWrapperProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function Sidebar({
  isOpen,
  header,
  footer,
  children,
  ...props
}: SidebarProps) {
  return (
    <SidebarWrapper isOpen={isOpen!} {...props}>
      {header && <SidebarHeader>{header}</SidebarHeader>}
      {children && <SidebarContent>{children}</SidebarContent>}
      {footer && <SidebarFooter>{footer}</SidebarFooter>}
    </SidebarWrapper>
  );
}
