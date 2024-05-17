import { Icon } from "@chakra-ui/icon";
import { Flex, FlexProps } from "@splitfi/ui";
import Image, { ImageProps } from "next/image";
import React from "react";
import { IoHelp } from "react-icons/io5";

type TokenImageSize = "xs" | "sm";

export interface TokenImageProps extends FlexProps {
  src?: ImageProps["src"];
  alt?: string;
  size?: TokenImageSize;
}

const sizeProps: Record<
  TokenImageSize,
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

export default function TokenImage({
  src,
  alt,
  size = "sm",
  ...props
}: TokenImageProps) {
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
