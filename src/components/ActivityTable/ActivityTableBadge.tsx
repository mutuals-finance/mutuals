import {
  IoArrowDownOutline,
  IoArrowUpOutline,
  IoLinkOutline,
} from 'react-icons/io5';
import { EventType } from './types';
import React from 'react';
import clsxm from '@/lib/utils/clsxm';

export default function ActivityTableBadge({ type }: { type: EventType }) {
  let Icon;
  switch (type) {
    case EventType.Deposit:
      Icon = IoArrowDownOutline;
      break;
    case EventType.Withdrawal:
      Icon = IoArrowUpOutline;
      break;
    default:
      Icon = IoLinkOutline;
  }

  const colorClasses = {
    [EventType.Withdrawal]: ['border-red-500', ' text-red-500'],
    [EventType.Deposit]: ['border-green-500', 'text-green-500'],
    [EventType.ContractURIUpdate]: ['border-purple-500', 'text-purple-500'],
  }[type];

  return (
    <span
      className={clsxm(
        `block inline-flex items-center justify-center space-x-1 rounded-full border px-2  py-1 text-xs font-semibold`,
        colorClasses
      )}
    >
      <Icon className={'block'} />
      <span className={'block'}>{type}</span>
    </span>
  );
}
