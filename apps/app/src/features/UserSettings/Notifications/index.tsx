import { User } from "@privy-io/node";
import FeatureUpcoming from "@/features/User/FeatureUpcoming";

export type UserSettingsNotificationsProps = { user?: User };

export default function UserSettingsNotifications(
  _: UserSettingsNotificationsProps,
) {
  return (
    <FeatureUpcoming description="Managing notification settings is currently planned but not yet available for use." />
  );
}
