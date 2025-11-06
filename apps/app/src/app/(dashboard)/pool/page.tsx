import { Metadata } from "next";
import ShellPage from "@/features/Shell/Page";
import { Container } from "@mutuals/ui";
import PoolList from "@/features/Pool/List";
import { me } from "@/lib/privy";

export const metadata: Metadata = {
  title: "Payment Pools",
};

export default async function PoolPage() {
  const user = await me();

  return (
    <ShellPage title={"Payment Pools"}>
      <Container maxW={"7xl"}>
        <PoolList user={user} />
      </Container>
    </ShellPage>
  );
}
