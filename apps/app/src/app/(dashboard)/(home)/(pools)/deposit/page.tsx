import { me } from "@/lib/privy";
import AuthSignInCard from "@/features/Auth/SignInCard";
import FeatureUpcoming from "@/features/User/FeatureUpcoming";

export default async function DashboardHomePoolsDepositPage() {
  const user = await me();
  return !user ? (
    <AuthSignInCard
      description={"To deposit funds you must sign in to your account."}
    />
  ) : (
    <FeatureUpcoming description="Depositing funds is currently planned but not yet available for use." />
  );
}
