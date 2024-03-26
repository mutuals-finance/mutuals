import { TokenTransfer } from '@ankr.com/ankr.js/dist/types';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { CellContext } from '@tanstack/react-table';
import React from 'react';

import useActivityEvent from '@/components/ActivityTable/useActivityEvent';
import Date from '@/components/Date';

type EventDescriptionCellProps = CellContext<TokenTransfer, unknown> & {
  address?: string;
};

export function EventDescriptionCell({
  address = '',
  row,
}: EventDescriptionCellProps) {
  const { getEventType } = useActivityEvent({ address });
  const type = getEventType(row.original);

  return (
    <Box fontSize={'sm'}>
      <Text>{type}</Text>
      <Date
        timestamp={row.original.timestamp.toString()}
        variant={'label-mono'}
      />
    </Box>
  );
}
