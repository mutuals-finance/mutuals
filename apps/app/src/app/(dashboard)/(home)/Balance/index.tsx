'use client';

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Stack,
  StatGroup,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { Stat } from '@chakra-ui/react';
import { StatLabel } from '@chakra-ui/stat';
import { formatUSDPrice } from '@/lib/utils';
import ContentCard from '@/components/ContentCard';

export default function Balance() {
  return (
    <Container variant={'shell'}>
      <ContentCard>
        <Box
          position='relative'
          w={'full'}
          h={'3'}
          bg={'bg.2'}
          rounded={'md'}
          mb={'6'}
        >
          <Box
            bg={useColorModeValue('primary.100', 'primary.500')}
            position={'absolute'}
            top={'0'}
            left={'0'}
            h={'full'}
            w={'42%'}
            rounded={'md'}
          />
        </Box>

        <Stack direction={'row'}>
          <StatGroup gap={'12'} flex={'1'}>
            <Stat flex={'0'}>
              <StatLabel>Pools Balance</StatLabel>
              <StatNumber fontSize={'3xl'}>
                {formatUSDPrice((902834.48 - 40022.34).toString())}
              </StatNumber>
            </Stat>
            <Stat flex={'1'}>
              <StatLabel>Your Balance</StatLabel>
              <StatNumber fontSize={'3xl'}>
                {formatUSDPrice('40022.34')}
              </StatNumber>
            </Stat>
          </StatGroup>

          <ButtonGroup>
            <Button variant={'blackWhite'}>Withdraw All</Button>
            <Button variant={'outline'}>My Pools</Button>
          </ButtonGroup>
        </Stack>
      </ContentCard>
    </Container>
  );
}
