import ActivityTable from "@/features/Activity/Table";
import ContentCard, { type ContentCardProps } from "@/components/ContentCard";

import {
  Button,
  Center,
  ConditionalValue,
  EmptyState,
  Icon,
  Link,
  Wrap,
} from "@mutuals/ui";
import { ActivityTableProps } from "@/features/Activity/types";
import React from "react";
import { GrTransaction } from "react-icons/gr";

export interface ActivityTableCardProps extends ActivityTableProps {
  cardProps?: ContentCardProps;
  size?: ConditionalValue<"sm" | "md" | "lg" | undefined>;
}

export default function ActivityTableCard({
  cardProps = { title: "Activity" },
  size = "sm",
  tableProps,
  ...props
}: ActivityTableCardProps) {
  const transfers = props.transfers ?? [];

  return (
    <ContentCard
      {...cardProps}
      title={cardProps.title}
      bodyProps={{ p: "0", ...cardProps.bodyProps }}
    >
      {transfers.length > 0 ? (
        <ActivityTable tableProps={{ size, ...tableProps }} {...props} />
      ) : (
        <EmptyState
          p={"12"}
          icon={
            <Center bg={"bg.muted"} color={"fg"} p={"4"} rounded={"xl"}>
              <Icon size={"md"}>
                <GrTransaction />
              </Icon>
            </Center>
          }
          title="No activity found"
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
