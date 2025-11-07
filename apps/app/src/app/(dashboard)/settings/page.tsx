import UserSettingsGeneral from "@/features/UserSettings/General";
import { Metadata } from "next";
import { me } from "@/lib/privy";
import AuthSignInCard from "@/features/Auth/SignInCard";

export const metadata: Metadata = {
  title: "General Settings",
};

export default async function UserSettingsGeneralPage() {
  const user = await me();

  return !user ? (
    <AuthSignInCard
      description={
        "To view and manage your general settings you must sign in to your account."
      }
    />
  ) : (
    <UserSettingsGeneral user={user} />
  );
}
