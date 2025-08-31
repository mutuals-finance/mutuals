import { Metadata } from "next";
import ShellPage from "@/features/Shell/Page";
import { Container } from "@mutuals/ui";
import PoolList from "@/features/Pool/List";
import { myPoolsGet } from "@mutuals/graphql-client-nextjs/server";

export const metadata: Metadata = {
  title: "Payment Pools",
};

export default async function PoolPage() {
  const query = await myPoolsGet();

  return (
    <ShellPage title={"Payment Pools"}>
      <Container maxW={"7xl"}>
        <PoolList {...query} />
      </Container>
    </ShellPage>
  );
}
