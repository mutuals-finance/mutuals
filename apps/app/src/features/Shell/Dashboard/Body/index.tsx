import { Box } from "@splitfi/ui";
import React from "react";

export default function ShellDashboardBody({
  children,
}: React.PropsWithChildren) {
  return (
    <Box as="main" w={"full"}>
      {children}
    </Box>
  );
}
