import { PropsWithChildren } from 'react';
import RouterTabs from '@/components/RouterTabs';
import { decodePrefixedAddress } from '@/lib/utils';
import { getMetadata, getPoolDetails } from '@/lib/split';
import { useFragment } from 'src/lib/graphql/thegraph/__generated__';
import { splitBaseFragment } from '@/lib/graphql/thegraph/fragments';
import PageShell from '@/components/Shell/PageShell';

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
      title: 'Security',
      href: `/pool/maticmum:${pool?.address}/settings/security`,
    },
    {
      title: 'Notifications',
      href: `/pool/maticmum:${pool?.address}/settings/notifications`,
    },
  ];

  return (
    <PageShell breadcrumbsEnabled={false} title={'Settings'}>
      <RouterTabs tabs={tabs} mb={'6'}>
        {children}
      </RouterTabs>
    </PageShell>
  );
}
