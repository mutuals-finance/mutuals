import UserSettingsGeneral from "@/features/UserSettings/General";
import { me } from "@mutuals/graphql-client-nextjs/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Settings",
};

export default async function UserSettingsGeneralPage() {
  const query = await me();

  return <UserSettingsGeneral {...query} />;
}
