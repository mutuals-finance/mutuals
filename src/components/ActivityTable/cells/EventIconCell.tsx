import { TokenTransfer } from '@ankr.com/ankr.js/dist/types';
import { CellContext } from '@tanstack/react-table';
import React from 'react';
import { HiArrowDownTray, HiArrowUpTray } from 'react-icons/hi2';

import clsxm from '@/lib/utils/clsxm';

import { EventType } from '@/components/ActivityTable/types';
import useActivityEvent from '@/components/ActivityTable/useActivityEvent';

type EventIconCellProps = CellContext<TokenTransfer, unknown> & {
  address?: string;
};

export function EventIconCell({ address = '', row }: EventIconCellProps) {
  const { getEventType } = useActivityEvent({ address });

  const type = getEventType(row.original.fromAddress);

  const Icon = {
    [EventType.Deposit]: HiArrowDownTray,
    [EventType.Withdrawal]: HiArrowUpTray,
  }[type];

  const colorClasses = {
    [EventType.Withdrawal]: [
      'text-red-600 dark:text-red-400',
      'bg-red-400/25 dark:bg-red-400/25',
    ],
    [EventType.Deposit]: [
      'text-green-600 dark:text-green-400',
      'bg-green-400/25 dark:bg-green-400/25',
    ],
  }[type];

  return (
    <span
      className={clsxm(
        `rounded-default inline-flex h-8 w-8 items-center justify-center text-base`,
        colorClasses
      )}
    >
      <Icon className={'block'} />
    </span>
  );
}
