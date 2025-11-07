import { Metadata } from "next";
import ShellPage from "@/features/Shell/Page";
import { Container } from "@mutuals/ui";
import PoolList from "@/features/Pool/List";

export const metadata: Metadata = {
  title: "Payment Pools",
};

export default function PoolPage() {
  return (
    <ShellPage title={"Payment Pools"}>
      <Container maxW={"7xl"}>
        <PoolList />
      </Container>
    </ShellPage>
  );
}
