import { Box } from "@splitfi/ui";
import React from "react";

export default function Body({ children }: React.PropsWithChildren) {
  return (
    <Box as="main" w={"full"}>
      {children}
    </Box>
  );
}
