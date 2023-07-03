import { Link } from '@chakra-ui/next-js';
import { Box, Button, Flex, Stack, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useState } from 'react';
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

  useMount(() => setIsReady(true));

  return (
    <Flex
      as='header'
      position='sticky'
      color={useColorModeValue('black', 'white')}
      h={'72px'}
      px={'12'}
      zIndex={'50'}
      top={'0'}
      left={'0'}
      w={'100%'}
      align={'center'}
      gap={'12'}
      _before={{
        content: '""',
        position: 'absolute',
        inset: 0,
        zIndex: '-1',
        bg: useColorModeValue('white', 'black'),
      }}
    >
      <Logo />

      <Stack direction={'row'} align={'center'} spacing={3} flex={'1'}>
        <NextLink href='/splits/new' passHref legacyBehavior>
          <Button size={'sm'} as={'a'}>
            Create New
          </Button>
        </NextLink>

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
