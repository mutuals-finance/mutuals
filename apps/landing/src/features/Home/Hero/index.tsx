"use client";

import {
  Button,
  Container,
  Heading,
  Text,
  Box,
  Link,
  BoxProps,
  Stack,
  MotionBox,
  Badge,
} from "@mutuals/ui";
import { ImageProps as NextImageProps } from "next/image";
import HomeHeroImage from "@/features/Home/Hero/Image";
import MotionBoxWrapper, { itemVariants } from "@/components/MotionBoxWrapper";
import HomeHeroVideo from "@/features/Home/Hero/Video";
import { LuArrowUpRight } from "react-icons/lu";

type HomeHeroProps = BoxProps & { imageProps: NextImageProps };

export default function HomeHero() {
  return (
    <MotionBoxWrapper asChild={true}>
      <Box>
        <Box position={"relative"} pt={"4.6rem"}>
          <HomeHeroVideo />

          <Container maxW={{ base: "xl", lg: "4xl" }} my={"16"}>
            <Stack
              gap={"6"}
              alignItems={{ lg: "center" }}
              textAlign={{ lg: "center" }}
            >
              <MotionBox variants={itemVariants} asChild={true}>
                <Link
                  asChild={true}
                  href={"https://docs.mutuals.finance/smart-contracts/overview"}
                  external={true}
                  arrow={false}
                >
                  <Badge
                    size={"lg"}
                    textStyle={"xs"}
                    colorPalette={"brand"}
                    variant={"outline"}
                    bg={"bg/25"}
                    css={{
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    New: Explore the Mutuals Protocol
                    <LuArrowUpRight />
                  </Badge>
                </Link>
              </MotionBox>
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
                  <Text textStyle={{ base: "md", lg: "lg" }} color={"fg.muted"}>
                    Use Mutuals’ unopinionated infrastructure to create any
                    payment strategy you can imagine. Low-cost, global, and
                    built for both crypto-natives and mainstream users.
                  </Text>
                </Box>
              </MotionBox>
              <MotionBox variants={itemVariants} asChild={true}>
                <Box>
                  <Link
                    href={"https://app.mutuals.finance"}
                    target="_blank"
                    asChild={true}
                  >
                    <Button size={"xl"}>Launch app</Button>
                  </Link>
                </Box>
              </MotionBox>
            </Stack>
          </Container>

          <Box position={"relative"} mb={"16"}>
            <Container maxW={"5xl"} position={"relative"}>
              <MotionBox variants={itemVariants} asChild={true}>
                <HomeHeroImage />
              </MotionBox>
            </Container>
          </Box>
        </Box>
      </Box>
    </MotionBoxWrapper>
  );
}
