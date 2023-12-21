'use client';

import { Icon } from '@chakra-ui/icon';
import {
  IconButton,
  InputGroup,
  InputLeftElement,
  Show,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoMenuSharp, IoSearch } from 'react-icons/io5';
import { useMount } from 'react-use';

import Form from '@/components/Form';
import Input from '@/components/Form/Input';

import Chain from '@/app/RootLayout/Header/Chain';
import User from '@/app/RootLayout/Header/User';

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
  {
    label: 'Settings',
    href: '/settings',
  },
];

export default function Header() {
  const [isReady, setIsReady] = useState(false);
  const linkHoverColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600');
  const { isOpen, onOpen, onClose } = useDisclosure();

  useMount(() => setIsReady(true));

  return (
    <Stack
      as='header'
      position='sticky'
      h={'3.6rem'}
      px={{ base: '6', lg: '12' }}
      py={'6'}
      zIndex={'50'}
      top={'0'}
      left={'0'}
      w={'100%'}
      align={'center'}
      justify={'space-between'}
      spacing={'12'}
      borderBottom='1px solid'
      borderColor={'border.1'}
      bg={useColorModeValue('white', 'gray.900')}
      direction={'row'}
    >
      <Show above={'lg'}>
        <Form>
          <InputGroup size={'sm'}>
            <InputLeftElement pointerEvents='none'>
              <Icon
                as={IoSearch}
                color={useColorModeValue('gray.400', 'gray.600')}
              />
            </InputLeftElement>
            <Input hideWrapper={true} placeholder='Search...' pl={'10'} />
          </InputGroup>
        </Form>
      </Show>

      <IconButton
        icon={<IoMenuSharp display={'block'} />}
        fontSize={'2xl'}
        aria-label={'Open Menu'}
        display={{ base: 'flex', lg: 'none' }}
        onClick={isOpen ? onClose : onOpen}
        variant={'ghost'}
      />

      <Stack direction={'row'} spacing={6} ml={'auto'}>
        {isReady && <Chain />}
        {isReady && <User />}
      </Stack>
    </Stack>
  );
}
