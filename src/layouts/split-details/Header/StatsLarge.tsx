import { Box, HStack, SimpleGrid } from '@chakra-ui/react';
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
    <HStack spacing={'12'}>
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
          <StatNumber>{shortenAddress(split.address)}</StatNumber>
          <StatLabel>Creator</StatLabel>
        </Stat>
      </Box>
    </HStack>
  );
}
