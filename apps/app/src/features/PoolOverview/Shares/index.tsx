import ContentCard from "@/components/ContentCard";

import Content from "@/features/PoolOverview/Shares/Content";
import { Stack } from "@splitfi/ui";
import { Share } from "@splitfi/sdk/thegraph";

interface PoolOverviewSharesProps {
  shares?: Partial<Share>[];
}

export default function PoolOverviewShares({
  shares,
}: PoolOverviewSharesProps) {
  return (
    <ContentCard title={"Shares"}>
      <Stack direction={{ base: "column", md: "row" }}>
        <Content shares={shares} />
      </Stack>
    </ContentCard>
  );
}
