import { Metadata } from "next";
import ShellPage from "@/features/Shell/Page";
import { Container } from "@mutuals/ui";
import AddressBookList from "@/features/AddressBook/List";
import { getViewer } from "@mutuals/graphql-client-nextjs/server";

export const metadata: Metadata = {
  title: "Address Book",
};

export default async function AddressBookPage() {
  const query = await getViewer();

  return (
    <ShellPage title={"Address Book"}>
      <Container maxW={"7xl"}>
        <AddressBookList {...query} />
      </Container>
    </ShellPage>
  );
}
