"use client";

import { Box, BoxProps, useColorModeValue } from "@splitfi/ui";
import NextImage, { type ImageProps } from "next/image";
import React from "react";
import { IoImage } from "react-icons/io5";

import { ipfsResolveData } from "@/lib/utils";

export function SplitImage({
  src = "",
  alt = "Unknown Split",
  boxSize = "3rem",
  p = "1",
  fill = true,
  borderRadius = 12,
  bg,
  ...props
}: Omit<BoxProps, "fill"> & ImageProps) {
  return (
    <Box
      position={"relative"}
      borderRadius={borderRadius!}
      boxSize={boxSize!}
      borderWidth={"1px"}
      bg={useColorModeValue(bg ?? "whiteAlpha.600", bg ?? "blackAlpha.600")}
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