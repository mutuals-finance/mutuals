import ActivityTable from "@/features/Activity/Table";
import ContentCard, { type ContentCardProps } from "@/components/ContentCard";

import { Box, Button, ButtonProps } from "@mutuals/ui";
import Link from "next/link";
import { ActivityTableProps } from "@/features/Activity/types";

export interface ActivityTableCardProps extends ActivityTableProps {
  cardProps?: ContentCardProps;
  size?: ButtonProps["size"];
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
      <Box p={"3"}>
        <Button as={Link} href={"id/activity"} size={size}>
          Show all
        </Button>
      </Box>
    </ContentCard>
  );
}
