import { Button, Heading } from "@mutuals/ui";
import React from "react";

import ContentCard from "@/components/ContentCard";

export function SplitListPlaceholder() {
  return (
    <ContentCard
      size={"lg"}
      textAlign={"center"}
      maxW={"container.sm"}
      mx={"auto"}
    >
      <Heading as={"h2"} size={"md"} fontWeight={"400"}>
        Please Connect your Wallet
      </Heading>

      <Button size={"lg"} mt={"6"}>
        Connect Wallet
      </Button>
    </ContentCard>
  );
}
