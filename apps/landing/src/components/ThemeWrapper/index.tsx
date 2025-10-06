import { Box, Theme, ThemeProps } from "@mutuals/ui";
import HeaderObserverChange from "@/providers/HeaderObserver/Change";
import NextImage, { ImageProps } from "next/image";
import transitionImage from "@/assets/bg-hero-bottom-right.png";

type ThemeWrapperProps = ThemeProps & {
  imageProps?: ImageProps & { enabled?: boolean };
};

export default function ThemeWrapper({
  children,
  appearance = "dark",
  imageProps: { enabled, ...imageProps } = {
    enabled: false,
    src: transitionImage,
    alt: "ThemeWrapper Transition",
    fill: true,
    style: {
      objectFit: "contain",
      objectPosition: "bottom right",
      opacity: "0.3",
    },
  },
  ...props
}: ThemeWrapperProps) {
  return (
    <Theme appearance={appearance} position={"relative"} {...props}>
      {enabled && (
        <Box
          position={"absolute"}
          right={"0"}
          bottom={"0"}
          w={"full"}
          maxW={"2xl"}
          h={"full"}
        >
          <NextImage {...imageProps} />
        </Box>
      )}
      <HeaderObserverChange theme={appearance}>{children}</HeaderObserverChange>
    </Theme>
  );
}
