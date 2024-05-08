import { Stack } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { decodePrefixedAddress } from '@/lib/utils';
import { getMetadata, getPoolDetails } from '@/lib/split';
import { useFragment } from '@/lib/graphql/__generated__';
import { splitBaseFragment } from '@/lib/graphql/fragments';

interface PoolSettingsLayoutProps {
  params: { id: string };
}

export default async function PoolDetailsLayout({
  children,
  params,
}: PropsWithChildren<PoolSettingsLayoutProps>) {
  const id = decodePrefixedAddress(params.id);
  const { data } = await getPoolDetails({ variables: { id } });
  const pool = useFragment(splitBaseFragment, data.split);
  const metaData = await getMetadata(pool?.metaDataUri);

  const props = {
    pool,
    metaData,
  };

  return <>{children}</>;
}
