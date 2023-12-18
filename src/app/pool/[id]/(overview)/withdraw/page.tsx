import { Stack, Text } from '@chakra-ui/react';
import { WithdrawForm } from '@/app/pool/[id]/(overview)/withdraw/WithdrawForm';
import React from 'react';

export default function PoolHandleWithdraw() {
  return (
    <Stack spacing='6'>
      <Text>
        Withdraw funds from your split. You may either withdraw for your own or
        distribute to all other recipients.
      </Text>
      {/*
      <WithdrawForm />
*/}
    </Stack>
  );
}
