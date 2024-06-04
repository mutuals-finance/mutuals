import ActivityTable from "@/features/Activity/Table";
import ContentCard, { type ContentCardProps } from "@/components/ContentCard";

import { Box, Button } from "@splitfi/ui";
import Link from "next/link";
import { ActivityTableProps } from "@/features/Activity/types";

export interface ActivityTableCardProps extends ActivityTableProps {
  cardProps?: ContentCardProps;
}

export default function ActivityTableCard({
  cardProps = { title: "Activity" },
  size = "sm",
  ...props
}: ActivityTableCardProps) {
  return (
    <ContentCard
      {...cardProps}
      title={cardProps.title}
      bodyProps={{ p: "0", ...cardProps.bodyProps }}
    >
      <ActivityTable {...props} size={size} />
      <Box p={"3"}>
        <Button as={Link} href={"id/activity"} size={size}>
          Show all
        </Button>
      </Box>
    </ContentCard>
  );
}
