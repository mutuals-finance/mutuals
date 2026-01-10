import React from "react";
import ShellPage, { ShellPageProps } from "@/features/Shell/Page";
import PoolCard from "@/features/Pool/Card";
import { Pool } from "@mutuals/graphql-client-nextjs";
import { HStack } from "@mutuals/ui";
import { DeepPartial } from "#/partial";

export interface ShellPoolProps extends ShellPageProps {
  pool?: DeepPartial<Pool>;
}

export default function ShellPool({
  pool,
  children,
  ...props
}: ShellPoolProps) {
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
