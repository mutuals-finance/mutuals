'use client';

import {
  BoxProps,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';

import SidebarComponent from '@/components/Sidebar';
import RouterTabs, { RouterTabProps } from '@/components/RouterTabs';
import { useParams, usePathname, useRouter } from 'next/navigation';

interface PoolSidebarWrapperProps extends DrawerProps {}

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
  const isLargerLg = useBreakpointValue(
    {
      base: false,
      lg: true,
    },
    {
      fallback: 'false',
    },
  );

  const pathname = usePathname();
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const index = tabs?.findIndex((t) => pathname == t.href.toString());
  const isOpen = index >= 0;

  const Wrapper = isLargerLg ? PoolSidebarSidebar : PoolSidebarDrawer;

  return (
    <Wrapper
      isOpen={isOpen}
      onClose={() => router.push(`/pool/${decodeURIComponent(params.id)}`)}
      placement='right'
      {...props}
    >
      <RouterTabs isFitted={true} tabs={tabs}>
        {children}
      </RouterTabs>
    </Wrapper>
  );
}

function PoolSidebarSidebar({ children, ...props }: PoolSidebarWrapperProps) {
  const sidebarWidth = '24rem';

  return (
    <SidebarComponent
      top={{ base: '8rem', md: '6rem' }}
      h={{ base: 'calc(100vh - 8rem)', md: 'calc(100vh - 6rem)' }}
      borderColor={{ base: 'transparent', lg: 'border.1' }}
      w={sidebarWidth}
      overflow={'hidden'}
      {...props}
    >
      <Stack
        position={'absolute'}
        top={'0'}
        left={'0'}
        h={'full'}
        w={sidebarWidth}
        gap={'0'}
      >
        {children}
      </Stack>
    </SidebarComponent>
  );
}

function PoolSidebarDrawer({ children, ...props }: PoolSidebarWrapperProps) {
  return (
    <Drawer {...props} size={'lg'}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Manage Funds</DrawerHeader>

        <DrawerBody p={'0'} flex={'1'}>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
