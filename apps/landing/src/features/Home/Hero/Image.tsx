import {
  AspectRatio,
  AspectRatioProps,
  Box,
  Stack,
  StackProps,
} from "@mutuals/ui";
import NextImage, { ImageProps } from "next/image";
import mobilePaymentsIcon from "@/assets/payment/hero-mobile.svg";
import mobilePaymentsDarkIcon from "@/assets/payment/hero-mobile-dark.svg";
import desktopPaymentsIcon from "@/assets/payment/hero-desktop.svg";
import desktopPaymentsDarkIcon from "@/assets/payment/hero-desktop-dark.svg";

export default function HomeHeroImage(props: StackProps) {
  return (
    <Stack {...props}>
      <Box hideFrom={"md"}>
        <Box display={{ _dark: "none" }} w={"full"}>
          <NextImage
            src={mobilePaymentsIcon}
            alt={"Mutuals payment mobile options image"}
            width={800}
          />
        </Box>
        <Box display={{ base: "none", _dark: "block" }} w={"full"}>
          <NextImage
            src={mobilePaymentsDarkIcon}
            alt={"Dark Mutuals payment mobile options image"}
            width={800}
          />
        </Box>
      </Box>
      <Box hideBelow={"md"}>
        <Box display={{ _dark: "none" }} w={"full"}>
          <NextImage
            src={desktopPaymentsIcon}
            alt={"Mutuals payment desktop options image"}
            width={2000}
          />
        </Box>
        <Box display={{ base: "none", _dark: "block" }} w={"full"}>
          <NextImage
            src={desktopPaymentsDarkIcon}
            alt={"Mutuals payment desktop options image"}
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
