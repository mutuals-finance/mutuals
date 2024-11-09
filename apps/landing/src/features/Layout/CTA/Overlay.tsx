import { Box } from "@mutuals/ui";

export default function CTAOverlay() {
  return (
    <Box
      position={"absolute"}
      inset={"0"}
      bg={{ base: "transparent", _dark: "blackAlpha.600" }}
    />
  );
}
