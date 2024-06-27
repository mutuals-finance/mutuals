import { Box, BoxProps, Stack } from "@splitfi/ui";
import NextImage, { ImageProps } from "next/image";
import { IoImage } from "react-icons/io5";
import { ipfsResolveData } from "@/utils";

export type PoolCardLogoProps = Omit<BoxProps, "fill"> & ImageProps;

export default function PoolCardLogo({
  src = "",
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
      bg={"alpha.4"}
      boxSize={boxSize}
      p={p}
      align={"stretch"}
      justify={"stretch"}
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
            <NextImage
              src={ipfsResolveData(src)}
              alt={alt || "Unknown Split"}
              fill={fill}
            />
          </Box>
        )}
      </>
    </Stack>
  );
}
