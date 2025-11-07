import { Container } from "@mutuals/ui";
import ShellPage from "@/features/Shell/Page";
import PoolAddForm from "@/features/PoolAdd/Form";
import { Metadata } from "next";
import { me } from "@/lib/privy";

export const metadata: Metadata = {
  title: "New payment pool",
};

export default async function PoolAddPage() {
  const user = await me();

  return (
    <ShellPage
      breadcrumbsProps={{
        overwrite: { pool: false, ["new"]: "New Payment Pool" },
      }}
      title={"New Payment Pool"}
      headerContainerProps={{ mb: "0" }}
    >
      <Container maxW={"7xl"}>
        <PoolAddForm user={user} />
      </Container>
    </ShellPage>
  );
}
