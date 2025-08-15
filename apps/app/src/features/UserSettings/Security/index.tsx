import { ApolloQueryResult, ViewerQuery } from "@mutuals/graphql-client-nextjs";
import AuthSignInCard from "@/features/Auth/SignInCard";

export type UserSettingsSecurityProps = ApolloQueryResult<ViewerQuery>;

export default function UserSettingsSecurity({
  data,
}: UserSettingsSecurityProps) {
  if (data?.viewer && "user" in data.viewer) {
    return <>Security User Settings</>;
  }

  return (
    <AuthSignInCard
      description={
        "To view and manage your security settings you must sign in to your account."
      }
    />
  );
}
