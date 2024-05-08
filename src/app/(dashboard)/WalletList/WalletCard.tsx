'use client';

import {
  Box,
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardProps,
  Heading,
  Stack,
  Tag,
  TagLabel,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { shortenAddress } from '@/lib/utils';

import UserAvatar from '@/components/UserAvatar';
import Link from 'next/link';

type SplitCardProps = CardProps;

export default function WalletCard(props: SplitCardProps) {
  const address = '0x24856890515299d77f0a3f344921f3860a82877b';
  return (
    <Card as='article' variant={'outline'} bg={'transparent'} {...props}>
      <CardHeader
        as={Stack}
        spacing={'3'}
        pb={'3'}
        alignItems={'center'}
        textAlign={'center'}
      >
        <UserAvatar address={address} size={'sm'} />
        <Stack gap={'1.5'} alignItems={'center'}>
          <Heading size='sm' as={'h3'}>
            Company Multisig
          </Heading>

          <Text fontSize='xs' fontFamily={'monospace'}>
            {shortenAddress(address)}
          </Text>
        </Stack>
        {/*
        <Menu size={'sm'}>
          <MenuButton
            zIndex={10}
            flexShrink={'0'}
            as={IconButton}
            aria-label='Wallet Options'
            icon={<IoEllipsisHorizontal />}
            variant='ghost'
          />
          <MenuList>
            <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
            <MenuItem icon={<IoOpenOutline />}>Etherscan</MenuItem>
            <MenuItem icon={<IoEyeOffOutline />}>Hide</MenuItem>
          </MenuList>
        </Menu>
*/}
      </CardHeader>

      <CardFooter pt={'0'}>
        <Button
          size={'sm'}
          w={'full'}
          as={Link}
          href={`wallet/${address}`}
          scroll={false}
        >
          Manage
        </Button>
      </CardFooter>
    </Card>
  );
}
