import AuthSiginInCard from "@/features/Auth/SignInCard";
import PoolListContent, {
  PoolListContentProps,
} from "@/features/Pool/List/Content";

export type PoolListProps = PoolListContentProps;

export default function PoolList(query: PoolListProps) {
  const { data } = query;

  return !data?.viewer ? (
    <AuthSiginInCard
      actionProps={{ children: "Create payment pool" }}
      description={
        "To view and manage your payment pools you must sign in to your account."
      }
    />
  ) : (
    <PoolListContent {...query} />
  );
}
