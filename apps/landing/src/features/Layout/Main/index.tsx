import { Box } from "@mutuals/ui";
import type { PropsWithChildren } from "react";

export default function LayoutMain({ children }: PropsWithChildren) {
  return (
    <>
      <Box
        pointerEvents={"none"}
        position={"absolute"}
        top={"0"}
        left={"0"}
        h={"100vh"}
        maxH={"full"}
        w={"full"}
        bgImage={{
          _light:
            "linear-gradient(to top right, {colors.bg} 10%, {colors.bg.emphasized/80} 20%, {colors.bg} 30%, {colors.bg} 70%, {colors.bg.emphasized/80} 80%, {colors.bg} 90%)",
          _dark:
            "linear-gradient(to top right, {colors.bg} 10%, {colors.bg.muted/90} 20%, {colors.bg} 30%, {colors.bg} 70%, {colors.bg.muted/90} 80%, {colors.bg} 90%)",
        }}
      />
      <Box as={"main"}>{children}</Box>
    </>
  );
}
