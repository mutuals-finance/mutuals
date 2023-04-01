import React from 'react';

import AssetTable from '@/components/AssetTable';

import { SplitTemplateTabProps } from '#/split';

export function AssetsTab({ balance }: SplitTemplateTabProps) {
  return (
    <section>
      <div className={'container'}>
        <h2 className={'title-3 mb-6'}>Assets</h2>
        <AssetTable assets={balance?.assets} />
      </div>
    </section>
  );
}
