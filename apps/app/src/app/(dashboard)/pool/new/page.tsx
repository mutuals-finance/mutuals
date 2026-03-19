import { Container } from "@mutuals/ui";
import type { Metadata } from "next";
import PoolAddForm from "@/features/pool-add/form";
import ShellPage from "@/features/shell/page";
import { me } from "@/lib/privy";

export const metadata: Metadata = {
  title: "New Payment Pool",
};

export default async function PoolAddPage() {
  const user = await me();

  return (
    <ShellPage
      breadcrumbsProps={{
        overwrite: { pool: false, "new": "New Payment Pool" },
      }}
      headerContainerProps={{ mb: "0" }}
      title={"New Payment Pool"}
    >
      <Container maxW={"7xl"}>
        <PoolAddForm user={user} />
      </Container>
    </ShellPage>
  );
}
