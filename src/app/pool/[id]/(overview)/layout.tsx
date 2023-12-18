import { Box, Container, Stack } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import Sidebar from '@/app/pool/[id]/(overview)/Sidebar';
import { getAccountBalance, getTokenTransfers } from '@/lib/ankr';
import { useFragment } from '@/lib/graphql/__generated__';
import { splitBaseFragment } from '@/lib/graphql/fragments';
import { getMetadata, getPoolDetailsWithShares } from '@/lib/split';
import Header from '@/app/pool/[id]/(overview)/Header';
import Handlers from '@/app/pool/[id]/(overview)/Handlers';
import Shares from '@/app/pool/[id]/(overview)/Shares';
import Assets from '@/app/pool/[id]/(overview)/Assets';
import Activity from '@/app/pool/[id]/(overview)/Activity';
import { decodePrefixedAddress } from '@/lib/utils';

interface PoolOverviewLayoutProps {
  params: {
    id: string;
  };
}

export default async function PoolOverviewLayout({
  children,
  params,
}: PropsWithChildren<PoolOverviewLayoutProps>) {
  const id = decodePrefixedAddress(params.id);
  const address = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';
  const queries = await Promise.all([
    getPoolDetailsWithShares({ variables: { id } }),
    getAccountBalance({ walletAddress: address, blockchain: 'eth' }),
    getTokenTransfers({ address: [address], blockchain: 'eth' }),
  ]);

  const poolWithSharesData = queries[0]?.data;
  const pool = useFragment(splitBaseFragment, poolWithSharesData.split);

  const metaData = await getMetadata(pool?.metaDataUri);

  const props = {
    pool,
    shares: poolWithSharesData?.split?.shares,
    metaData,
    balance: queries[1]!,
    activity: queries[2]!,
  };

  return (
    <Stack direction={'row'} gap={'0'}>
      <Box flex={'1'}>
        <Container maxW={'container.lg'} as={Stack} spacing={'6'}>
          <Header {...props} />
          <Handlers {...props} />
          <Shares {...props} />
          <Assets {...props} />
          <Activity {...props} />
        </Container>
      </Box>

      <Sidebar>{children}</Sidebar>
    </Stack>
  );
}
