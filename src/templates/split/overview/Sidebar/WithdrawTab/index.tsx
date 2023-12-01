import { Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

import TabPage from '@/components/TabPage';

import { WithdrawForm } from '@/templates/split/overview/Sidebar/WithdrawTab/WithdrawForm';

export function WithdrawTab() {
  return (
    <Stack spacing='6'>
      <Text>
        Withdraw funds from your split. You may either withdraw for your own or
        distribute to all other recipients.
      </Text>
      <WithdrawForm />
    </Stack>
  );
}
