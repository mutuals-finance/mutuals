import React from "react";
import { HStack, Text } from "@splitfi/ui";
import PageShell, { PageShellProps } from "@/components/Shell/PageShell";
import { SplitImage } from "@/components/Split/Image";
import { ipfsResolveData } from "@/lib/utils";
import { SplitMetadata } from "@splitfi/sdk";

interface PoolPageShellProps extends PageShellProps {
  metaData: Partial<SplitMetadata>;
}

export default function PoolPageShell({
  metaData,
  children,
  ...props
}: PoolPageShellProps) {
  return (
    <PageShell
      breadcrumbsProps={{
        overwrite: {
          pool: false,
          id: (
            <HStack spacing="1" alignItems={"center"}>
              <SplitImage
                src={ipfsResolveData(metaData.image)}
                alt={metaData?.name ?? "Unknown Payment Pool"}
                boxSize="1.2rem"
              />
              <Text>{metaData.name}</Text>
            </HStack>
          ),
        },
      }}
      {...props}
    >
      {children}
    </PageShell>
  );
}
