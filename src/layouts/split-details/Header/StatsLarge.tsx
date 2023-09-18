import { Box, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat';
import React from 'react';

import {
  formatCurrencyAmount,
  formatUSDPrice,
  shortenAddress,
} from '@/lib/utils';

import { useSplit } from '@/context/SplitContext';

export default function StatsLarge() {
  const { balance, split } = useSplit();

  return (
    <SimpleGrid
      minChildWidth={{ base: '120px', lg: 'unset' }}
      spacing={{ base: '3', lg: '12' }}
      display={{ base: 'grid', lg: 'flex' }}
    >
      <Box>
        <Stat>
          <StatNumber>
            {formatUSDPrice(balance?.totalBalanceUsd || '0')}
          </StatNumber>
          <StatLabel>Total Balance</StatLabel>
        </Stat>
      </Box>

      <Box>
        <Stat>
          <StatNumber>{balance?.assets.length}</StatNumber>
          <StatLabel>Total Assets</StatLabel>
        </Stat>
      </Box>
      <Box>
        <Stat>
          <StatNumber>
            <Text variant={'slashed-zero'}>
              {shortenAddress(split.address)}
            </Text>{' '}
          </StatNumber>
          <StatLabel>Creator</StatLabel>
        </Stat>
      </Box>
    </SimpleGrid>
  );
}
