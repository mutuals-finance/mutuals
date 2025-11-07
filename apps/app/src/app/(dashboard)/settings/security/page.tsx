import UserSettingsSecurity from "@/features/UserSettings/Security";
import { me } from "@/lib/privy";
import { Metadata } from "next";
import AuthSignInCard from "@/features/Auth/SignInCard";

export const metadata: Metadata = {
  title: "Security Settings",
};

export default async function UserSettingsSecurityPage() {
  const user = await me();

  return !user ? (
    <AuthSignInCard
      description={
        "To view and manage your security settings you must sign in to your account."
      }
    />
  ) : (
    <UserSettingsSecurity user={user} />
  );
}
