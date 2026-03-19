import type { Metadata } from "next";
import AuthSignInCard from "@/features/auth/sign-in-card";
import UserSettingsSecurity from "@/features/user-settings/security";
import { me } from "@/lib/privy";

export const metadata: Metadata = {
  title: "Security Settings",
};

export default async function UserSettingsSecurityPage() {
  const user = await me();

  return user ? (
    <UserSettingsSecurity user={user} />
  ) : (
    <AuthSignInCard
      description={
        "To view and manage your security settings you must sign in to your account."
      }
    />
  );
}
