import { Stack } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { decodePrefixedAddress } from '@/lib/utils';
import { getMetadata, getPoolDetails } from '@/lib/split';
import { useFragment } from '@/lib/graphql/__generated__';
import { splitBaseFragment } from '@/lib/graphql/fragments';
import PoolHeaderTitle from '@/app/pool/[id]/HeaderTitle';
import PoolHeaderButtonGroup from '@/app/pool/[id]/HeaderButtonGroup';

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

  return (
    <>
      <Stack
        as={'header'}
        position='sticky'
        top={{ base: '5rem', md: '3.4rem' }}
        left={'0'}
        h={{ base: '3rem', lg: '2.6rem' }}
        bg={'bg.1'}
        borderBottom={'1px solid'}
        borderColor={'border.1'}
        zIndex={'49'}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        spacing={'6'}
        gap={'0'}
        px={{ base: '6', lg: '12' }}
      >
        <PoolHeaderTitle {...props} />
        <PoolHeaderButtonGroup {...props} />
      </Stack>

      {children}
    </>
  );
}
