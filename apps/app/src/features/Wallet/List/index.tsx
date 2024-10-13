import { Box, Container, Heading } from "@mutuals/ui";
import React from "react";

import WalletListContent from "@/features/Wallet/List/Content";

export default function WalletList() {
  return (
    <Box overflow={"hidden"} my={"12"}>
      <Container maxW={"7xl"}>
        <Heading as={"h2"} size={"2xl"} mb={"3"}>
          Wallets
        </Heading>

        <WalletListContent />
      </Container>
    </Box>
  );
}
