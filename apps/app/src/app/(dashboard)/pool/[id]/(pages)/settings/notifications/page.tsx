import { Metadata } from "next";
import FeatureUpcoming from "@/features/User/FeatureUpcoming";

export const metadata: Metadata = {
  title: "Notification Settings",
};

export default async function PoolSettingsNotificationsPage() {
  return (
    <FeatureUpcoming description="Managing pool notification settings is currently planned but not yet available for use." />
  );
}
