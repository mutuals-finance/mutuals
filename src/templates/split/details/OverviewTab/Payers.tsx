import React from 'react';
import { useList } from 'react-use';

import { ShareFragmentFragment } from '@/lib/graphql/__generated__/graphql';

import ContentCard from '@/components/ContentCard';

import { useSplit } from '@/context/SplitContext';
import PayerTable from '@/templates/split/details/OverviewTab/PayerTable';

type ActivePayer = ShareFragmentFragment & { isActive?: boolean };

export function Payers() {
  const { split } = useSplit();
  const [payers] = useList<ActivePayer>(
    split.shares.map((s) => ({
      ...s,
      isActive: false,
    })),
  );

  return (
    <ContentCard
      title={'Earnings From'}
      flex='1'
      bodyProps={{ flex: '1', overflowY: 'auto', p: '0' }}
    >
      <PayerTable payers={payers} containerProps={{ flex: '1' }} />

      {/*
        <ShareItem
            key={index}
            onMouseOut={() => setInactive(index)}
            onMouseMove={() => setActive(index)}
            share={share}
            isActive={share.isActive}
        />
*/}
    </ContentCard>
  );
}
