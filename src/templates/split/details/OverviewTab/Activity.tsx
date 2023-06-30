import React from 'react';

import ActivityTable from '@/components/ActivityTable';
import Box from '@/components/ContentCard';

import { useSplit } from '@/context/SplitContext';

export function Activity() {
  const { split, transfers } = useSplit();

  return (
    <Box
      title={'Activity'}
      bodyProps={{ p: '0', maxHeight: 'sm', overflowY: 'auto' }}
    >
      <ActivityTable transfers={transfers?.transfers} address={split.address} />
    </Box>
  );
}
