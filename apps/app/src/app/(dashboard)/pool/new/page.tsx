import { Box, Container, Heading, Text } from "@mutuals/ui";
import ShellPage from "src/features/Shell/Page";
import PoolAddForm from "src/features/PoolAdd/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create New Payment Pool",
};

export default function PoolAddPage() {
  return (
    <ShellPage breadcrumbsProps={{ overwrite: { pool: false } }}>
      <Container variant={"shell"}>
        <Box maxW={"xl"} mb={"12"}>
          <Heading as={"h1"} size={"2xl"} lineHeight={"1.2"} mb={"6"}>
            Create New Payment Pool
          </Heading>
          <Text fontSize={"lg"} color={"color.3"}>
            A payment pool smart contract automatically routes on-chain payments
            to different destinations.
          </Text>
        </Box>

        <PoolAddForm />
      </Container>
    </ShellPage>
  );
}
