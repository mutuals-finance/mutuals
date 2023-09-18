import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

import TabPage from '@/components/TabPage';

import { Assets } from '@/templates/split/details/OverviewTab/Assets';
import { Payers } from '@/templates/split/details/OverviewTab/Payers';

import { Activity } from './Activity';
import { Shares } from './Shares';

export function OverviewTab() {
  return (
    <TabPage>
      <Grid templateColumns='repeat(6, 1fr)' gap={'6'}>
        <GridItem colSpan={{ base: 6, lg: 3 }}>
          <Shares />
        </GridItem>
        <GridItem colSpan={{ base: 6, lg: 3 }}>
          <Payers />
        </GridItem>
        <GridItem colSpan={6}>
          <Assets />
        </GridItem>
        <GridItem colSpan={6}>
          <Activity />
        </GridItem>
      </Grid>
    </TabPage>
  );
}
