import {
  type GetPoolOptions,
  getPool,
} from "@mutuals/graphql-client-nextjs/server";
import { HStack } from "@mutuals/ui";
import { notFound } from "next/navigation";
import PoolCard from "@/features/pool/card";
import ShellPage, { type ShellPageProps } from "@/features/shell/page";

export interface ShellPoolProps extends ShellPageProps {
  queryOptions?: GetPoolOptions;
}

export default async function ShellPool({
  queryOptions,
  children,
  ...props
}: ShellPoolProps) {
  const { data: pool, error } = await getPool(queryOptions);

  if (!pool || error) {
    notFound();
  }

  return (
    <ShellPage
      breadcrumbsProps={{
        overwrite: {
          pool: false,
          id: (
            <HStack gap={"1"}>
              <PoolCard.Logo
                alt={pool.name}
                size="2xs"
                src={pool.image}
                variant={"outline"}
              />
              {pool.name}
            </HStack>
          ),
        },
      }}
      {...props}
    >
      {children}
    </ShellPage>
  );
}
