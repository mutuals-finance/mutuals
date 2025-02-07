import React from "react";
import ShellPage, { ShellPageProps } from "@/features/Shell/Page";
import { ipfsResolveData } from "@/utils";
import PoolCard from "@/features/Pool/Card";
import { Split } from "@mutuals/graphql-client-nextjs";
import { Tag } from "@mutuals/ui";

export interface ShellPoolProps extends ShellPageProps {
  pool?: Split;
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
            <Tag
              rounded="full"
              size={"md"}
              startElement={
                <PoolCard.Logo
                  src={ipfsResolveData()}
                  alt={pool?.name ?? "Unknown Payment Pool"}
                  boxSize="1.2rem"
                  p={"0"}
                  rounded={"0"}
                  border={"none"}
                />
              }
            >
              {pool?.name}
            </Tag>
          ),
        },
      }}
      {...props}
    >
      {children}
    </ShellPage>
  );
}
