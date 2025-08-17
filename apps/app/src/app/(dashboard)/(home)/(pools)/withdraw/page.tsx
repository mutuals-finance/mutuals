import AuthSiginInCard from "@/features/Auth/SignInCard";

export default async function DashboardHomePoolsWithdrawPage() {
  return (
    <AuthSiginInCard
      description={"To withdraw funds you must sign in to your account."}
    />
  );
}
