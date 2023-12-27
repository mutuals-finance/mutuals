'use client';

import { BoxProps, Stack, useBreakpointValue } from '@chakra-ui/react';

import SidebarComponent from '@/components/Sidebar';
import RouterTabs, { RouterTabProps } from '@/components/RouterTabs';
import { usePathname } from 'next/navigation';

interface PoolSidebarProps extends BoxProps {
  defaultOpen?: boolean;
  tabs: RouterTabProps[];
}

export default function PoolSidebar({
  children,
  defaultOpen = false,
  tabs,
  ...props
}: PoolSidebarProps) {
  const pathname = usePathname();
  const index = tabs?.findIndex((t) => pathname == t.href.toString());
  const isOpen = index >= 0;

  const sidebarWidth = useBreakpointValue(
    {
      base: '100%',
      lg: '24rem',
    },
    {
      fallback: '100%',
    },
  );

  return (
    <SidebarComponent
      isOpen={isOpen}
      top={{ base: '8rem', md: '6rem' }}
      h={{ base: 'calc(100vh - 8rem)', md: 'calc(100vh - 6rem)' }}
      placement={'right'}
      borderColor={{ base: 'transparent', lg: 'border.1' }}
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
        <RouterTabs isFitted={true} tabs={tabs}>
          {children}
        </RouterTabs>
      </Stack>
    </SidebarComponent>
  );
}
