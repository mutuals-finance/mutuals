import { Icon } from "@splitfi/ui";
import { Flex, FlexProps } from "@splitfi/ui";
import Image, { ImageProps } from "next/image";
import React from "react";
import { IoHelp } from "react-icons/io5";

type AssetCardLogoSize = "xs" | "sm";

export interface AssetCardLogoProps extends FlexProps {
  src?: ImageProps["src"];
  alt?: string;
  size?: AssetCardLogoSize;
}

const sizeProps: Record<
  AssetCardLogoSize,
  { w: string; h: string; borderRadius: string; p: string }
> = {
  xs: {
    p: "0.5",
    w: "6",
    h: "6",
    borderRadius: "md",
  },
  sm: {
    p: "1",
    w: "8",
    h: "8",
    borderRadius: "md",
  },
};

export default function AssetCardLogo({
  src,
  alt,
  size = "sm",
  ...props
}: AssetCardLogoProps) {
  return (
    <Flex borderWidth={"1px"} bg={"bg.3"} {...sizeProps[size]} {...props}>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flex={"1"}
        position={"relative"}
      >
        {!!src && src !== "" ? (
          <Image
            src={src}
            alt={alt || "Unknown Token"}
            fill={true}
            sizes={"22"}
          />
        ) : (
          <Icon as={IoHelp} />
        )}
      </Flex>
    </Flex>
  );
}
