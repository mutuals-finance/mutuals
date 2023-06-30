import React from 'react';

import AssetTable from '@/components/AssetTable';
import Box from '@/components/ContentCard';

import { useSplit } from '@/context/SplitContext';

export function Assets() {
  const { balance } = useSplit();
  return (
    <Box
      title={'Assets'}
      bodyProps={{ p: '0', maxHeight: 'sm', overflowY: 'auto' }}
    >
      <AssetTable assets={balance?.assets} />
    </Box>
  );
}
