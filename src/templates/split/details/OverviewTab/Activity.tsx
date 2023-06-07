import React from 'react';

import ActivityTable from '@/components/ActivityTable';
import Box from '@/components/Box';

import { useSplit } from '@/context/SplitContext';

export function Activity() {
  const { split, transfers } = useSplit();

  return (
    <Box
      title={'Activity'}
      className={'lg:col-span-6'}
      innerClassName={'p-0 lg:p-0 overflow-y-auto max-h-72'}
    >
      <ActivityTable transfers={transfers?.transfers} address={split.address} />
    </Box>
  );
}
