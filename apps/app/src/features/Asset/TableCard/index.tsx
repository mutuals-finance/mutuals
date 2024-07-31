import AssetTable from "src/features/Asset/Table";
import ContentCard, { type ContentCardProps } from "@/components/ContentCard";

import { Box, Button, ButtonProps } from "@mutuals/ui";
import Link from "next/link";
import { AssetTableProps } from "@/features/Asset/types";

export interface AssetTableCardProps extends AssetTableProps {
  cardProps?: ContentCardProps;
  size?: ButtonProps["size"];
}

export default function AssetTableCard({
  cardProps = { title: "Assets" },
  size = "sm",
  tableProps,
  ...props
}: AssetTableCardProps) {
  return (
    <ContentCard
      {...cardProps}
      title={cardProps.title}
      bodyProps={{ p: "0", ...cardProps.bodyProps }}
    >
      <AssetTable tableProps={{ size, ...tableProps }} {...props} />

      <Box p={"3"}>
        <Button as={Link} href={"id/assets"} size={size}>
          Show all
        </Button>
      </Box>
    </ContentCard>
  );
}
