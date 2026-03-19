import { Box } from "@mutuals/ui";
import type { PropsWithChildren } from "react";

export default function LayoutMain({ children }: PropsWithChildren) {
  return <Box as={"main"}>{children}</Box>;
}
