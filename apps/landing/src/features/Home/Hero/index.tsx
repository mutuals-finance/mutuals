"use client";

import {
  Button,
  Container,
  Heading,
  Text,
  Group,
  Box,
  Link,
  BoxProps,
  Stack,
  Bleed,
  MotionBox,
  Card,
  AspectRatio,
  AbsoluteCenter,
  Tabs,
} from "@mutuals/ui";

import NextImage, { ImageProps as NextImageProps } from "next/image";

import MotionBoxWrapper, { itemVariants } from "@/components/MotionBoxWrapper";

type HomeHeroProps = BoxProps & { imageProps: NextImageProps };

import desktopPaymentsIcon from "@/assets/payment/all-desktop.svg";
import mobilePaymentsIcon from "@/assets/payment/all-mobile.svg";
import payBgImage from "@/assets/bg-hero-top-left.png";
import HomeHeroVideo from "@/features/Home/Hero/Video";
import HomeHeroImage from "@/features/Home/Hero/Image";

export default function HomeHero() {
  return (
    <MotionBoxWrapper asChild={true}>
      <Box pt={"4.6rem"}>
        <Container maxW={{ base: "xl", lg: "4xl" }} my={"12"}>
          <Stack
            gap={"6"}
            alignItems={{ lg: "center" }}
            textAlign={{ lg: "center" }}
          >
            <MotionBox variants={itemVariants} asChild={true}>
              <Heading
                as="h1"
                size={{
                  base: "5xl",
                  lg: "7xl",
                }}
                fontWeight={"medium"}
              >
                Reimagine Programmable Money
              </Heading>
            </MotionBox>
            <MotionBox variants={itemVariants} asChild={true}>
              <Box w={"full"} maxW={"3xl"}>
                <Text textStyle={{ base: "md", lg: "lg" }}>
                  Mutuals enables complex payment workflows through customizable
                  app integrations. Streamline payment processing with
                  automated, flexible, and trustless on-chain execution.
                </Text>
              </Box>
            </MotionBox>
            <MotionBox variants={itemVariants} asChild={true}>
              <Group gap="4">
                <Link
                  href={"https://app.mutuals.finance"}
                  target="_blank"
                  asChild={true}
                >
                  <Button size={"xl"}>Launch app</Button>
                </Link>
                <Link
                  href={"https://docs.mutuals.finance"}
                  target="_blank"
                  asChild={true}
                >
                  <Button size={"xl"} variant={"subtle"}>
                    Documentation
                  </Button>
                </Link>
              </Group>
            </MotionBox>
          </Stack>
        </Container>

        <Box position={"relative"}>
          <Container maxW={"6xl"} position={"relative"}>
            <MotionBox variants={itemVariants} asChild={true}>
              <HomeHeroImage />
            </MotionBox>
          </Container>
          <HomeHeroVideo />
        </Box>
      </Box>
    </MotionBoxWrapper>
  );
}
