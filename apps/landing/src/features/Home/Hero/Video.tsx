import { AspectRatio, Box, BoxProps } from "@mutuals/ui";

export default function HomeHeroVideo(props: BoxProps) {
  return (
    <Box
      position={"absolute"}
      top={"0"}
      left={"0"}
      w={"full"}
      overflow={"hidden"}
      pb={"1px"}
      mb={"-1px"}
      pointerEvents={"none"}
      {...props}
    >
      <AspectRatio ratio={{ base: 2106 / 4014, md: 16 / 9 }} w={"full"}>
        <video loop={true} autoPlay={true} muted={true}>
          <source src={"/hero-gradient-bg.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </AspectRatio>
      <Box
        position={"absolute"}
        top={"0"}
        left={"0"}
        w={"full"}
        h={"full"}
        bg={{ _light: "bg/0", _dark: "bg/50" }}
      />

      <Box
        position={"absolute"}
        inset={"0"}
        bgGradient="to-t"
        gradientFrom="bg"
        gradientVia="bg"
        gradientTo="bg/25"
      />
    </Box>
  );
}
