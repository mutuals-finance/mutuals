import React from 'react';
import { HiArrowDownTray, HiArrowUpTray } from 'react-icons/hi2';
import { IoLinkOutline } from 'react-icons/io5';

import clsxm from '@/lib/utils/clsxm';

import { EventType } from './types';

export default function ActivityTableBadge({ type }: { type: EventType }) {
  let Icon;

  switch (type) {
    case EventType.Deposit:
      Icon = HiArrowDownTray;
      break;
    case EventType.Withdrawal:
      Icon = HiArrowUpTray;
      break;
    default:
      Icon = IoLinkOutline;
  }

  const colorClasses = {
    [EventType.Withdrawal]: ['text-red-600', 'bg-red-400/25'],
    [EventType.Deposit]: ['text-green-600', 'bg-green-400/25'],
  }[type];

  return (
    <span
      className={clsxm(
        `block inline-flex h-8 w-8 items-center justify-center rounded-full text-base`,
        colorClasses
      )}
    >
      <Icon className={'block'} />
    </span>
  );
}
