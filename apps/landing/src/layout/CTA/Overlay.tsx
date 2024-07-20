"use client";

import { Box, useColorModeValue } from "@splitfi/ui";

export default function CTAOverlay() {
  const bg = useColorModeValue("transparent", "blackAlpha.600");
  return <Box position={"absolute"} inset={"0"} bg={bg} />;
}
