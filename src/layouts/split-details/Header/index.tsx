import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { IoCopyOutline, IoShareOutline } from 'react-icons/io5';

import { ipfsResolveData, shortenAddress } from '@/lib/utils';

import SplitBlurBg from '@/components/Split/BlurBg';
import { SplitImage } from '@/components/Split/Image';

import { useSplit } from '@/context/SplitContext';
import Menu from '@/layouts/split-details/Header/Menu';

export default function Header() {
  const { split } = useSplit();
  const image = ipfsResolveData(split.metaData.image);
  const name = split.metaData.name || '';

  return (
    <Box as={'header'} position={'relative'} width={'100%'} overflow={'hidden'}>
      <Container maxW='container.xl' position={'relative'}>
        <VStack
          pt={'12'}
          my={'12'}
          spacing={'6'}
          justifyContent={'flex-end'}
          alignItems={'stretch'}
        >
          <ButtonGroup gap='3' position={'absolute'} top={'0'} right={'0'}>
            <Button variant={'outline'} rightIcon={<IoCopyOutline />}>
              {shortenAddress(split.address)}
            </Button>
            <Button variant={'outline'} rightIcon={<IoShareOutline />}>
              Share
            </Button>
          </ButtonGroup>

          <Flex alignItems={'center'} gap={'3'}>
            <SplitImage src={image} alt={name} boxSize='6rem' />
            <Heading as={'h1'} fontWeight={'600'} size={'xl'}>
              {name}
            </Heading>
          </Flex>

          <Box maxW={'md'}>
            <Text noOfLines={2}>{split.metaData.description}</Text>
          </Box>

          <Box>
            <Menu id={split.id} />
          </Box>
        </VStack>
      </Container>

      <SplitBlurBg src={image} alt={name} />
    </Box>
  );
}
