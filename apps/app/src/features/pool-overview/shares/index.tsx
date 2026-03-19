import ContentCard from "@/components/content-card";

interface PoolOverviewSharesProps {
  shares?: Partial<Record<string, unknown>>[];
}

export default function PoolOverviewShares({
  shares: _shares,
}: PoolOverviewSharesProps) {
  return <ContentCard title={"Shares"} />;
}
