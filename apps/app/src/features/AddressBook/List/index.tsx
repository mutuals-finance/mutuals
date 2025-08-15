import { ApolloQueryResult, ViewerQuery } from "@mutuals/graphql-client-nextjs";
import AuthSignInCard from "@/features/Auth/SignInCard";

export type AddressBookListProps = ApolloQueryResult<ViewerQuery>;

export default function AddressBookList({ data }: AddressBookListProps) {
  if (data?.viewer && "user" in data.viewer) {
    return <>Address book</>;
  }

  return (
    <AuthSignInCard
      description={
        "To view and manage your address book you must sign in to your account."
      }
    />
  );
}
