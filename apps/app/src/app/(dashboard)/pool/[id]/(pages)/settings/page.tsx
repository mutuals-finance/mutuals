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
  const { name, description } = await getPoolDetailsFromRouteParams(params);

  const defaultValues = {
    name,
    description,
    image: undefined,
  };

  return (
    <ContentCard title={"Modify Metadata"}>
      <PoolMetadataForm defaultValues={defaultValues} />
    </ContentCard>
  );
}
