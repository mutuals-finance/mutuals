import { TokenTransfer } from '@ankr.com/ankr.js/dist/types';
import { Text, useColorModeValue } from '@chakra-ui/react';
import { CellContext } from '@tanstack/react-table';
import React from 'react';

import { formatCurrencyAmount } from '@/lib/utils';
import clsxm from '@/lib/utils/clsxm';

import { EventType } from '@/components/ActivityTable/types';
import useActivityEvent from '@/components/ActivityTable/useActivityEvent';

type AmountCellProps = CellContext<TokenTransfer, string> & {
  address?: string;
};

export function AmountCell({ address = '', row, getValue }: AmountCellProps) {
  const { getEventType } = useActivityEvent({ address });

  const type = getEventType(row.original);
  const isDeposit = type === EventType.Deposit;
  const text = `${formatCurrencyAmount(getValue())} ${
    row.original.tokenSymbol
  }`;

  return (
    <>
      <Text
        color={useColorModeValue(
          isDeposit ? 'green.600' : 'red.600',
          isDeposit ? 'green.400' : 'red.400'
        )}
      >
        {isDeposit ? '+ ' : '- '}
        {text}
      </Text>
    </>
  );
}
