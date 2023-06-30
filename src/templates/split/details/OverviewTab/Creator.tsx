import React from 'react';
import {
  IoCalendarOutline,
  IoGlobeOutline,
  IoHammerOutline,
} from 'react-icons/io5';

import { formatUSDPrice, shortenAddress } from '@/lib/utils';

import Box from '@/components/ContentCard';
import Date from '@/components/Date';
import Statistic from '@/components/Statistic';

import { useSplit } from '@/context/SplitContext';

export function Creator() {
  const { split } = useSplit();

  return (
    <Box>
      <div className={'flex flex-1 flex-col '}>
        <IoHammerOutline
          className={'text-lighter mb-auto block self-end text-4xl'}
        />
        <Statistic title={'Creator'} className={'slashed-zero'}>
          {shortenAddress(split.address)}
        </Statistic>
      </div>
    </Box>
  );
}
