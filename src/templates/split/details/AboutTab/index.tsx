import { Icon } from '@chakra-ui/icon';
import { Grid, GridItem, Text, useColorModeValue } from '@chakra-ui/react';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat';
import React from 'react';
import {
  IoCalendarOutline,
  IoInformation,
  IoInformationCircle,
  IoInformationCircleOutline,
} from 'react-icons/io5';

import ContentCard from '@/components/ContentCard';
import Date from '@/components/Date';
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
          <ContentCard>
            <Icon
              as={IoInformationCircleOutline}
              fontSize={'2xl'}
              mb={'auto'}
              color={useColorModeValue('gray.500', 'gray.400')}
            />

            <Stat mt={'3'}>
              <StatLabel>Description</StatLabel>
              <Text>{split.metaData.description}</Text>
            </Stat>
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
