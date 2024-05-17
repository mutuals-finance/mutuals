import { useFragment } from 'src/lib/graphql/thegraph/__generated__';
import { splitBaseFragment } from '@/lib/graphql/thegraph/fragments';
import { getMetadata, getPoolDetails } from '@/lib/split';
import { decodePrefixedAddress, ipfsResolveData } from '@/lib/utils';
import { FileWithPreview } from '@/components/Form/types';
import PoolMetadataForm from '@/app/(dashboard)/pool/[id]/(content)/settings/MetadataForm';
import ContentCard from '@/components/ContentCard';

interface PoolSettingsPageProps {
  params: { id: string };
}

export default async function PoolSettingsPage({
  params,
}: PoolSettingsPageProps) {
  const id = decodePrefixedAddress(params.id);
  const { data } = await getPoolDetails({ variables: { id } });

  const pool = useFragment(splitBaseFragment, data.split);

  const metaData = await getMetadata(pool?.metaDataUri);

  const defaultValues = {
    ...metaData,
    image: (metaData.image
      ? { preview: ipfsResolveData(metaData.image) }
      : undefined) as unknown as FileWithPreview,
  };

  return (
    <ContentCard title={'Modify Metadata'}>
      <PoolMetadataForm defaultValues={defaultValues} />
    </ContentCard>
  );
}
