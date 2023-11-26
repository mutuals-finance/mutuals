import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

import TabPage from '@/components/TabPage';

import { Assets } from '@/templates/split/details/OverviewTab/Assets';
import { Payers } from '@/templates/split/details/OverviewTab/Payers';

import { Activity } from './Activity';
import { Shares } from './Shares';

export function OverviewTab() {
  return (
    <Container maxW={'container.lg'} w={'full'}>
      <Box w={'full'}>
        <Stack spacing='6' w={'full'}>
          <Grid templateColumns='repeat(6, 1fr)' gap={'6'} w={'full'}>
            <GridItem colSpan={{ base: 6, '2xl': 3 }}>
              <Shares />
            </GridItem>
            <GridItem colSpan={{ base: 6, '2xl': 3 }}>
              <Payers />
            </GridItem>
            <GridItem colSpan={6}>
              <Assets />
            </GridItem>
            <GridItem colSpan={6}>
              <Activity />
            </GridItem>
          </Grid>
        </Stack>
      </Box>
    </Container>
  );
}
