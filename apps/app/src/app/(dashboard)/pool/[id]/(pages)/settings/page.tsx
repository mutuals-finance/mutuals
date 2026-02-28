import PoolMetadataForm from "@/app/(dashboard)/pool/[id]/(pages)/settings/MetadataForm";
import { Metadata } from "next";
import { getPool } from "@mutuals/graphql-client-nextjs/server";
import {
  getFragmentData,
  PoolWithOwnerAndContractFragmentDoc,
} from "@mutuals/graphql-client-nextjs";

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
    const pool = getFragmentData(
      PoolWithOwnerAndContractFragmentDoc,
      data.pool,
    );

    defaultValues.name = pool.name;
    defaultValues.description = pool.description;
  }

  return <PoolMetadataForm defaultValues={defaultValues} />;
}
