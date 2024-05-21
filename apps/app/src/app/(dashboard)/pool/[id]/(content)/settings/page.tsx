import { ipfsResolveData } from "@/lib/utils";
import { FileWithPreview } from "@/components/Form/types";
import PoolMetadataForm from "@/app/(dashboard)/pool/[id]/(content)/settings/MetadataForm";
import ContentCard from "@/components/ContentCard";
import { getPoolDetailsFromRouteParams } from "@/lib/split";

interface PoolSettingsPageProps {
  params: { id: string };
}

export default async function PoolSettingsPage({
  params,
}: PoolSettingsPageProps) {
  const pool = await getPoolDetailsFromRouteParams(params);

  const defaultValues = {
    ...pool.metaData,
    image: (pool.metaData.image
      ? { preview: ipfsResolveData(pool.metaData.image) }
      : undefined) as FileWithPreview,
  };

  return (
    <ContentCard title={"Modify Metadata"}>
      <PoolMetadataForm defaultValues={defaultValues} />
    </ContentCard>
  );
}
