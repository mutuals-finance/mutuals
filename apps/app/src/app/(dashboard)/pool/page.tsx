import { Container } from "@mutuals/ui";
import type { Metadata } from "next";
import PoolList from "@/features/pool/list";
import ShellPage from "@/features/shell/page";

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
