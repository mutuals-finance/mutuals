import { Stack, Text } from '@chakra-ui/react';
import { decodePrefixedAddress } from '@/lib/utils';
import { getPoolDetailsWithShares } from '@/lib/split';

import WithdrawForm from '@/app/pool/[id]/(overview)/withdraw/WithdrawForm';
import { getAccountBalance } from '@/lib/ankr';

interface PoolHandleWithdrawProps {
  params: {
    id: string;
  };
}

export default async function PoolHandleWithdraw({
  params,
}: PoolHandleWithdrawProps) {
  const id = decodePrefixedAddress(params.id);
  const address = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';
  const queries = await Promise.all([
    getPoolDetailsWithShares({ variables: { id } }),
    getAccountBalance({ walletAddress: address, blockchain: 'eth' }),
  ]);

  const props = {
    pool: queries[0].data.split,
    shares: queries[0].data.split?.shares,
    balance: queries[1],
  };

  return (
    <Stack overflowY={'auto'} flex={'1'} p='6' spacing={'3'}>
      <Text>
        Withdraw funds from your Payment Pool. You may either withdraw for your
        own or distribute to all other recipients.
      </Text>
      <WithdrawForm {...props} />
    </Stack>
  );
}
