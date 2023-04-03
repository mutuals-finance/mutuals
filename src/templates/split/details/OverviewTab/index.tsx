import React from 'react';

import { useSplit } from '@/context/SplitContext';
import { Assets } from '@/templates/split/details/OverviewTab/Assets';

import { Activity } from './Activity';
import { Analytics } from './Analytics';
import { Details } from './Details';
import { Shares } from './Shares';

export function OverviewTab() {
  const { split, transfers, balance } = useSplit();

  return (
    <section>
      <div className={'container grid gap-3 lg:grid-cols-6 lg:gap-6'}>
        <Details {...balance} {...split} />
        <Assets {...balance} />
        <Shares shares={split.shares} />
        <Activity transfers={transfers?.transfers} {...split} />
        <Analytics />
      </div>
    </section>
  );
}
