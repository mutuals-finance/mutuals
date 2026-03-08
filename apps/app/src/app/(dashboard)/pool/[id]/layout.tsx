import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { siteName } from "@/config";
import { getPool } from "@mutuals/graphql-client-nextjs/server";
import { notFound } from "next/navigation";
import {
  getFragmentData,
  PoolWithOwnerAndContractFragmentDoc,
} from "@mutuals/graphql-client-nextjs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}): Promise<Metadata> {
  const { data, error } = await getPool({
    variables: { slug: (await params).id },
  });

  if (error || !data?.pool || "message" in data?.pool) {
    notFound();
  }

  const pool = getFragmentData(PoolWithOwnerAndContractFragmentDoc, data?.pool);

  return {
    title: {
      default: `${pool.name}`,
      template: `${pool.name}: %s — ${siteName}`,
    },
    description: pool.description,
  };
}

export default async function PoolDetailsLayout({
  children,
}: PropsWithChildren) {
  return <>{children}</>;
}
