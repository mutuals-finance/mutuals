import { Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

import ContentCard from '@/components/ContentCard';
import TabPage from '@/components/TabPage';

import { useSplit } from '@/context/SplitContext';
import { ChainInfo } from '@/templates/split/details/OverviewTab/ChainInfo';
import { CreationDate } from '@/templates/split/details/OverviewTab/CreationDate';
import { Creator } from '@/templates/split/details/OverviewTab/Creator';

export function AboutTab() {
  const { split } = useSplit();

  return (
    <TabPage title={'About'} as={'section'}>
      <Grid templateColumns={'repeat(6, 1fr)'} gap={'6'}>
        <GridItem colSpan={3}>
          <ContentCard variant={'unstyled'}>
            <Text>{split.metaData.description}</Text>
          </ContentCard>
        </GridItem>
        <GridItem>
          <CreationDate />
        </GridItem>
        <GridItem>
          <ChainInfo />
        </GridItem>
        <GridItem>
          <Creator />
        </GridItem>
      </Grid>
    </TabPage>
  );
}
