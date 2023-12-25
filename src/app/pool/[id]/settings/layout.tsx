import { Container, Heading, Stack } from '@chakra-ui/react';
import { PropsWithChildren, useCallback } from 'react';
import RouterTabs from '@/components/RouterTabs';
import Breadcrumbs from '@/components/Breadcrumbs';
import { decodePrefixedAddress } from '@/lib/utils';
import { getMetadata, getPoolDetails } from '@/lib/split';
import { useFragment } from '@/lib/graphql/__generated__';
import { splitBaseFragment } from '@/lib/graphql/fragments';

const breadcrumbItems = {
  'Payment Pool': { href: '/' },
  Owncloud: {
    href: '/pool/maticmum:0x84f36e3afa3d0994401b24f1eabd4fddbdc715db',
  },
  Settings: {
    isCurrentPage: true,
    href: '/pool/maticmum:0x84f36e3afa3d0994401b24f1eabd4fddbdc715db/settings',
  },
};

const tabs = [
  {
    title: 'General',
    href: '/pool/maticmum:0x84f36e3afa3d0994401b24f1eabd4fddbdc715db/settings',
  },
  {
    title: 'Notifications',
    href: '/pool/maticmum:0x84f36e3afa3d0994401b24f1eabd4fddbdc715db/settings/notifications',
  },
];

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
