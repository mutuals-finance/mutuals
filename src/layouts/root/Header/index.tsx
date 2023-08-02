import { Link } from '@chakra-ui/next-js';
import {
  AbsoluteCenter,
  Box,
  Flex,
  Hide,
  IconButton,
  Show,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { useMount } from 'react-use';

import Chain from '@/layouts/root/Header/Chain';
import Logo from '@/layouts/root/Header/Logo';
import User from '@/layouts/root/Header/User';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Splits',
    href: '/splits',
  },
  {
    label: 'Address Book',
    href: '/address-book',
  },
];

export default function Header() {
  const [isReady, setIsReady] = useState(false);
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('black', 'white');
  const { isOpen, onOpen, onClose } = useDisclosure();

  useMount(() => setIsReady(true));

  return (
    <Flex
      as='header'
      position='sticky'
      h={{ base: '54px', lg: '72px' }}
      px={{ base: '3', lg: '12' }}
      zIndex={'50'}
      top={'0'}
      left={'0'}
      w={'100%'}
      alignItems={'center'}
      justifyContent={'space-between'}
      gap={'12'}
      bg={'bg.1'}
    >
      <IconButton
        icon={<IoMenuSharp display={'block'} />}
        fontSize={'2xl'}
        aria-label={'Open Menu'}
        display={{ base: 'flex', lg: 'none' }}
        onClick={isOpen ? onClose : onOpen}
        variant={'ghost'}
      />

      <Show above='lg'>
        <Logo />
      </Show>
      <Hide above='lg'>
        <AbsoluteCenter>
          <Logo />
        </AbsoluteCenter>
      </Hide>

      <Stack
        direction={'row'}
        align={'center'}
        spacing={3}
        flex={'1'}
        display={{ base: 'none', lg: 'flex' }}
      >
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Link
              href={navItem.href}
              fontWeight={500}
              color={linkColor}
              p={'3'}
              _hover={{
                color: linkHoverColor,
              }}
            >
              {navItem.label}
            </Link>
          </Box>
        ))}
      </Stack>

      <Stack justify={'flex-end'} direction={'row'} spacing={6}>
        {isReady && <Chain />}
        {isReady && <User />}
      </Stack>
    </Flex>
  );
}
