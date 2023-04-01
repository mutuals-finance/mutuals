import React from 'react';

import ActivityTable from '@/components/ActivityTable';

import { SplitTemplateTabProps } from '#/split';

export function ActivityTab({ address, transfers }: SplitTemplateTabProps) {
  return (
    <section>
      <div className={'container'}>
        <h2 className={'title-3 mb-6'}>Activity</h2>
        <ActivityTable address={address} transfers={transfers} />
      </div>
    </section>
  );
}
