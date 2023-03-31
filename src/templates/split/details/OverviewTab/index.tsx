import React from 'react';

import { Activity } from './Activity';
import { Analytics } from './Analytics';
import { Balance } from './Balance';
import { Details } from './Details';
import { Shares } from './Shares';

import { SplitTemplateTabProps } from '#/split';

export function OverviewTab({ balance, ...split }: SplitTemplateTabProps) {
  return (
    <section>
      <div className={'container grid gap-3 lg:grid-cols-6 lg:gap-6'}>
        <Balance {...balance} />
        <Shares shares={split.shares} />
        <Activity transactions={[]} />
        <Details {...split} />
        <Analytics />
      </div>
    </section>
  );
}
