import React from 'react';
import {
  IoCalendarOutline,
  IoGlobeOutline,
  IoHammerOutline,
} from 'react-icons/io5';

import { formatUSDPrice, shortenAddress } from '@/lib/utils';

import Box from '@/components/Box';
import Date from '@/components/Date';
import Statistic from '@/components/Statistic';

import { useSplit } from '@/context/SplitContext';

export function Details() {
  const { split, balance } = useSplit();

  return (
    <div className={'grid grid-cols-6 gap-3 lg:col-span-6 lg:gap-6'}>
      <Box className={'lg:col-span-3'}>
        <div className={'flex flex-1 flex-col space-y-3'}>
          <Statistic
            title={'Total Balance'}
            className={'text-5xl slashed-zero'}
          >
            {formatUSDPrice(balance?.totalBalanceUsd || '0')}
          </Statistic>

          <p className={'text-light text-right '}>
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
      <Box className={'lg:col-span-1'}>
        <div className={'flex flex-1 flex-col'}>
          <IoCalendarOutline
            className={'text-lighter mb-auto block self-end text-4xl'}
          />

          <Statistic title={'Created At'}>
            <Date timestamp={split.timestamp} />
          </Statistic>
        </div>
      </Box>
      <Box className={'flex-col justify-end lg:col-span-1'}>
        <div className={'flex flex-1 flex-col'}>
          <IoGlobeOutline
            className={'text-lighter mb-auto block self-end text-4xl'}
          />
          <Statistic title={'Chain'}>Ethereum</Statistic>
        </div>
      </Box>
      <Box className={'flex-col justify-end lg:col-span-1'}>
        <div className={'flex flex-1 flex-col '}>
          <IoHammerOutline
            className={'text-lighter mb-auto block self-end text-4xl'}
          />
          <Statistic title={'Creator'} className={'slashed-zero'}>
            {shortenAddress(split.address)}
          </Statistic>
        </div>
      </Box>
    </div>
  );
}