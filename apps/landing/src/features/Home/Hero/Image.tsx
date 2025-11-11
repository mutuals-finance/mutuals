import {
  AspectRatio,
  AspectRatioProps,
  Box,
  Stack,
  StackProps,
} from "@mutuals/ui";
import NextImage, { ImageProps } from "next/image";
import mobilePaymentsIcon from "@/assets/payment/all-mobile.svg";
import desktopPaymentsIcon from "@/assets/payment/all-desktop.svg";

export default function HomeHeroImage(props: StackProps) {
  return (
    <Stack
      p={"3"}
      bgColor={"bg.emphasized/25"}
      css={{
        backdropFilter: "blur(12px)",
      }}
      rounded={"2xl"}
      {...props}
    >
      <Stack
        p={{ base: "6", md: "12" }}
        bgColor={"white"}
        bgImage={
          "radial-gradient(circle at 1px 1px, {colors.fg.subtle/25} 1px, transparent 0)"
        }
        bgSize={"var(--chakra-sizes-6) var(--chakra-sizes-6)"}
        alignItems={"center"}
        rounded={"2xl"}
      >
        <HomeHeroRatioImage
          hideFrom={"md"}
          ratio={2106 / 4014}
          src={mobilePaymentsIcon}
          alt={"Mutuals payment mobile options image"}
        />
        <HomeHeroRatioImage
          hideBelow={"md"}
          ratio={4893 / 1964}
          src={desktopPaymentsIcon}
          alt={"Mutuals payment desktop options image"}
        />
      </Stack>
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
