import ShellPool from "@/features/Shell/Pool";

export default async function PoolPagesLayout({
  children,
  params,
}: LayoutProps<"/pool/[id]">) {
  const { id: slug } = await params;
  const queryOptions = { variables: { slug } };

  return <ShellPool queryOptions={queryOptions}>{children}</ShellPool>;
}
