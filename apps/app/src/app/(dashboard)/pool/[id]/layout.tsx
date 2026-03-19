import { getPool } from "@mutuals/graphql-client-nextjs/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { PropsWithChildren } from "react";
import { siteName } from "@/config";

export async function generateMetadata({
  params,
}: LayoutProps<"/pool/[id]">): Promise<Metadata> {
  const { id: slug } = await params;

  const { data: pool, error } = await getPool({
    variables: { slug },
  });

  if (error || !pool) {
    notFound();
  }

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
