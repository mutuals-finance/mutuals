import { getPool } from "@mutuals/graphql-client-nextjs/server";
import type { Metadata } from "next";
import PoolMetadataForm from "@/app/(dashboard)/pool/[id]/(pages)/settings/metadata-form";

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
  const defaultValues = {
    name: "",
    description: "",
    image: undefined,
  };

  const { data } = await getPool({
    variables: { slug: (await params).id },
  });

  if (data?.pool && !("message" in data.pool)) {
    const pool = data.pool;

    defaultValues.name = pool.name;
    defaultValues.description = pool.description;
  }

  return <PoolMetadataForm defaultValues={defaultValues} />;
}
