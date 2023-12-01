import React from 'react';

import AssetTable from '@/components/AssetTable';
import ContentCard from '@/components/ContentCard';

import { useSplit } from '@/context/SplitContext';

export function Assets() {
  const { balance } = useSplit();
  return (
    <ContentCard
      title={'Assets'}
      bodyProps={{ p: '0', display: 'flex', maxHeight: 'sm' }}
    >
      <AssetTable
        assets={balance?.assets.slice(0, 6)}
        size={'sm'}
        containerProps={{ flex: '1' }}
      />
    </ContentCard>
  );
}
