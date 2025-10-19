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
      breadcrumbsProps={{
        overwrite: { pool: false, ["new"]: "New Payment Pool" },
      }}
      title={"New Payment Pool"}
      headerContainerProps={{ mb: "0" }}
    >
      <Container maxW={"7xl"}>
        <PoolAddForm />
      </Container>
    </ShellPage>
  );
}
