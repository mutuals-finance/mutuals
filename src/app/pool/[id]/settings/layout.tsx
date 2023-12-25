import { Container, Heading, Stack } from '@chakra-ui/react';
import { PropsWithChildren, useCallback } from 'react';
import RouterTabs from '@/components/RouterTabs';
import Breadcrumbs from '@/components/Breadcrumbs';
import { decodePrefixedAddress } from '@/lib/utils';
import { getMetadata, getPoolDetails } from '@/lib/split';
import { useFragment } from '@/lib/graphql/__generated__';
import { splitBaseFragment } from '@/lib/graphql/fragments';

interface PoolSettingsLayoutProps {
  params: { id: string };
}

export default async function PoolSettingsLayout({
  children,
  params,
}: PropsWithChildren<PoolSettingsLayoutProps>) {
  const id = decodePrefixedAddress(params.id);
  const { data } = await getPoolDetails({ variables: { id } });

  const pool = useFragment(splitBaseFragment, data.split);

  const metaData = await getMetadata(pool?.metaDataUri);

  const tabs = [
    {
      title: 'General',
      href: `/pool/maticmum:${pool?.address}/settings`,
    },
    {
      title: 'Notifications',
      href: `/pool/maticmum:${pool?.address}/notifications`,
    },
  ];

  return (
    <Container maxW={'container.lg'}>
      <Stack as={'header'} spacing={'6'} my={'12'}>
        <Breadcrumbs
          overwrite={{
            pool: 'Payment Pools',
            id: metaData.name,
          }}
        />

        <Heading size={'2xl'}>Settings</Heading>
      </Stack>

      <RouterTabs my={'6'} tabs={tabs}>
        {children}
      </RouterTabs>
    </Container>
  );
}
