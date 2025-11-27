import {
  AspectRatio,
  AspectRatioProps,
  Box,
  Stack,
  StackProps,
} from "@mutuals/ui";
import NextImage, { ImageProps } from "next/image";
import mobilePaymentsIcon from "@/assets/payment/hero-mobile.svg";
import desktopPaymentsIcon from "@/assets/payment/hero-desktop.svg";

export default function HomeHeroImage(props: StackProps) {
  return (
    <Stack
      p={{ base: "6", md: "12" }}
      bgColor={{ _light: "white/25", _dark: "white/0" }}
      css={{
        backdropFilter: "blur(12px)",
      }}
      bgImage={
        "radial-gradient(circle at 1px 1px, {colors.fg.subtle/50} 1px, transparent 0)"
      }
      bgSize={"var(--chakra-sizes-6) var(--chakra-sizes-6)"}
      alignItems={"center"}
      rounded={"2xl"}
      {...props}
    >
      <Box rounded={"2xl"} hideFrom={"md"}>
        <NextImage
          src={mobilePaymentsIcon}
          alt={"Mutuals payment mobile options image"}
          width={800}
        />
      </Box>
      <Box rounded={"2xl"} hideBelow={"md"}>
        <NextImage
          src={desktopPaymentsIcon}
          alt={"Mutuals payment desktop options image"}
          width={800}
        />
      </Box>
    </Stack>
  );
}

type HomeHeroRatioImageProps = AspectRatioProps & {
  src: ImageProps["src"];
  alt: ImageProps["alt"];
};
function HomeHeroRatioImage({ src, alt, ...props }: HomeHeroRatioImageProps) {
  return (
    <AspectRatio
      position={"relative"}
      w={"full"}
      ratio={4893 / 1964}
      rounded={"2xl"}
      {...props}
    >
      <Box position={"relative"} flex={"1"}>
        <NextImage
          src={src}
          alt={alt}
          fill={true}
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </Box>
    </AspectRatio>
  );
}
