import {
  Box,
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
  Text,
  useColorModeValue,
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

interface SplitFragmentCardProps {
  fragment: FragmentType<typeof splitBaseFragment>;
}

export function SplitFragmentCard(props: SplitFragmentCardProps) {
  const split = useFragment(splitBaseFragment, props.fragment);
  const { data } = useMetadata({ uri: split?.metaDataUri });

  return <SplitCard {...split} metaData={data} />;
}

type SplitCardProps = Partial<SplitBaseFragmentFragment>;

export default function SplitCard({
  id,
  metaData,
  address,
  timestamp,
}: SplitCardProps) {
  return (
    <LinkBox
      as='article'
      rounded={'md'}
      position={'relative'}
      overflow={'hidden'}
      display={'flex'}
    >
      <SplitBlurBg src={metaData?.image} alt={metaData?.name} />
      <Card
        flex={1}
        size={'sm'}
        p={'3'}
        rounded={'md'}
        variant={'outline'}
        bg={useColorModeValue('whiteAlpha.200', 'blackAlpha.200')}
      >
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
            <Heading size='md' as={'h3'}>
              {metaData?.name === '' ? 'Unknown' : metaData?.name}
            </Heading>

            <Text fontSize='xs' fontWeight={'500'}>
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
        <CardBody>
          <Text noOfLines={2}>{metaData?.description}</Text>
        </CardBody>
        <CardFooter>
          <Date timestamp={timestamp} />
        </CardFooter>
      </Card>
      {!!id && (
        <LinkOverlay
          as={NextLink}
          href={`/splits/${formatPrefixedAddress(
            id,
            getShortNameByChainId(80001)
          )}`}
        />
      )}
    </LinkBox>
  );
}
