import ContentCard, { type ContentCardProps } from "@/components/ContentCard";

import { Box, LinkButton, ButtonProps } from "@mutuals/ui";
import { AssetTableProps } from "@/features/Asset/types";
import AssetTable from "@/features/Asset/Table";

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

      <Box p={"var(--card-padding)"} alignSelf={"flex-end"}>
        <LinkButton href={"/assets"} size={size} variant={"subtle"}>
          Show all
        </LinkButton>
      </Box>
    </ContentCard>
  );
}
