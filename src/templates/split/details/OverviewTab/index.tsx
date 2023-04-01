import React from 'react';

import { Assets } from '@/templates/split/details/OverviewTab/Assets';

import { Activity } from './Activity';
import { Analytics } from './Analytics';
import { Balance as Details } from './Balance';
import { Shares } from './Shares';

import { SplitTemplateTabProps } from '#/split';

export function OverviewTab({
  balance,
  transfers,
  ...split
}: SplitTemplateTabProps) {
  return (
    <section>
      <div className={'container grid gap-3 lg:grid-cols-6 lg:gap-6'}>
        <Details {...balance} {...split} />
        <Assets {...balance} />
        <Shares shares={split.shares} />
        <Activity transfers={transfers} {...split} />
        <Analytics />
      </div>
    </section>
  );
}
