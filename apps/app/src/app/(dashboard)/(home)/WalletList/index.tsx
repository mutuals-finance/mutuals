import { Box, Container, Heading } from "@splitfi/ui";
import React from "react";

import { ApolloQueryResult, ViewerWalletsQuery } from "@splitfi/sdk";
import WalletListContent from "@/app/(dashboard)/(home)/WalletList/WalletListContent";

interface WalletListProps extends ApolloQueryResult<ViewerWalletsQuery> {}

export default function WalletList({ ...props }: WalletListProps) {
  return (
    <Box overflow={"hidden"} my={"12"}>
      <Container variant={"shell"} my={"0"}>
        <Heading as={"h2"} size={"lg"} mb={"6"}>
          Wallets
        </Heading>

        <WalletListContent {...props} />
      </Container>
    </Box>
  );
}
