import type { User } from "@privy-io/node";
import FeatureUpcoming from "@/features/user/feature-upcoming";

export interface UserSettingsSecurityProps {
  user?: User;
}

export default function UserSettingsSecurity(_: UserSettingsSecurityProps) {
  return (
    <FeatureUpcoming description="Managing security settings is currently planned but not yet available for use." />
  );
}
