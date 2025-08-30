import { me } from "@mutuals/graphql-client-nextjs/server";
import UserSettingsNotifications from "@/features/UserSettings/Notifications";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notification Settings",
};

export default async function UserSettingsNotificationPage() {
  const query = await me();

  return <UserSettingsNotifications {...query} />;
}
