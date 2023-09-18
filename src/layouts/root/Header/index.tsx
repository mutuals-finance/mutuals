import { Icon } from '@chakra-ui/icon';
import { Link } from '@chakra-ui/next-js';
import {
  AbsoluteCenter,
  Box,
  Divider,
  Flex,
  Hide,
  IconButton,
  InputGroup,
  InputLeftElement,
  Show,
  Stack,
  StackDivider,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoMenuSharp, IoSearch } from 'react-icons/io5';
import { useMount } from 'react-use';

import Form from '@/components/Form';
import Input from '@/components/Form/Input';

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
      h={{ base: '72px', lg: '72px' }}
      px={{ base: '6', lg: '12' }}
      py={'6'}
      zIndex={'50'}
      top={'0'}
      left={'0'}
      w={'100%'}
      align={'center'}
      justify={'space-between'}
      spacing={'12'}
      bg={'bg.1'}
      direction={'row'}
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
        <Logo w={'32'} />
        <Divider orientation='vertical' />
      </Show>

      <Hide above='lg'>
        <AbsoluteCenter>
          <Logo w={'24'} />
        </AbsoluteCenter>
      </Hide>

      <Stack
        direction={'row'}
        align={'center'}
        spacing={6}
        flex={'1'}
        display={{ base: 'none', lg: 'flex' }}
      >
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Link
              href={navItem.href}
              fontWeight={500}
              _hover={{
                color: linkHoverColor,
              }}
            >
              {navItem.label}
            </Link>
          </Box>
        ))}
      </Stack>

      {/*
      <Divider orientation='vertical' />

      <Form flex={'1'}>
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
*/}

      <Stack direction={'row'} spacing={6}>
        {isReady && <Chain />}
        {isReady && <User />}
      </Stack>
    </Stack>
  );
}
