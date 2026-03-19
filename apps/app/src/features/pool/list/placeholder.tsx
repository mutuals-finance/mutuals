import { Button, Heading } from "@mutuals/ui";

import ContentCard from "@/components/content-card";

export function PoolListPlaceholder() {
  return (
    <ContentCard
      maxW={"container.sm"}
      mx={"auto"}
      size={"lg"}
      textAlign={"center"}
    >
      <Heading as={"h2"} fontWeight={"400"} size={"md"}>
        Please Connect your Wallet
      </Heading>

      <Button mt={"6"} size={"lg"}>
        Connect Wallet
      </Button>
    </ContentCard>
  );
}
