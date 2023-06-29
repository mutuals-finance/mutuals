import React from 'react';

import TabPage from '@/components/TabPage';

import { useSplit } from '@/context/SplitContext';
import { Assets } from '@/templates/split/details/OverviewTab/Assets';

import { Activity } from './Activity';
import { Details } from './Details';
import { Shares } from './Shares';

export function OverviewTab() {
  return (
    <TabPage>
      <div className={'grid gap-3 lg:grid-cols-6 lg:gap-6'}>
        <Details />
        <Assets />
        <Shares />
        <Activity />
      </div>
    </TabPage>
  );
}
