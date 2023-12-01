import {
  Box,
  BoxProps,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

import AnimationBox from '@/components/Animation/Box';

import { useSplit } from '@/context/SplitContext';
import { DepositTab } from '@/templates/split/details/OverviewTab/DepositTab';
import { WithdrawTab } from '@/templates/split/details/OverviewTab/WithdrawTab';

export function Sidebar({ ...props }: BoxProps) {
  const { sidebar } = useSplit();

  return (
    <AnimationBox
      position={'sticky'}
      top={'64px'}
      h={'calc(100vh - 4rem)'}
      overflowY={'auto'}
      borderLeft={'1px'}
      bg={'bg.1'}
      right={'0'}
      overflow={'hidden'}
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      animate={sidebar.isOpen ? 'open' : 'closed'}
      variants={{
        open: {
          width: '24rem',
        },
        closed: {
          width: '0',
        },
      }}
      {...props}
    >
      <Box position={'absolute'} top={'0'} left={'0'} h={'full'} w={'24rem'}>
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
    </AnimationBox>
  );
}
