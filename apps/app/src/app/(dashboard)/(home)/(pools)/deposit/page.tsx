import AuthSignInCard from "@/features/auth/sign-in-card";
import FeatureUpcoming from "@/features/user/feature-upcoming";
import { me } from "@/lib/privy";

export default async function DashboardHomePoolsDepositPage() {
  const user = await me();
  return user ? (
    <FeatureUpcoming description="Depositing funds is currently planned but not yet available for use." />
  ) : (
    <AuthSignInCard
      description={"To deposit funds you must sign in to your account."}
    />
  );
}
