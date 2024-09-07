import React from "react";
import { HStack, Text } from "@mutuals/ui";
import ShellPage, { ShellPageProps } from "@/features/Shell/Page";
import { ipfsResolveData } from "@/utils";
import { SplitMetadata } from "@mutuals/graphql-client-nextjs/thegraph";
import PoolCard from "@/features/Pool/Card";

export interface ShellPoolProps extends ShellPageProps {
  metaData?: Partial<SplitMetadata>;
}

export default function ShellPool({
  metaData,
  children,
  ...props
}: ShellPoolProps) {
  return (
    <ShellPage
      breadcrumbsProps={{
        overwrite: {
          pool: false,
          id: (
            <HStack gap="1" alignItems={"center"}>
              <PoolCard.Logo
                src={ipfsResolveData(metaData?.image)}
                alt={metaData?.name ?? "Unknown Payment Pool"}
                boxSize="1.4rem"
                p={"0"}
              />
              <Text>{metaData?.name}</Text>
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
