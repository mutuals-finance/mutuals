import React from 'react';

import AssetTable from '@/components/AssetTable';
import Box from '@/components/Box';

import { useSplit } from '@/context/SplitContext';

export function Assets() {
  const { balance } = useSplit();
  return (
    <Box
      title={'Assets'}
      className={'lg:col-span-3'}
      innerClassName={'p-0 lg:p-0 overflow-y-auto max-h-72'}
    >
      <AssetTable assets={balance?.assets} />
    </Box>
  );
}
