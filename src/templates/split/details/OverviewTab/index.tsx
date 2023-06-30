import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

import TabPage from '@/components/TabPage';

import { useSplit } from '@/context/SplitContext';
import { Assets } from '@/templates/split/details/OverviewTab/Assets';
import { ChainInfo } from '@/templates/split/details/OverviewTab/ChainInfo';
import { CreationDate } from '@/templates/split/details/OverviewTab/CreationDate';
import { Creator } from '@/templates/split/details/OverviewTab/Creator';

import { Activity } from './Activity';
import { Shares } from './Shares';
import { TotalBalance } from './TotalBalance';

export function OverviewTab() {
  return (
    <TabPage>
      <Grid templateColumns='repeat(6, 1fr)' gap={'6'}>
        <GridItem colSpan={3}>
          <TotalBalance />
        </GridItem>
        <GridItem>
          <ChainInfo />
        </GridItem>
        <GridItem>
          <Creator />
        </GridItem>
        <GridItem>
          <CreationDate />
        </GridItem>
        <GridItem colSpan={3}>
          <Assets />
        </GridItem>
        <GridItem colSpan={3}>
          <Shares />
        </GridItem>
        <GridItem colSpan={6}>
          <Activity />
        </GridItem>
      </Grid>
    </TabPage>
  );
}
