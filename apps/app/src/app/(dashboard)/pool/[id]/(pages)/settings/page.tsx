import { getPool } from "@mutuals/graphql-client-nextjs/server";
import type { Metadata } from "next";
import PoolMetadataForm from "@/app/(dashboard)/pool/[id]/(pages)/settings/metadata-form";

export const metadata: Metadata = {
  title: "General Settings",
};

export default async function PoolSettingsPage({
  params,
}: PageProps<"/pool/[id]/settings">) {
  const defaultValues = {
    name: "",
    description: "",
    image: undefined,
  };

  const { id: slug } = await params;
  const { data: pool, error } = await getPool({
    variables: { slug },
  });

  if (!error && !!pool) {
    defaultValues.name = pool.name;
    defaultValues.description = pool.description;
  }

  return <PoolMetadataForm defaultValues={defaultValues} />;
}
