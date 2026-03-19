import { AspectRatio, Box, type BoxProps } from "@mutuals/ui";

export default function HomeHeroVideo(props: BoxProps) {
  return (
    <Box
      left={"0"}
      mb={"-1px"}
      overflow={"hidden"}
      pb={"1px"}
      pointerEvents={"none"}
      position={"absolute"}
      top={"0"}
      w={"full"}
      {...props}
    >
      <AspectRatio ratio={{ base: 2106 / 4014, md: 16 / 9 }} w={"full"}>
        <video autoPlay={true} loop={true} muted={true}>
          <source src={"/hero-gradient-bg.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </AspectRatio>
      <Box
        bg={{ _light: "bg/0", _dark: "bg/50" }}
        h={"full"}
        left={"0"}
        position={"absolute"}
        top={"0"}
        w={"full"}
      />

      <Box
        bgGradient="to-t"
        gradientFrom="bg"
        gradientTo="bg/25"
        gradientVia="bg"
        inset={"0"}
        position={"absolute"}
      />
    </Box>
  );
}
