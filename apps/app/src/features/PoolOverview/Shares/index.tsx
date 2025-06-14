import ContentCard from "@/components/ContentCard";

import { Share } from "@mutuals/graphql-client-nextjs/thegraph";

interface PoolOverviewSharesProps {
  shares?: Partial<Share>[];
}

export default function PoolOverviewShares({
  shares,
}: PoolOverviewSharesProps) {
  return <ContentCard title={"Shares"}></ContentCard>;
}
