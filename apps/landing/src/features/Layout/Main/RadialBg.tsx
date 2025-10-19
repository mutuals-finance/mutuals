import { Stack, Box } from "@mutuals/ui";
import NextImage from "next/image";
import radialImage from "@/assets/radial.png";

export default function LayoutMainRadialBg() {
  return (
    <Stack
      position="absolute"
      opacity={{ _dark: 0.5, _light: 0.08 }}
      top={0}
      left={0}
      h={"xl"}
      w={"full"}
      overflow={"hidden"}
      pointerEvents={"none"}
    >
      <Box position={"relative"} flex={"1"} w={"full"} minW={"6xl"}>
        <NextImage
          src={radialImage}
          alt="Home hero radial"
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority={true}
        />{" "}
      </Box>
    </Stack>
  );
}
