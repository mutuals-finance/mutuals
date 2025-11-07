import AuthSignInCard from "@/features/Auth/SignInCard";
import { me } from "@/lib/privy";
import FeatureUpcoming from "@/features/User/FeatureUpcoming";

export default async function DashboardHomePoolsWithdrawPage() {
  const user = await me();
  return !user ? (
    <AuthSignInCard
      description={"To withdraw funds you must sign in to your account."}
    />
  ) : (
    <FeatureUpcoming description="Withdrawing funds is currently planned but not yet available for use." />
  );
}
