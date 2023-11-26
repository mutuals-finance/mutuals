import { Link } from '@chakra-ui/next-js';
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { MotionConfig } from 'framer-motion';
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import {
  IoAppsOutline,
  IoGridOutline,
  IoGridSharp,
  IoHelpCircleOutline,
  IoHelpOutline,
  IoMenuSharp,
  IoPeopleOutline,
  IoSettingsOutline,
  IoWalletOutline,
} from 'react-icons/io5';
import { useToggle } from 'react-use';

import AnimationBox from '@/components/Animation/Box';

import Logo from '@/layouts/root/Header/Logo';

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
      href: '/splits',
      icon: IoAppsOutline,
    },
    {
      label: 'Treasuries',
      href: '/splits',
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
      <AnimationBox
        flexShrink={'0'}
        position={'sticky'}
        top={'0'}
        left={'0'}
        h={'100vh'}
        display={'flex'}
        borderRight={'1px'}
        borderColor={useColorModeValue('gray.200', 'gray.600')}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: {
            width: '16rem',
          },
          closed: {
            width: '5.6rem',
          },
        }}
      >
        <VStack flex={'1'} alignItems={'stretch'} overflow={'hidden'}>
          <HStack
            flexShrink={'0'}
            h={{ base: '64px', lg: '64px' }}
            justifyContent={'flex-end'}
            alignItems={'center'}
            p={'6'}
          >
            {isOpen && <Logo w={'24'} mr={'auto'} />}

            <IconButton
              icon={<IoMenuSharp display={'block'} />}
              fontSize={'xl'}
              aria-label={'Toggle Sidebar'}
              onClick={() => toggleIsOpen()}
              variant={'ghost'}
            />
          </HStack>
          <VStack
            flex={'1'}
            p={'6'}
            spacing={3}
            overflowY={'auto'}
            overflowX={'hidden'}
            justifyContent={'space-between'}
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
          </VStack>

          <Box
            flexShrink={'0'}
            px={'6'}
            py={'3'}
            borderTop={'1px'}
            borderColor={useColorModeValue('gray.200', 'gray.600')}
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
        </VStack>
      </AnimationBox>

      <Box flex={'1'}>{children}</Box>
    </Stack>
  );
}
