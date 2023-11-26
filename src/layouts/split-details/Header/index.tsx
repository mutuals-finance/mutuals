import {
  Box,
  Button,
  ButtonGroup,
  ButtonGroupProps,
  Container,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsLayoutSidebarReverse } from 'react-icons/bs';
import {
  IoAlertCircleOutline,
  IoCopy,
  IoCopyOutline,
  IoEllipsisHorizontal,
  IoEllipsisVertical,
  IoOpenOutline,
  IoSettingsOutline,
  IoShareOutline,
} from 'react-icons/io5';

import { ipfsResolveData, shortenAddress } from '@/lib/utils';

import { SplitImage } from '@/components/Split/Image';

import { useSplit } from '@/context/SplitContext';
import SplitHandlers from '@/templates/split/details/SplitHandlers';

function SplitHeaderButtonGroup(props: ButtonGroupProps) {
  const { split } = useSplit();

  return (
    <ButtonGroup variant={'outline'} size={'sm'} {...props}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Show more actions'
          icon={<IoEllipsisHorizontal />}
        />
        <MenuList>
          <MenuItem icon={<IoShareOutline />}>Share</MenuItem>
          <MenuItem icon={<IoCopyOutline />}>
            Copy {shortenAddress(split.id)}
          </MenuItem>
          <MenuItem icon={<IoOpenOutline />}>Etherscan</MenuItem>
          <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
          <MenuItem icon={<IoAlertCircleOutline />}>Report</MenuItem>
        </MenuList>
      </Menu>
    </ButtonGroup>
  );
}
export default function Header({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const { split } = useSplit();
  const image = ipfsResolveData(split.metaData.image);
  const name = split.metaData.name || '';

  return (
    <>
      <Box as={'header'} pt={'12'} my={'12'} w={'full'}>
        <Container maxW='container.lg'>
          <VStack
            spacing={'6'}
            justifyContent={'flex-end'}
            alignItems={'stretch'}
            w={'full'}
          >
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              alignItems={{ lg: 'center' }}
              spacing={{ base: '6', lg: '3' }}
              w={'full'}
            >
              <HStack flex={'1'} w={'full'} spacing='3' alignItems={'center'}>
                <SplitImage src={image} alt={name} boxSize='3rem' />
                <Heading as={'h1'} fontWeight={'700'} size={'xl'}>
                  {name}
                </Heading>
                <SplitHeaderButtonGroup />
              </HStack>
              <IconButton
                size={'sm'}
                flexShrink={'0'}
                aria-label='Toggle Sidebar'
                icon={<BsLayoutSidebarReverse />}
                onClick={() => toggleSidebar()}
              />
            </Stack>

            <Box maxW={'xl'}>
              <Text noOfLines={{ base: 3, lg: 3 }}>
                {split.metaData.description}
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
      <SplitHandlers />
    </>
  );
}
