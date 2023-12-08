import {
  Box,
  BoxProps,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';

import SidebarComponent from '@/components/Sidebar';

import { useSplit } from '@/context/SplitContext';
import { DepositTab } from '@/templates/split/overview/Sidebar/DepositTab';
import { WithdrawTab } from '@/templates/split/overview/Sidebar/WithdrawTab';

export function Sidebar({ ...props }: BoxProps) {
  const { sidebar } = useSplit();
  const sidebarWidth = '24rem';

  return (
    <SidebarComponent
      isOpen={sidebar.isOpen}
      top={'4rem'}
      h={'calc(100vh - 4rem)'}
      placement={'right'}
      w={sidebarWidth}
      overflow={'hidden'}
      {...props}
    >
      <Box position={'absolute'} inset={'0'} w={sidebarWidth}>
        <Tabs
          isFitted
          colorScheme={'primary'}
          index={sidebar.tab === 'DEPOSIT' ? 1 : 0}
        >
          <TabList>
            <Tab>Withdraw</Tab>
            <Tab>Deposit</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <WithdrawTab />
            </TabPanel>
            <TabPanel>
              <DepositTab />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </SidebarComponent>
  );
}
