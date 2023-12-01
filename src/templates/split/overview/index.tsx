import {Box, Container, Grid, GridItem, Stack} from '@chakra-ui/react';

import {Activity} from './Activity';
import {Assets} from './Assets';
import {Handlers} from './Handlers';
import {Header} from './Header';
import {Payers} from './Payers';
import {Shares} from './Shares';
import {Sidebar} from './Sidebar';

export default function SplitOverview() {
  return (
    <Stack direction={'row'} gap={'0'}>
      <Box flex={'1'}>
        <Container maxW={'container.lg'} as={Stack} spacing={"6"}>
          <Header/>
          <Handlers/>
          <Shares/>
          <Payers/>
          <Assets/>
          <Activity/>
        </Container>
      </Box>

      <Sidebar/>
    </Stack>
  );
}
