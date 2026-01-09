import {
  AvatarRoot,
  AvatarRootProps,
  AvatarFallback,
  AvatarImage,
  AvatarImageProps,
} from "@mutuals/ui";
import { getImageProps, ImageProps } from "next/image";

export type PoolCardLogoProps = AvatarRootProps & {
  alt?: ImageProps["alt"];
  src?: ImageProps["src"];
};

export default function PoolCardLogo({
  src = "",
  alt = "",
  ...props
}: PoolCardLogoProps) {
  const imageProps = getImageProps({
    src,
    alt,
    width: 120,
    height: 120,
  }) as AvatarImageProps;

  return (
    <AvatarRoot {...props}>
      <AvatarFallback name={alt} />
      <AvatarImage {...imageProps} />
    </AvatarRoot>
    /*

  <Stack
      borderRadius={borderRadius!}
      overflow={"hidden"}
      borderWidth={"1px"}
      boxSize={boxSize}
      p={p}
      bg={bg}
    >
      <>
        {!src || src === "" ? (
          <Icon alignSelf={"center"} justifySelf={"center"} mx={"auto"}>
            <IoImage />
          </Icon>
        ) : (
          <Box
            flex={"1"}
            borderRadius={borderRadius!}
            position={"relative"}
            {...props}
          >
            <NextImage src={src} alt={alt || "Unknown Pool"} fill={fill} />
          </Box>
        )}
      </>
    </Stack>
*/
  );
}
