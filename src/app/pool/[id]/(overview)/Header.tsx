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

interface PoolHeaderProps {
  pool?: SplitBaseFragmentFragment | null;
  metaData: { name: string; description: string; image: string };
}

export default function PoolHeader({ metaData, pool }: PoolHeaderProps) {
  return (
    <Box as={'header'} mt={{ base: '12', lg: '24' }} w={'full'}>
      <VStack
        spacing={'6'}
        justifyContent={'flex-end'}
        alignItems={'stretch'}
        w={'full'}
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          alignItems={{ lg: 'center' }}
          spacing={'6'}
          w={'full'}
        >
          <HStack flex={'1'} w={'full'} spacing='3' alignItems={'center'}>
            <SplitImage
              src={ipfsResolveData(metaData.image)}
              alt={metaData.name}
              boxSize='3rem'
            />
            <Heading as={'h1'} fontWeight={'700'} size={'xl'}>
              {metaData.name}
            </Heading>
            <ButtonGroup variant={'outline'} size={'sm'}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label='Show more actions'
                  icon={<IoEllipsisHorizontal />}
                />
                <MenuList>
                  <MenuItem icon={<IoShareOutline />}>Share</MenuItem>
                  <MenuItem icon={<IoCopyOutline />}>
                    Copy {shortenAddress(pool?.address)}
                  </MenuItem>
                  <MenuItem icon={<IoOpenOutline />}>Etherscan</MenuItem>
                  <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
                  <MenuItem icon={<IoAlertCircleOutline />}>Report</MenuItem>
                </MenuList>
              </Menu>
            </ButtonGroup>
          </HStack>
          <Show above={'lg'}>
            <IconButton
              size={'sm'}
              flexShrink={'0'}
              aria-label='Toggle Sidebar'
              icon={<BsLayoutSidebarReverse />}
            />
          </Show>
        </Stack>

        <Box maxW={'xl'}>
          <Text noOfLines={{ base: 3, lg: 3 }}>{metaData.description}</Text>
        </Box>
      </VStack>
    </Box>
  );
}
