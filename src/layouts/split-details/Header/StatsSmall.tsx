import { Box, HStack, Text } from '@chakra-ui/react';
import React, { useMemo } from 'react';

import { formatTimestamp } from '@/lib/utils';

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
    <HStack
      wrap={'wrap'}
      divider={<Box borderLeft={'none'}>&middot;</Box>}
      spacing={'2'}
    >
      {stats.map(({ label, value }) => (
        <Box key={label}>
          <Text display={'inline'}>{label}</Text> <Text as='b'>{value}</Text>
        </Box>
      ))}
    </HStack>
  );
}
