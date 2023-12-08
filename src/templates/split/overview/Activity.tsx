import React from 'react';

import ActivityTable from '@/components/ActivityTable';
import ContentCard from '@/components/ContentCard';

import { useSplit } from '@/context/SplitContext';

export function Activity() {
  const { split, transfers } = useSplit();

  return (
    <ContentCard
      title={'Activity'}
      bodyProps={{ p: '0', display: 'flex', maxHeight: 'sm' }}
    >
      <ActivityTable
        transfers={transfers?.transfers}
        address={split.address}
        size={'sm'}
        containerProps={{ flex: '1' }}
      />
    </ContentCard>
  );
}