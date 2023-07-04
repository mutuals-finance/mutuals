import { Text } from '@chakra-ui/react';
import React from 'react';

import TabPage from '@/components/TabPage';

import { WithdrawForm } from '@/templates/split/details/WithdrawTab/WithdrawForm';

export function WithdrawTab() {
  return (
    <TabPage
      title={'Withdraw'}
      as={'section'}
      contentProps={{ maxWidth: '4xl' }}
    >
      <>
        <Text>
          Withdraw funds from your split. You may either withdraw for your own
          or distribute to all other recipients.
        </Text>
        <WithdrawForm />
      </>
    </TabPage>
  );
}
