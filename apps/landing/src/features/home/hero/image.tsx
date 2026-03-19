import {
  AspectRatio,
  type AspectRatioProps,
  Box,
  Stack,
  type StackProps,
} from "@mutuals/ui";
import NextImage, { type ImageProps } from "next/image";
import desktopPaymentsIcon from "@/assets/hero/hero-desktop.svg";
import desktopPaymentsDarkIcon from "@/assets/hero/hero-desktop-dark.svg";
import mobilePaymentsIcon from "@/assets/hero/hero-mobile.svg";
import mobilePaymentsDarkIcon from "@/assets/hero/hero-mobile-dark.svg";

export default function HomeHeroImage(props: StackProps) {
  return (
    <Stack {...props}>
      <Box hideFrom={"md"}>
        <Box display={{ _dark: "none" }} w={"full"}>
          <NextImage
            alt={"Mutuals payment mobile options image"}
            src={mobilePaymentsIcon}
            width={800}
          />
        </Box>
        <Box display={{ base: "none", _dark: "block" }} w={"full"}>
          <NextImage
            alt={"Dark Mutuals payment mobile options image"}
            src={mobilePaymentsDarkIcon}
            width={800}
          />
        </Box>
      </Box>
      <Box hideBelow={"md"}>
        <Box display={{ _dark: "none" }} w={"full"}>
          <NextImage
            alt={"Mutuals payment desktop options image"}
            src={desktopPaymentsIcon}
            width={2000}
          />
        </Box>
        <Box display={{ base: "none", _dark: "block" }} w={"full"}>
          <NextImage
            alt={"Mutuals payment desktop options image"}
            src={desktopPaymentsDarkIcon}
            width={2000}
          />
        </Box>
      </Box>
    </Stack>
  );
}

type HomeHeroRatioImageProps = AspectRatioProps & {
  src: ImageProps["src"];
  alt: ImageProps["alt"];
};
function _HomeHeroRatioImage({ src, alt, ...props }: HomeHeroRatioImageProps) {
  return (
    <AspectRatio
      position={"relative"}
      ratio={4893 / 1964}
      rounded={"2xl"}
      w={"full"}
      {...props}
    >
      <Box flex={"1"} position={"relative"}>
        <NextImage
          alt={alt}
          fill={true}
          src={src}
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </Box>
    </AspectRatio>
  );
}
