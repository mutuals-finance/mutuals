'use client';

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

export default function PoolSidebar({ ...props }: BoxProps) {
  const sidebarWidth = '24rem';

  return (
    <SidebarComponent
      isOpen={true}
      top={'4rem'}
      h={'calc(100vh - 4rem)'}
      placement={'right'}
      w={sidebarWidth}
      overflow={'hidden'}
      {...props}
    >
      <Box position={'absolute'} inset={'0'} w={sidebarWidth}>
        <Tabs isFitted colorScheme={'primary'} index={1}>
          <TabList>
            <Tab>Withdraw</Tab>
            <Tab>Deposit</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {/*
              <WithdrawTab />
*/}
            </TabPanel>
            <TabPanel>
              {/*
              <DepositTab />
*/}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </SidebarComponent>
  );
}
