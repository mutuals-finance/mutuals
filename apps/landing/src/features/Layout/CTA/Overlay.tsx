import { Box } from "@mutuals/ui";

export default function CTAOverlay() {
  return (
    <Box
      bg={{ base: "transparent", _dark: "blackAlpha.600" }}
      inset={"0"}
      position={"absolute"}
    />
  );
}
