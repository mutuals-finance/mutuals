import { getClient } from '@/lib/graphql/apolloClient';
import { POOL } from '@/lib/graphql/queries';
import { useFragment } from '@/lib/graphql/__generated__';
import { splitBaseFragment } from '@/lib/graphql/fragments';
import { getMetadata } from '@/lib/split';
import { ipfsResolveData } from '@/lib/utils';
import PoolMetadataForm from '@/app/pool/[id]/settings/MetadataForm';
import { FileWithPreview } from '@/components/Form/types';

function getPool({ id }: { id: string }) {
  return getClient().query({
    query: POOL,
    variables: { id },
  });
}

export default async function PoolSettingsPage() {
  const id = '0x84f36e3afa3d0994401b24f1eabd4fddbdc715db'.toLowerCase();
  const { data } = await getPool({ id });

  const pool = useFragment(splitBaseFragment, data.split);

  const metaData = await getMetadata(pool?.metaDataUri);

  const defaultValues = {
    ...metaData,
    image: (metaData.image
      ? { preview: ipfsResolveData(metaData.image) }
      : undefined) as unknown as FileWithPreview,
  };

  return <PoolMetadataForm defaultValues={defaultValues} />;
}
