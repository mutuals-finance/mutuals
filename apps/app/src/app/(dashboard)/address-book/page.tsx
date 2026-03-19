import { Container } from "@mutuals/ui";
import type { Metadata } from "next";
import AddressBookList from "@/features/address-book/list";
import AuthSignInCard from "@/features/auth/sign-in-card";
import ShellPage from "@/features/shell/page";
import { me } from "@/lib/privy";

export const metadata: Metadata = {
  title: "Address Book",
};

export default async function AddressBookPage() {
  const user = await me();

  return (
    <ShellPage title={"Address Book"}>
      <Container maxW={"7xl"}>
        {user ? (
          <AddressBookList user={user} />
        ) : (
          <AuthSignInCard
            description={
              "To view and manage your address book you must sign in to your account."
            }
          />
        )}
      </Container>
    </ShellPage>
  );
}
