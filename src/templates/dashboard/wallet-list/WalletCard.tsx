import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import {
  IoEllipsisHorizontal,
  IoEyeOffOutline,
  IoOpenOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

import { FragmentType, useFragment } from '@/lib/graphql/__generated__';
import { SplitBaseFragmentFragment } from '@/lib/graphql/__generated__/graphql';
import { splitBaseFragment } from '@/lib/graphql/fragments';
import { useMetadata } from '@/lib/split/hooks';
import {
  formatPrefixedAddress,
  getShortNameByChainId,
  shortenAddress,
} from '@/lib/utils';

import Date from '@/components/Date';
import SplitBlurBg from '@/components/Split/BlurBg';
import { SplitImage } from '@/components/Split/Image';
import UserAvatar from '@/components/UserAvatar';

type SplitCardProps = {};

export default function WalletCard({}: SplitCardProps) {
  const address = '0x24856890515299d77f0a3f344921f3860a82877b';
  return (
    <Card as='article' variant={'outline'} bg={'transparent'}>
      <CardHeader
        as={Stack}
        spacing={'3'}
        pb={'3'}
        alignItems={'center'}
        textAlign={'center'}
      >
        <UserAvatar address={address} size={'sm'} />
        <Box>
          <Heading size='sm' as={'h3'} fontWeight={'700'}>
            Company Multisig
          </Heading>
          <Text variant={'label-mono'}>{shortenAddress(address, 3)}</Text>
        </Box>
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
        <Button size={'sm'} w={'full'}>
          Manage
        </Button>
      </CardFooter>
    </Card>
  );
}
