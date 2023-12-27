import { Container, Heading, Stack } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import RouterTabs from '@/components/RouterTabs';
import Breadcrumbs from '@/components/Breadcrumbs';
import { decodePrefixedAddress } from '@/lib/utils';
import { getMetadata, getPoolDetails } from '@/lib/split';
import { useFragment } from '@/lib/graphql/__generated__';
import { splitBaseFragment } from '@/lib/graphql/fragments';
import SectionContainer from '@/components/Shell/SectionContainer';

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
      href: `/pool/maticmum:${pool?.address}/settings/notifications`,
    },
  ];

  return (
    <SectionContainer as={'header'}>
      <Heading as={'h1'} size={'2xl'}>
        Settings
      </Heading>

      <RouterTabs my={'6'} tabs={tabs}>
        {children}
      </RouterTabs>
    </SectionContainer>
  );
}
