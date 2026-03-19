import type { Metadata } from "next";
import AuthSignInCard from "@/features/auth/sign-in-card";
import UserSettingsNotifications from "@/features/user-settings/notifications";
import { me } from "@/lib/privy";

export const metadata: Metadata = {
  title: "Notification Settings",
};

export default async function UserSettingsNotificationPage() {
  const user = await me();

  return user ? (
    <UserSettingsNotifications user={user} />
  ) : (
    <AuthSignInCard
      description={
        "To view and manage your notification settings you must sign in to your account."
      }
    />
  );
}
