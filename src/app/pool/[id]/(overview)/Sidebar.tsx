'use client';

import {
  Box,
  BoxProps,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Heading,
  IconButton,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';

import SidebarComponent from '@/components/Sidebar';
import RouterTabs, { RouterTabProps } from '@/components/RouterTabs';
import { useParams, usePathname, useRouter } from 'next/navigation';
import Header from '@/app/RootLayout/Header';
import { IoClose } from 'react-icons/io5';

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
  const isClosed = index < 0;

  const Wrapper = !isLargerLg ? PoolSidebarDrawer : PoolSidebarSidebar;

  return (
    <Wrapper
      isOpen={!isClosed}
      onClose={() => router.push(`/pool/${decodeURIComponent(params.id)}`)}
      placement='right'
      {...props}
    >
      <RouterTabs tabs={tabs}>{children}</RouterTabs>
    </Wrapper>
  );
}

function PoolSidebarSidebar({ children, ...props }: PoolSidebarWrapperProps) {
  const sidebarWidth = '26rem';

  return (
    <SidebarComponent
      top={{ base: '5rem', md: '3.4rem' }}
      h={{ base: 'calc(100vh - 5rem)', md: 'calc(100vh - 3.4rem)' }}
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
