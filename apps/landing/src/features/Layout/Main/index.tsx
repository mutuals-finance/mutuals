import { Box } from "@mutuals/ui";
import type { PropsWithChildren } from "react";
import NextImage from "next/image";
import image from "@/assets/bg-hero-top-left.png";

export default function LayoutMain({ children }: PropsWithChildren) {
  return (
    <Box as="main">
      <Box
        position={"absolute"}
        top={"0"}
        left={"0"}
        w={"full"}
        maxW={"md"}
        h={{ base: "xs", md: "2xl" }}
        opacity={"0.3"}
      >
        <NextImage
          src={image}
          alt={"Mutuals Layout Background"}
          fill={true}
          style={{
            objectFit: "contain",
            objectPosition: "top left",
          }}
        />
      </Box>
      {children}
    </Box>
  );
}
