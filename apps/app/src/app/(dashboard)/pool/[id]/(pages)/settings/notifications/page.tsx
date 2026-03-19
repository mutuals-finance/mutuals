import type { Metadata } from "next";
import FeatureUpcoming from "@/features/user/feature-upcoming";

export const metadata: Metadata = {
  title: "Notification Settings",
};

export default function PoolSettingsNotificationsPage() {
  return (
    <FeatureUpcoming description="Managing pool notification settings is currently planned but not yet available for use." />
  );
}
