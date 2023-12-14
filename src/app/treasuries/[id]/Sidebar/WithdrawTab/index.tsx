import { Stack, Text } from '@chakra-ui/react';
import React from 'react';

import { WithdrawForm } from '@/app/treasuries/[id]/Sidebar/WithdrawTab/WithdrawForm';

export default function WithdrawTab() {
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
