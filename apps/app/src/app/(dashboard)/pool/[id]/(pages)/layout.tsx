import { PropsWithChildren } from "react";
import ShellPool from "@/features/Shell/Pool";

export default async function PoolPagesLayout({
  children,
  params,
}: PropsWithChildren<{
  params: Promise<{
    id: string;
  }>;
}>) {
  const queryOptions = { variables: { slug: (await params).id } };

  return <ShellPool queryOptions={queryOptions}>{children}</ShellPool>;
}
