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

export function TotalBalance() {
  const { balance } = useSplit();

  return (
    <Box>
      <div className={'flex flex-1 flex-col space-y-6'}>
        <Statistic
          title={'Total Balance'}
          className={'text-4xl slashed-zero leading-snug lg:text-5xl'}
        >
          {formatUSDPrice(balance?.totalBalanceUsd || '0')}
        </Statistic>

        <p className={'text-lighter text-right text-sm lg:text-base'}>
          {balance?.assets
            ?.sort(({ balanceRawInteger }) => Number(balanceRawInteger))
            .slice(0, 2)
            .map(({ tokenName }, i) => (
              <span key={i}>
                <span>{tokenName}</span>
                {i < 1 ? ', ' : ' '}
              </span>
            ))}
          and {(balance?.assets?.length || 0) - 2} more
        </p>
      </div>
    </Box>
  );
}
