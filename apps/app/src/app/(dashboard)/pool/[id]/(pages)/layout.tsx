import { PropsWithChildren } from "react";
import { getPoolDetailsFromRouteParams } from "@/lib/split";
import ShellPool from "@/features/Shell/Pool";

export default async function PoolPagesLayout({
  children,
  params,
}: PropsWithChildren<{
  params: Promise<{
    id: string;
  }>;
}>) {
  const pool = await getPoolDetailsFromRouteParams(await params);

  return <ShellPool pool={pool}>{children}</ShellPool>;
}
