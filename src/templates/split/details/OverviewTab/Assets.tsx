import React from 'react';

import AssetTable from '@/components/AssetTable';
import ContentCard from '@/components/ContentCard';

import { useSplit } from '@/context/SplitContext';

export function Assets() {
  const { balance } = useSplit();
  return (
    <ContentCard
      title={'Assets'}
      bodyProps={{ p: '0', maxHeight: 'sm', overflowY: 'auto' }}
    >
      <AssetTable assets={balance?.assets} size={'sm'} />
    </ContentCard>
  );
}
