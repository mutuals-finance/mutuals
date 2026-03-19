import type { Metadata } from "next";
import AuthSignInCard from "@/features/auth/sign-in-card";
import UserSettingsGeneral from "@/features/user-settings/general";
import { me } from "@/lib/privy";

export const metadata: Metadata = {
  title: "General Settings",
};

export default async function UserSettingsGeneralPage() {
  const user = await me();

  return user ? (
    <UserSettingsGeneral user={user} />
  ) : (
    <AuthSignInCard
      description={
        "To view and manage your general settings you must sign in to your account."
      }
    />
  );
}
