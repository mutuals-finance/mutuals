import {
  MutualsLogo,
  Box,
  AbsoluteCenter,
  Theme,
  Stack,
  StackProps,
} from "@mutuals/ui";
import Image from "next/image";
import signInImage from "@/assets/images/sign-in.png";
import React from "react";

export default function ShellLoginBanner(props: StackProps) {
  return (
    <Stack gap={"0"} {...props}>
      <Theme appearance="light">
        <AbsoluteCenter zIndex={"50"}>
          <Box
            shadow={"xs"}
            bg={"bg"}
            p={{ base: "4", lg: "6" }}
            rounded={{ base: "3xl", lg: "4xl" }}
            w={{ base: "20", lg: "24" }}
            h={{ base: "20", lg: "24" }}
          >
            <MutualsLogo wordmark={false} />
          </Box>
        </AbsoluteCenter>
      </Theme>

      <Box
        position={"absolute"}
        inset={{ base: "0", lg: "3" }}
        rounded={{ lg: "4xl" }}
        overflow={"hidden"}
      >
        <Image
          src={signInImage}
          alt={"Welcome to Mutuals"}
          fill={true}
          style={{ objectFit: "cover" }}
        />
        <Box
          position={"absolute"}
          inset={"0"}
          bgGradient="to-tl"
          gradientFrom="transparent"
          gradientVia="blue.100"
          gradientTo="blue.400"
        />
      </Box>
    </Stack>
  );
}
