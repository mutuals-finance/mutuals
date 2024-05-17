import React from "react";
import { Container, HStack, Text } from "@splitfi/ui";
import { SectionContainerProps } from "@/components/Shell/SectionContainer";
import PageShell, { PageShellProps } from "@/components/Shell/PageShell";
import { SplitImage } from "@/components/Split/Image";
import { ipfsResolveData } from "@/lib/utils";

interface PoolPageShellProps extends PageShellProps {
  metaData: { name: string; description: string; image: string };
  sectionContainerProps?: SectionContainerProps;
}
export default function PoolPageShell({
  metaData,
  sectionContainerProps,
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
                alt={metaData.name}
                boxSize="1.2rem"
              />
              <Text>{metaData.name}</Text>
            </HStack>
          ),
        },
      }}
      {...props}
    >
      <Container variant={"shell"} {...sectionContainerProps}>
        {children}
      </Container>
    </PageShell>
  );
}
