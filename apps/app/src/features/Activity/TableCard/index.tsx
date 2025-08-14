import ActivityTable from "@/features/Activity/Table";
import ContentCard, { type ContentCardProps } from "@/components/ContentCard";

import { Box, ConditionalValue, LinkButton } from "@mutuals/ui";
import { ActivityTableProps } from "@/features/Activity/types";

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
  return (
    <ContentCard
      {...cardProps}
      title={cardProps.title}
      bodyProps={{ p: "0", ...cardProps.bodyProps }}
    >
      <ActivityTable tableProps={{ size, ...tableProps }} {...props} />
      <Box p={"var(--card-padding)"} alignSelf={"flex-end"}>
        <LinkButton href={"/activity"} size={size} variant={"subtle"}>
          Show all
        </LinkButton>
      </Box>
    </ContentCard>
  );
}
