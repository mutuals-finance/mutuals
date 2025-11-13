import { AspectRatio, Box, BoxProps } from "@mutuals/ui";

export default function HomeHeroVideo(props: BoxProps) {
  return (
    <Box
      zIndex={"-1"}
      position={"absolute"}
      bottom={"0"}
      left={"0"}
      w={"full"}
      transform={{
        base: "translateY(-25%)",
        md: "translateY(-50%)",
      }}
      overflow={"hidden"}
      roundedBottom={"2xl"}
      pt={"1px"}
      mt={"-1px"}
      pointerEvents={"none"}
      {...props}
    >
      <AspectRatio ratio={{ base: 2106 / 4014, md: 4893 / 1964 }} w={"full"}>
        <video loop={true} autoPlay={true} muted={true}>
          <source src={"/hero-gradient-bg.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </AspectRatio>

      <Box
        position={"absolute"}
        inset={"0"}
        bgGradient="to-t"
        gradientFrom="bg/0"
        gradientVia="bg"
        gradientTo="bg"
      />
    </Box>
  );
}
