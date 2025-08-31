import { ApolloQueryResult, MeQuery } from "@mutuals/graphql-client-nextjs";
import AuthSignInCard from "@/features/Auth/SignInCard";

export type UserSettingsGeneralProps = ApolloQueryResult<MeQuery>;

export default function UserSettingsGeneral({
  data,
}: UserSettingsGeneralProps) {
  if (data?.viewer && "user" in data.viewer) {
    return <>General User Settings</>;
  }

  return (
    <AuthSignInCard
      description={
        "To view and manage your general settings you must sign in to your account."
      }
    />
  );
}
