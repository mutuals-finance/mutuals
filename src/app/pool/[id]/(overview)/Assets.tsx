import React from 'react';

import AssetTable from '@/components/AssetTable';
import ContentCard from '@/components/ContentCard';

import { useSplit } from '@/context/SplitContext';
import { usePool } from '@/context/PoolContext';
import { getAccountBalance } from '@/lib/ankr';
import { GetAccountBalanceReply } from '@ankr.com/ankr.js';

export default function Assets({
  balance,
}: {
  balance?: GetAccountBalanceReply;
}) {
  return (
    <ContentCard
      title={'Assets'}
      bodyProps={{ p: '0', display: 'flex', maxHeight: 'sm' }}
    >
      <AssetTable
        assets={balance?.assets?.slice(0, 6)}
        size={'sm'}
        containerProps={{ flex: '1' }}
      />
    </ContentCard>
  );
}
