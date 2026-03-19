import { Box, Stack } from "@mutuals/ui";
import NextImage from "next/image";
import radialImage from "@/assets/radial.png";

export default function LayoutMainRadialBg() {
  return (
    <Stack
      h={"xl"}
      left={0}
      opacity={{ _dark: 0.5, _light: 0.08 }}
      overflow={"hidden"}
      pointerEvents={"none"}
      position="absolute"
      top={0}
      w={"full"}
    >
      <Box flex={"1"} minW={"6xl"} position={"relative"} w={"full"}>
        <NextImage
          alt="Home hero radial"
          fill={true}
          priority={true}
          src={radialImage}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />{" "}
      </Box>
    </Stack>
  );
}
