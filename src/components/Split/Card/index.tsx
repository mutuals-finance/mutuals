'use client';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  IconButton,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  StatArrow,
  StatNumber,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Stat, StatLabel } from '@chakra-ui/stat';
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
  formatUSDPrice,
  getShortNameByChainId,
  shortenAddress,
} from '@/lib/utils';

import { SplitImage } from '@/components/Split/Image';

interface SplitFragmentCardProps {
  fragment: FragmentType<typeof splitBaseFragment>;
}

export function SplitFragmentCard(props: SplitFragmentCardProps) {
  const split = useFragment(splitBaseFragment, props.fragment);
  const { data } = useMetadata({ uri: split?.metaDataUri });

  return <SplitCard {...split} metaData={data!} />;
}

type SplitCardProps = Partial<SplitBaseFragmentFragment>;

export default function SplitCard({ id, metaData, address }: SplitCardProps) {
  return (
    <LinkBox as='article' rounded={'lg'}>
      <Card variant={'outline'} bg={'transparent'}>
        <CardHeader as={Flex} alignItems={'center'} gap={'3'}>
          <Box flexShrink={0}>
            {!!metaData?.image && (
              <SplitImage
                src={metaData.image}
                alt={metaData?.name || 'UNKNOWN'}
              />
            )}
          </Box>

          <Box flex='1'>
            <Heading size='sm' as={'h3'} fontWeight={'700'}>
              {metaData?.name === '' ? 'Unknown' : metaData?.name}
            </Heading>

            <Text variant={'label-mono'}>{shortenAddress(address)}</Text>
          </Box>

          <Menu size={'sm'}>
            <MenuButton
              zIndex={10}
              flexShrink={'0'}
              as={IconButton}
              aria-label='Split Options'
              icon={<IoEllipsisHorizontal />}
              variant='ghost'
            />
            <MenuList>
              <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
              <MenuItem icon={<IoOpenOutline />}>Etherscan</MenuItem>
              <MenuItem icon={<IoEyeOffOutline />}>Hide</MenuItem>
            </MenuList>
          </Menu>
        </CardHeader>
        <CardBody pt={'0'}>
          <Text fontSize={'sm'} noOfLines={2}>
            {metaData?.description}
          </Text>

          <Divider my={'6'} />

          <Flex justifyContent={'space-between'} alignItems={'flex-end'}>
            <Stat>
              <StatLabel>Total Balance</StatLabel>
              <StatNumber>{formatUSDPrice('4000123.24')}</StatNumber>
            </Stat>
            {id && <Button size={'sm'}>More</Button>}
          </Flex>
        </CardBody>
      </Card>
      {!!id && (
        <LinkOverlay
          as={NextLink}
          href={`/splits/${formatPrefixedAddress(
            id,
            getShortNameByChainId(80001),
          )}`}
        />
      )}
    </LinkBox>
  );
}
