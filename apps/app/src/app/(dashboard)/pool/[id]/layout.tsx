import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { getPoolDetailsFromRouteParams } from "@/lib/split";
import { siteName } from "@/config";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { metaData } = await getPoolDetailsFromRouteParams(params);

  if (!metaData || !metaData.name) {
    return {
      title: `Unknown Payment Pool`,
    };
  }

  return {
    title: {
      default: `${metaData.name}`,
      template: `${metaData.name}: %s — ${siteName}`,
    },
    description: metaData.description,
  };
}

export default async function PoolDetailsLayout({
  children,
}: PropsWithChildren) {
  return <>{children}</>;
}
