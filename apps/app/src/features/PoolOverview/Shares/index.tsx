import ContentCard from "@/components/ContentCard";

interface PoolOverviewSharesProps {
  shares?: Partial<any>[];
}

export default function PoolOverviewShares({
  shares,
}: PoolOverviewSharesProps) {
  return <ContentCard title={"Shares"}></ContentCard>;
}
