import AuthSiginInCard from "@/features/Auth/SignInCard";
import PoolListContent, {
  PoolListContentProps,
} from "@/features/Pool/List/Content";

export type PoolListProps = PoolListContentProps;

export default function PoolList(props: PoolListProps) {
  return !props?.user ? (
    <AuthSiginInCard
      description={
        "To view and manage your payment pools you must sign in to your account."
      }
    />
  ) : (
    <PoolListContent {...props} />
  );
}
