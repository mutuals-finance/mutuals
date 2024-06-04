import React from "react";
import { HStack, Text } from "@splitfi/ui";
import ShellPage, { ShellPageProps } from "src/features/Shell/Page";
import { SplitImage } from "@/components/Split/Image";
import { ipfsResolveData } from "@/utils";
import { SplitMetadata } from "@splitfi/sdk/thegraph";

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
            <HStack spacing="1" alignItems={"center"}>
              <SplitImage
                src={ipfsResolveData(metaData?.image)}
                alt={metaData?.name ?? "Unknown Payment Pool"}
                boxSize="1.2rem"
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
