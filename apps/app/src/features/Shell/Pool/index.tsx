import React from "react";
import ShellPage, { ShellPageProps } from "@/features/Shell/Page";
import PoolCard from "@/features/Pool/Card";
import { HStack } from "@mutuals/ui";
import { getPool, GetPoolOptions } from "@mutuals/graphql-client-nextjs/server";
import { notFound } from "next/navigation";

export interface ShellPoolProps extends ShellPageProps {
  queryOptions?: GetPoolOptions;
}

export default async function ShellPool({
  queryOptions,
  children,
  ...props
}: ShellPoolProps) {
  const { data, error } = await getPool(queryOptions);

  if (error || !data?.pool || "message" in data?.pool) {
    notFound();
  }

  const pool = data?.pool;

  return (
    <ShellPage
      breadcrumbsProps={{
        overwrite: {
          pool: false,
          id: (
            <HStack>
              <PoolCard.Logo
                src={pool?.image}
                alt={pool?.name}
                size="xs"
                variant={"outline"}
              />
              {pool?.name}
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
