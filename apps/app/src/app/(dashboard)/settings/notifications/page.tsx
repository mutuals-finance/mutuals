import UserSettingsNotifications from "@/features/UserSettings/Notifications";
import { Metadata } from "next";
import AuthSignInCard from "@/features/Auth/SignInCard";
import { me } from "@/lib/privy";

export const metadata: Metadata = {
  title: "Notification Settings",
};

export default async function UserSettingsNotificationPage() {
  const user = await me();

  return !user ? (
    <AuthSignInCard
      description={
        "To view and manage your notification settings you must sign in to your account."
      }
    />
  ) : (
    <UserSettingsNotifications user={user} />
  );
}
