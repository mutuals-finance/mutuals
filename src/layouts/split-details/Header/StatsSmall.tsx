import { Box, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat';
import React, { useMemo } from 'react';

import { formatDate, formatTimestamp, formatUSDPrice } from '@/lib/utils';

import { useSplit } from '@/context/SplitContext';

export default function StatsSmall() {
  const { balance, split } = useSplit();

  const stats = useMemo(
    () => [
      {
        label: 'Participants',
        value: split.shares.length,
      },
      {
        label: 'Created At',
        value: formatTimestamp(split.timestamp),
      },
      {
        label: 'Chain',
        value: 'Ethereum',
      },
    ],
    [split.shares, split.timestamp]
  );

  return (
    <HStack divider={<Box borderLeft={'none'}>&middot;</Box>} spacing={'2'}>
      {stats.map(({ label, value }) => (
        <Box key={label}>
          <Text display={'inline'}>{label}</Text> <Text as='b'>{value}</Text>
        </Box>
      ))}
    </HStack>
  );
}
