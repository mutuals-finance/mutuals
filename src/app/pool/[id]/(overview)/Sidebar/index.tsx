'use client';

import { Box, BoxProps, Flex, Stack } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

import { usePathname } from 'next/navigation';
import tabs from '@/app/pool/[id]/(overview)/Sidebar/tabs';
import SidebarTabsContent from '@/app/pool/[id]/(overview)/Sidebar/TabsContent';
import SidebarComponent from '@/components/Sidebar';

interface PoolSidebarProps extends BoxProps {
  //tabs: { title: string; children: ReactNode }[];
}

export default function PoolSidebar({
  children,
  ...props
}: PropsWithChildren<PoolSidebarProps>) {
  const sidebarWidth = '24rem';

  const pathname = usePathname();

  const tabIndex = tabs.findIndex((t) => pathname.includes(t.href));
  const isOpen = tabIndex >= 0;

  return (
    <SidebarComponent
      isOpen={isOpen}
      top={'4rem'}
      h={'calc(100vh - 4rem)'}
      placement={'right'}
      w={sidebarWidth}
      overflow={'hidden'}
      {...props}
    >
      <Stack
        position={'absolute'}
        top={'0'}
        left={'0'}
        w={sidebarWidth}
        h={'full'}
        gap={'0'}
      >
        <SidebarTabsContent tabs={tabs} index={tabIndex}>
          {children}
        </SidebarTabsContent>
      </Stack>
    </SidebarComponent>
  );
}
