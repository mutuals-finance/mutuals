import {
  Box,
  ButtonGroup,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BsLayoutSidebarReverse } from 'react-icons/bs';
import {
  IoAlertCircleOutline,
  IoCopyOutline,
  IoEllipsisHorizontal,
  IoOpenOutline,
  IoSettingsOutline,
  IoShareOutline,
} from 'react-icons/io5';

import { ipfsResolveData, shortenAddress } from '@/lib/utils';

import { SplitImage } from '@/components/Split/Image';
import { SplitBaseFragmentFragment } from '@/lib/graphql/__generated__/graphql';
import Link from 'next/link';
import SectionContainer from '@/components/Shell/SectionContainer';

interface PoolDescriptionProps {
  pool?: SplitBaseFragmentFragment | null;
  metaData: { name: string; description: string; image: string };
}

export default function PoolDescription({ metaData }: PoolDescriptionProps) {
  return (
    <Box as={'article'}>
      <Stack
        direction={{ base: 'row', lg: 'row' }}
        alignItems={'center'}
        spacing={'3'}
        w={'full'}
      >
        <SplitImage
          src={ipfsResolveData(metaData.image)}
          alt={metaData.name}
          boxSize={'3.4rem'}
        />
        <Heading as={'h1'} fontWeight={'700'} size={'xl'}>
          {metaData.name}
        </Heading>
      </Stack>

      <Box maxW={'xl'} mt={'6'}>
        <Text noOfLines={{ base: 3, lg: 3 }}>{metaData.description}</Text>
      </Box>
    </Box>
  );
}
