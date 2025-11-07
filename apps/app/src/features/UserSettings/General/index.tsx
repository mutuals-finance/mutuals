import { User } from "@privy-io/node";
import FeatureUpcoming from "@/features/User/FeatureUpcoming";

export type UserSettingsGeneralProps = { user?: User };

export default function UserSettingsGeneral(_: UserSettingsGeneralProps) {
  return (
    <FeatureUpcoming description="Managing general settings is currently planned but not yet available for use." />
  );
}
