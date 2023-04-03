import { TokenTransfer } from '@ankr.com/ankr.js/dist/types';
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
    <>
      <span className={'block leading-snug'}>{type}</span>
      <Date
        className='text-lighter block leading-snug'
        timestamp={row.original.timestamp.toString()}
      />
    </>
  );
}
