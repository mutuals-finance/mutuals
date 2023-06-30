import React from 'react';
import { IoGlobeOutline } from 'react-icons/io5';

import Box from '@/components/ContentCard';
import Statistic from '@/components/Statistic';

export function ChainInfo() {
  return (
    <Box>
      <div className={'flex flex-1 flex-col'}>
        <IoGlobeOutline
          className={'text-lighter mb-auto block self-end text-4xl'}
        />
        <Statistic title={'Chain'}>Ethereum</Statistic>
      </div>
    </Box>
  );
}
