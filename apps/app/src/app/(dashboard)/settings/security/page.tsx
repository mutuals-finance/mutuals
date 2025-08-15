import { getViewer } from "@mutuals/graphql-client-nextjs/server";
import UserSettingsSecurity from "@/features/UserSettings/Security";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Settings",
};

export default async function UserSettingsSecurityPage() {
  const query = await getViewer();

  return <UserSettingsSecurity {...query} />;
}
