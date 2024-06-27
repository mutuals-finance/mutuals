import { ipfsResolveData } from "@/utils";
import { FileWithPreview } from "@/components/Form/types";
import PoolMetadataForm from "@/app/(dashboard)/pool/[id]/(pages)/settings/MetadataForm";
import ContentCard from "@/components/ContentCard";
import { getPoolDetailsFromRouteParams } from "@/lib/split";
import { Metadata } from "next";

interface PoolSettingsPageProps {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "General Settings",
};

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
