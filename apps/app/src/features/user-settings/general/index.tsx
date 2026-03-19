import type { User } from "@privy-io/node";
import FeatureUpcoming from "@/features/user/feature-upcoming";

export interface UserSettingsGeneralProps {
  user?: User;
}

export default function UserSettingsGeneral(_: UserSettingsGeneralProps) {
  return (
    <FeatureUpcoming description="Managing general settings is currently planned but not yet available for use." />
  );
}
