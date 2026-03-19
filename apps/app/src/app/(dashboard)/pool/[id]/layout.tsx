import { getPool } from "@mutuals/graphql-client-nextjs/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { PropsWithChildren } from "react";
import { siteName } from "@/config";

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

  if (error || !data?.pool || (data?.pool && "message" in data.pool)) {
    notFound();
  }

  const pool = data?.pool;

  return {
    title: {
      default: `${pool.name}`,
      template: `${pool.name}: %s — ${siteName}`,
    },
    description: pool.description,
  };
}

export default function PoolDetailsLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
