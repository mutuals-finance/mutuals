import {
  Box,
  BoxProps,
  Heading,
  HStack,
  IconButton,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from '@chakra-ui/react';
import { InferGetServerSidePropsType } from 'next';
import React from 'react';
import { useToggle } from 'react-use';

import AnimationBox from '@/components/Animation/Box';

import { SplitProvider } from '@/context/SplitContext';
import Header from '@/layouts/split-details/Header';
import { getServerSideProps } from '@/pages/splits/[id]/[...slug]';
import { DepositTab } from '@/templates/split/details/OverviewTab/DepositTab';
import { WithdrawTab } from '@/templates/split/details/OverviewTab/WithdrawTab';

function SplitDetailsSidebar({
  isOpen,
  ...props
}: BoxProps & { isOpen: boolean }) {
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
      animate={isOpen ? 'open' : 'closed'}
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
        <Tabs isFitted colorScheme={'primary'}>
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
export default function SplitDetailsLayout({
  children,
  split,
}: React.PropsWithChildren<
  InferGetServerSidePropsType<typeof getServerSideProps>
>) {
  const [isOpen, toggleIsOpen] = useToggle(true);

  return (
    <Box w={'full'}>
      <SplitProvider split={split}>
        <Stack direction={'row'} gap={'0'}>
          <Box flex={'1'} w={'full'}>
            <Header toggleSidebar={toggleIsOpen} />
            {children}
          </Box>

          <SplitDetailsSidebar isOpen={isOpen} />
        </Stack>
      </SplitProvider>
    </Box>
  );
}
