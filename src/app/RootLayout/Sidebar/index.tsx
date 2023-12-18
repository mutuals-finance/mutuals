'use client';

import Link from 'next/link';
import { Box, Button, HStack, IconButton, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import {
  IoAppsOutline,
  IoGridOutline,
  IoHelpCircleOutline,
  IoMenuSharp,
  IoPeopleOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { useToggle } from 'react-use';

import Sidebar from '@/components/Sidebar';

import Logo from '@/app/RootLayout/Header/Logo';

const NAV_SECTIONS: {
  [section: string]: {
    label: string;
    href: string;
    icon: IconType;
  }[];
} = {
  General: [
    {
      label: 'Dashboard',
      href: '/',
      icon: IoAppsOutline,
    },
    {
      label: 'Treasuries',
      href: '/dashboard',
      icon: IoGridOutline,
    },
    {
      label: 'Address Book',
      href: '/address-book',
      icon: IoPeopleOutline,
    },
  ],
  Preferences: [
    {
      label: 'Settings',
      href: '/settings',
      icon: IoSettingsOutline,
    },
    {
      label: 'Help Center',
      href: '/settings',
      icon: IoHelpCircleOutline,
    },
  ],
};

export default function RootSidebar({ children }: React.PropsWithChildren) {
  const [isOpen, toggleIsOpen] = useToggle(true);

  return (
    <Stack gap='0' justifyContent={'stretch'} direction={'row'}>
      <Sidebar
        w={'16rem'}
        minW={'5.6rem'}
        isOpen={isOpen}
        header={
          <HStack justifyContent={'flex-end'}>
            {isOpen && (
              <Box w={'24'} mr={'auto'}>
                <Logo />
              </Box>
            )}

            <IconButton
              icon={<IoMenuSharp display={'block'} />}
              fontSize={'xl'}
              aria-label={'Toggle Sidebar'}
              onClick={() => toggleIsOpen()}
              variant={'ghost'}
            />
          </HStack>
        }
        footer={
          <Box
            textAlign={'center'}
            fontSize={'xs'}
            visibility={isOpen ? 'inherit' : 'hidden'}
          >
            <Text noOfLines={1}>Copyright 2023 SplitFi</Text>
            <Text noOfLines={1}>
              <Link href={'/'}> Privacy Policy</Link> /{' '}
              <Link href={'/'}>Terms</Link>
            </Text>
          </Box>
        }
      >
        {Object.keys(NAV_SECTIONS).map((section) => (
          <Box w={'full'} key={section}>
            <Text mb={'3'} fontSize={'sm'} noOfLines={1}>
              {section}
            </Text>
            <Stack spacing={3}>
              {NAV_SECTIONS[section]?.map((navItem) => (
                <Button
                  key={navItem.label}
                  w={'full'}
                  justifyContent={'flex-start'}
                  px={'3.5'}
                  as={Link}
                  href={navItem.href}
                  fontWeight={'500'}
                  fontSize={'sm'}
                  textAlign={'left'}
                  leftIcon={<navItem.icon />}
                  iconSpacing={'4'}
                  sx={{ textDecoration: 'none !important' }}
                  overflow={'hidden'}
                >
                  {navItem.label}
                </Button>
              ))}
            </Stack>
          </Box>
        ))}
      </Sidebar>

      <Box flex={'1'}>{children}</Box>
    </Stack>
  );
}