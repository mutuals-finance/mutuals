import PoolMetadataForm from "@/app/(dashboard)/pool/[id]/(pages)/settings/MetadataForm";
import ContentCard from "@/components/ContentCard";
import { getPoolDetailsFromRouteParams } from "@/lib/split";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Settings",
};

export default async function PoolSettingsPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { name, description } = await getPoolDetailsFromRouteParams(
    await params,
  );

  const defaultValues = {
    name: name ?? "",
    description: description ?? "",
    image: undefined,
  };

  return (
    <ContentCard title={"Modify Metadata"}>
      <PoolMetadataForm defaultValues={defaultValues} />
    </ContentCard>
  );
}
