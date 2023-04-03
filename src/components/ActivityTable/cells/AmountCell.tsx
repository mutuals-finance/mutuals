import { TokenTransfer } from '@ankr.com/ankr.js/dist/types';
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
      <span
        className={clsxm(
          'slashed-zero',
          isDeposit
            ? 'text-green-600 dark:text-green-400'
            : 'text-red-600 dark:text-red-400'
        )}
      >
        {isDeposit ? '+ ' : '- '}
        {text}
      </span>
    </>
  );
}
