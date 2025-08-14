import { Box, BoxProps, Stack } from "@mutuals/ui";
import NextImage, { ImageProps } from "next/image";
import { IoImage } from "react-icons/io5";
import { Pool } from "@mutuals/graphql-client-nextjs";

export type PoolCardLogoProps = Omit<BoxProps, "fill"> &
  Omit<ImageProps, "alt" | "src"> & {
    alt?: Pool["name"];
    src?: ImageProps["src"];
  };

export default function PoolCardLogo({
  src = "bafkreidflp6nlbvvad7w5v3cxue4bvuvcc37wggdklay3wmvj56le2sqsu",
  alt = "Unknown Pool",
  boxSize = "2.4rem",
  p = "0.5",
  fill = true,
  borderRadius = "lg",
  bg,
  ...props
}: PoolCardLogoProps) {
  return (
    <Stack
      position={"relative"}
      borderRadius={borderRadius!}
      overflow={"hidden"}
      borderWidth={"1px"}
      boxSize={boxSize}
      p={p}
      alignItems={"stretch"}
      justifyContent={"stretch"}
      bg={bg}
    >
      <>
        {!src || src === "" ? (
          <IoImage />
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
  );
}
