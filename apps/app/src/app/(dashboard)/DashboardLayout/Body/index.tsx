import { Box, Spinner } from "@splitfi/ui";
import React, { Suspense } from "react";

export default function Body({ children }: React.PropsWithChildren) {
  return (
    <Box as="main" w={"full"}>
      {children}
    </Box>
  );
}
