import { Box, Container, Heading } from "@mutuals/ui";
import React from "react";

import WalletListContent from "@/features/Wallet/List/Content";

export default function WalletList() {
  return (
    <Box overflow={"hidden"} my={"12"}>
      <Container variant={"shell"} my={"0"}>
        <Heading as={"h2"} size={"lg"} mb={"6"}>
          Wallets
        </Heading>

        <WalletListContent />
      </Container>
    </Box>
  );
}
