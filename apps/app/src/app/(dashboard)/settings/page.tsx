import UserSettingsGeneral from "@/features/UserSettings/General";
import { getViewer } from "@mutuals/graphql-client-nextjs/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Settings",
};

export default async function UserSettingsGeneralPage() {
  const query = await getViewer();

  return <UserSettingsGeneral {...query} />;
}
