import AuthSignInCard from "@/features/auth/sign-in-card";
import FeatureUpcoming from "@/features/user/feature-upcoming";
import { me } from "@/lib/privy";

export default async function DashboardHomePoolsWithdrawPage() {
  const user = await me();
  return user ? (
    <FeatureUpcoming description="Withdrawing funds is currently planned but not yet available for use." />
  ) : (
    <AuthSignInCard
      description={"To withdraw funds you must sign in to your account."}
    />
  );
}
