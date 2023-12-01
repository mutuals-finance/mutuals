import { Box, Container, Grid, GridItem, Stack } from '@chakra-ui/react';

import { Activity } from './Activity';
import { Assets } from './Assets';
import { Handlers } from './Handlers';
import { Header } from './Header';
import { Payers } from './Payers';
import { Shares } from './Shares';
import { Sidebar } from './Sidebar';

export function OverviewTab() {
  return (
    <Stack direction={'row'} gap={'0'}>
      <Box flex={'1'}>
        <Container maxW={'container.lg'}>
          <Grid templateColumns='repeat(2, 1fr)' gap={'6'} w={'full'}>
            <GridItem colSpan={2}>
              <Header />
            </GridItem>
            <GridItem colSpan={2}>
              <Handlers />
            </GridItem>
            <GridItem colSpan={{ base: 2, '2xl': 1 }}>
              <Shares />
            </GridItem>
            <GridItem colSpan={{ base: 2, '2xl': 1 }}>
              <Payers />
            </GridItem>
            <GridItem colSpan={2}>
              <Assets />
            </GridItem>
            <GridItem colSpan={2}>
              <Activity />
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Sidebar />
    </Stack>
  );
}
