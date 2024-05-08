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
  HStack,
  IconButton,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  StackDivider,
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
import { BsBoxArrowInUpRight } from 'react-icons/bs';

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
    <LinkBox
      as='article'
      rounded={'md'}
      _hover={{ transform: 'translateY(-4px)' }}
      transitionDuration={'0.2s'}
      transitionTimingFunction={'ease-in-out'}
    >
      <Card variant={'outline'} bg={'bg.1'} size={'sm'}>
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
            <Heading size='sm' as={'h3'}>
              {metaData?.name === '' ? 'Unknown' : metaData?.name}
            </Heading>

            <Text variant={'label-mono'} fontSize={'xs'}>
              {shortenAddress(address)}
            </Text>
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
          <Stack spacing='3'>
            <Text noOfLines={2} fontSize={'sm'}>
              {metaData?.description}
            </Text>

            <HStack flex={'1'} gap={'6'}>
              <Stat flex={'0'}>
                <StatLabel fontSize={'xs'}>Pool Balance</StatLabel>
                <StatNumber fontSize={'xl'}>
                  {formatUSDPrice('493123.24')}
                </StatNumber>
              </Stat>
              <Stat flex={'0'}>
                <StatLabel fontSize={'xs'}>Your Balance</StatLabel>
                <StatNumber fontSize={'xl'}>
                  {formatUSDPrice('10123.98')}
                </StatNumber>
              </Stat>
            </HStack>

            <Button size={'sm'} _hover={{ cursor: 'default' }}>
              View More
            </Button>
          </Stack>
        </CardBody>
      </Card>
      {!!id && (
        <LinkOverlay
          as={NextLink}
          href={`/pool/${formatPrefixedAddress(
            id,
            getShortNameByChainId(80001),
          )}`}
        />
      )}
    </LinkBox>
  );
}
