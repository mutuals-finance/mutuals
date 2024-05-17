import { TokenTransfer } from '@ankr.com/ankr.js/dist/types';
import { Icon } from '@chakra-ui/icon';
import { Box, Center, Flex, useColorModeValue } from '@chakra-ui/react';
import { CellContext } from '@tanstack/react-table';
import React from 'react';
import { HiArrowDownTray, HiArrowUpTray } from 'react-icons/hi2';

import { EventType } from '@/components/ActivityTable/types';
import useActivityEvent from '@/components/ActivityTable/useActivityEvent';

type EventIconCellProps = CellContext<TokenTransfer, unknown> & {
  address?: string;
};

export function EventIconCell({ address = '', row }: EventIconCellProps) {
  const { getEventType } = useActivityEvent({ address });

  const type = getEventType(row.original);

  const theme = {
    [EventType.Withdrawal]: {
      color: useColorModeValue('red.600', 'red.400'),
      bg: useColorModeValue('red.100', 'red.100'),
    },
    [EventType.Deposit]: {
      color: useColorModeValue('green.600', 'green.400'),
      bg: useColorModeValue('green.100', 'green.100'),
    },
  }[type];

  return (
    <Flex
      borderRadius={'md'}
      w={'8'}
      h={'8'}
      {...theme}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Icon as={type === EventType.Deposit ? HiArrowDownTray : HiArrowUpTray} />
    </Flex>
  );
}
