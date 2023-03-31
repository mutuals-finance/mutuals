import React from 'react';

import { SplitDetailsFragmentFragment } from '@/lib/graphql/__generated__/graphql';
import { shortenAddress } from '@/lib/utils';

import Box from '@/components/Box';
import Date from '@/components/Date';
import Statistic from '@/components/Statistic';

type DetailsProps = SplitDetailsFragmentFragment;
export function Details({ ...split }: DetailsProps) {
  return (
    <Box className={'lg:col-span-6'} title={'Details'}>
      <div className={'grid w-full grid-cols-4 gap-4 lg:gap-8'}>
        <Statistic title={'Contract Address'}>
          {shortenAddress(split.address)}
        </Statistic>
        <Statistic title={'Creator'}>{shortenAddress(split.address)}</Statistic>
        <Statistic title={'Created At'}>
          <Date timestamp={split.timestamp} />
        </Statistic>
        <Statistic title={'Blockchain'}>Ethereum</Statistic>
        <Statistic suffix={'%'} title={'Total Shares'}>
          {split.totalShares}
        </Statistic>
        <Statistic title={'Total Transactions'}>{split.txCount}</Statistic>
        <Statistic title={'Contract Metadata'}>IPFS (Locked)</Statistic>
      </div>
    </Box>
  );
}
