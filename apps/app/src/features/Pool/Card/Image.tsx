"use client";

import { Box, BoxProps } from "@splitfi/ui";
import NextImage, { ImageProps } from "next/image";
import { IoImage } from "react-icons/io5";
import { ipfsResolveData } from "@/utils";

export type PoolCardImageProps = Omit<BoxProps, "fill"> & ImageProps;

export default function PoolCardImage({
  src = "",
  alt = "Unknown Split",
  boxSize = "3rem",
  p = "1",
  fill = true,
  borderRadius = 12,
  bg,
  ...props
}: PoolCardImageProps) {
  return (
    <Box
      position={"relative"}
      borderRadius={borderRadius!}
      boxSize={boxSize!}
      borderWidth={"1px"}
      bg={"alpha.2"}
    >
      <>
        {!src || src === "" ? (
          <IoImage />
        ) : (
          <Box
            p={p!}
            borderRadius={borderRadius!}
            position={"absolute"}
            inset={"0"}
            {...props}
          >
            <NextImage
              src={ipfsResolveData(src)}
              alt={alt || "Unknown Split"}
              fill={fill}
              sizes={"150"}
            />
          </Box>
        )}
      </>
    </Box>
  );
}
