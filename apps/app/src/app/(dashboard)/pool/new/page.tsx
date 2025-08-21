import { Container } from "@mutuals/ui";
import ShellPage from "@/features/Shell/Page";
import PoolAddForm from "@/features/PoolAdd/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New payment pool",
};

export default function PoolAddPage() {
  return (
    <ShellPage
      breadcrumbsProps={{ overwrite: { pool: false } }}
      title={"New Payment Pool"}
      description={
        "A payment pool smart contract automatically routes on-chain payments to different destinations."
      }
    >
      <Container maxW={"7xl"}>
        <PoolAddForm />
      </Container>
    </ShellPage>
  );
}
