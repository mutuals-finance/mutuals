import React from 'react';
import { IoCalendarOutline } from 'react-icons/io5';

import Box from '@/components/ContentCard';
import Date from '@/components/Date';
import Statistic from '@/components/Statistic';

import { useSplit } from '@/context/SplitContext';

export function CreationDate() {
  const { split } = useSplit();

  return (
    <Box>
      <div className={'flex flex-1 flex-col'}>
        <IoCalendarOutline
          className={'text-lighter mb-auto block self-end text-4xl'}
        />

        <Statistic title={'Created At'}>
          <Date timestamp={split.timestamp} />
        </Statistic>
      </div>
    </Box>
  );
}
