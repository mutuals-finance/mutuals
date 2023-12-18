import { Box, Container, Stack } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import Sidebar from '@/app/pool/[id]/(overview)/Sidebar';
import WithdrawTab from '@/app/pool/[id]/(overview)/withdraw/page';
import DepositTab from '@/app/pool/[id]/(overview)/deposit/page';
import { getClient } from '@/lib/graphql/apolloClient';
import { POOL, SHARES_BY_POOL } from '@/lib/graphql/queries';
import { getAccountBalance, getTokenTransfers } from '@/lib/ankr';
import { useFragment } from '@/lib/graphql/__generated__';
import { splitBaseFragment } from '@/lib/graphql/fragments';
import { getMetadata } from '@/lib/split';
import Header from '@/app/pool/[id]/(overview)/Header';
import Handlers from '@/app/pool/[id]/(overview)/Handlers';
import Shares from '@/app/pool/[id]/(overview)/Shares';
import Assets from '@/app/pool/[id]/(overview)/Assets';
import Activity from '@/app/pool/[id]/(overview)/Activity';
import { useSearchParam } from 'react-use';

function getPool({ id }: { id: string }) {
  return getClient().query({
    query: POOL,
    variables: { id },
  });
}

function getShares({ id }: { id: string }) {
  return getClient().query({
    query: SHARES_BY_POOL,
    variables: { pool: id },
  });
}

export default async function PoolOverviewLayout({
  children,
}: PropsWithChildren) {
  const id = '0x84f36e3afa3d0994401b24f1eabd4fddbdc715db'.toLowerCase();
  const queries = await Promise.all([
    getPool({ id }),
    getShares({ id }),
    getAccountBalance({ walletAddress: id, blockchain: 'eth' }),
    getTokenTransfers({ address: [id], blockchain: 'eth' }),
  ]);

  const pool = useFragment(splitBaseFragment, queries[0].data.split);

  const metaData = await getMetadata(pool?.metaDataUri);

  const props = {
    pool,
    metaData,
    shares: queries[1].data.shares,
    balance: queries[2]!,
    activity: queries[3]!,
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
