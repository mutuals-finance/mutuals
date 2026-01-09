import ContentCard, { type ContentCardProps } from "@/components/ContentCard";

import {
  Button,
  Center,
  ConditionalValue,
  EmptyState,
  Wrap,
  Icon,
  Link,
} from "@mutuals/ui";
import { AssetTableProps } from "@/features/Asset/types";
import AssetTable from "@/features/Asset/Table";
import { RiTokenSwapLine } from "react-icons/ri";
import React from "react";

export interface AssetTableCardProps extends AssetTableProps {
  cardProps?: ContentCardProps;
  size?: ConditionalValue<"sm" | "md" | "lg" | undefined>;
}

export default function AssetTableCard({
  cardProps = { title: "Assets" },
  size = "sm",
  tableProps,
  ...props
}: AssetTableCardProps) {
  const assets = props.assets ?? [];
  return (
    <ContentCard
      {...cardProps}
      title={cardProps.title}
      bodyProps={{ p: "0", ...cardProps.bodyProps }}
    >
      {assets.length > 0 ? (
        <AssetTable tableProps={{ size, ...tableProps }} {...props} />
      ) : (
        <EmptyState
          p={"12"}
          icon={
            <Center bg={"bg.muted"} color={"fg"} p={"4"} rounded={"xl"}>
              <Icon size={"md"}>
                <RiTokenSwapLine />
              </Icon>
            </Center>
          }
          title="No assets found"
          description="Start by depositing assets into your payment pool"
          size={"sm"}
        >
          <Wrap justifyContent={"center"}>
            <Link asChild={true} href={"/pool/new"}>
              <Button size={"sm"} variant={"solid"}>
                Deposit to Payment Pool
              </Button>
            </Link>
            <Link asChild={true} href={"/pool/example"}>
              <Button size={"sm"} variant={"subtle"}>
                View on Etherscan
              </Button>
            </Link>
          </Wrap>
        </EmptyState>
      )}
    </ContentCard>
  );
}
