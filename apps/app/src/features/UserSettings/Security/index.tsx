import FeatureUpcoming from "@/features/User/FeatureUpcoming";
import { User } from "@privy-io/node";

export type UserSettingsSecurityProps = { user?: User };

export default function UserSettingsSecurity(_: UserSettingsSecurityProps) {
  return (
    <FeatureUpcoming description="Managing security settings is currently planned but not yet available for use." />
  );
}
