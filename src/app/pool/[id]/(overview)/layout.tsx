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
import { headers } from 'next/headers';

interface PoolOverviewLayoutProps {
  params: {
    id: string;
  };
}

const tabs = [
  {
    title: 'Withdraw',
    href: '/pool/maticmum:0x84f36e3afa3d0994401b24f1eabd4fddbdc715db/withdraw',
  },
  {
    title: 'Deposit',
    href: '/pool/maticmum:0x84f36e3afa3d0994401b24f1eabd4fddbdc715db/deposit',
  },
];

export default async function PoolOverviewLayout({
  children,
  params,
}: PropsWithChildren<PoolOverviewLayoutProps>) {
  const id = decodePrefixedAddress(params.id);
  const address = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';
  const isSidebarOpen = tabs.some(({ href }) =>
    href.includes((children as any)?.props?.childPropSegment ?? ''),
  );

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
    <Stack direction={'row'} gap={'0'} w={'full'}>
      <Box flex={'1'} w={'full'}>
        <Container maxW={'container.lg'} as={Stack} spacing={'6'}>
          <Header {...props} />
          <Handlers {...props} />
          <Shares {...props} />
          <Assets {...props} />
          <Activity {...props} />
        </Container>
      </Box>

      <Sidebar tabs={tabs} defaultOpen={isSidebarOpen}>
        {children}
      </Sidebar>
    </Stack>
  );
}
