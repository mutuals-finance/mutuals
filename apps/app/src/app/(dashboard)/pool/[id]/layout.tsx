import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { getPoolDetailsFromRouteParams } from "@/lib/split";
import { siteName } from "@/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}): Promise<Metadata> {
  const { name, description } = await getPoolDetailsFromRouteParams(
    await params,
  );

  if (!name || name == "") {
    return {
      title: `Unknown Payment Pool`,
    };
  }

  return {
    title: {
      default: `${name}`,
      template: `${name}: %s — ${siteName}`,
    },
    description,
  };
}

export default async function PoolDetailsLayout({
  children,
}: PropsWithChildren) {
  return <>{children}</>;
}
