import { Metadata } from "next";
import ShellPage from "@/features/Shell/Page";
import { Container } from "@mutuals/ui";
import AddressBookList from "@/features/AddressBook/List";

export const metadata: Metadata = {
  title: "Address Book",
};

export default function AddressBookPage() {
  return (
    <ShellPage title={"Address Book"}>
      <Container maxW={"7xl"}>
        <AddressBookList />
      </Container>
    </ShellPage>
  );
}
