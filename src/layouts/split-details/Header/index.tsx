import {
  Box,
  Button,
  ButtonGroup,
  ButtonGroupProps,
  Container,
  Heading,
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
import {
  IoAlertCircleOutline,
  IoCopy,
  IoCopyOutline,
  IoEllipsisHorizontal,
  IoOpenOutline,
  IoSettingsOutline,
  IoShareOutline,
} from 'react-icons/io5';

import { ipfsResolveData, shortenAddress } from '@/lib/utils';

import SplitBlurBg from '@/components/Split/BlurBg';
import { SplitImage } from '@/components/Split/Image';

import { useSplit } from '@/context/SplitContext';
import TabMenu from '@/layouts/split-details/Header/Menu';
import StatsLarge from '@/layouts/split-details/Header/StatsLarge';
import StatsSmall from '@/layouts/split-details/Header/StatsSmall';

function SplitHeaderButtonGroup(props: ButtonGroupProps) {
  const { split } = useSplit();

  return (
    <ButtonGroup gap={1} {...props}>
      <Button rightIcon={<IoCopy />}>
        <Text variant={'slashed-zero'}>{shortenAddress(split.id)}</Text>
      </Button>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Show more actions'
          icon={<IoEllipsisHorizontal />}
        />
        <MenuList>
          <MenuItem icon={<IoShareOutline />}>Share</MenuItem>
          <MenuItem icon={<IoCopyOutline />}>Copy Address</MenuItem>
          <MenuItem icon={<IoOpenOutline />}>Etherscan</MenuItem>
          <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
          <MenuItem icon={<IoAlertCircleOutline />}>Report</MenuItem>
        </MenuList>
      </Menu>
    </ButtonGroup>
  );
}
export default function Header() {
  const { split } = useSplit();
  const image = ipfsResolveData(split.metaData.image);
  const name = split.metaData.name || '';

  return (
    <Box as={'header'} position={'relative'} width={'100%'} overflow={'hidden'}>
      <Container maxW='container.xl' position={'relative'}>
        <VStack
          pt={'12'}
          mt={{ lg: '12' }}
          spacing={'6'}
          justifyContent={'flex-end'}
          alignItems={'stretch'}
        >
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            alignItems={{ lg: 'center' }}
            spacing={{ base: '6', lg: '3' }}
          >
            <Stack
              justify='space-between'
              spacing={{ base: '3', lg: '0' }}
              direction={'row'}
            >
              <SplitImage src={image} alt={name} boxSize='6rem' flex={'1'} />
              <SplitHeaderButtonGroup
                flexShrink={'0'}
                position={{ lg: 'absolute' }}
                top={{ lg: '0' }}
                right={{ lg: '0' }}
              />
            </Stack>

            <Heading
              as={'h1'}
              fontWeight={'600'}
              size={{ base: '2xl', lg: 'xl' }}
            >
              {name}
            </Heading>
          </Stack>

          <Box>
            <StatsSmall />
          </Box>

          <Box maxW={'2xl'}>
            <Text noOfLines={{ base: 3, lg: 2 }}>
              {split.metaData.description}
            </Text>
          </Box>

          <Box>
            <StatsLarge />
          </Box>

          <Box>
            <TabMenu />
          </Box>
        </VStack>
      </Container>

      <SplitBlurBg src={image} alt={name} />
    </Box>
  );
}
