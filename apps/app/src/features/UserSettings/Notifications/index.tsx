import { ApolloQueryResult, ViewerQuery } from "@mutuals/graphql-client-nextjs";
import AuthSignInCard from "@/features/Auth/SignInCard";

export type UserSettingsNotificationsProps = ApolloQueryResult<ViewerQuery>;

export default function UserSettingsNotifications({
  data,
}: UserSettingsNotificationsProps) {
  if (data?.viewer && "user" in data.viewer) {
    return <>Notifications User Settings</>;
  }

  return (
    <AuthSignInCard
      description={
        "To view and manage your notification settings you must sign in to your account."
      }
    />
  );
}
