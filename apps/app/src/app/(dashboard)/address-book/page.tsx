import { Metadata } from "next";
import ShellPage from "@/features/Shell/Page";
import { Container } from "@mutuals/ui";
import AddressBookList from "@/features/AddressBook/List";
import AuthSignInCard from "@/features/Auth/SignInCard";
import { me } from "@/lib/privy";

export const metadata: Metadata = {
  title: "Address Book",
};

export default async function AddressBookPage() {
  const user = await me();

  return (
    <ShellPage title={"Address Book"}>
      <Container maxW={"7xl"}>
        {!user ? (
          <AuthSignInCard
            description={
              "To view and manage your address book you must sign in to your account."
            }
          />
        ) : (
          <AddressBookList user={user} />
        )}
      </Container>
    </ShellPage>
  );
}
