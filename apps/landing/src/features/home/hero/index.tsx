"use client";

import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  Link,
  MotionBox,
  Stack,
  Text,
} from "@mutuals/ui";
import { LuArrowUpRight } from "react-icons/lu";
import MotionBoxWrapper, {
  itemVariants,
} from "@/components/motion-box-wrapper";
import HomeHeroImage from "@/features/home/hero/image";
import HomeHeroVideo from "@/features/home/hero/video";

export default function HomeHero() {
  return (
    <MotionBoxWrapper asChild={true}>
      <Box>
        <Box position={"relative"} pt={"4.6rem"}>
          <HomeHeroVideo />

          <Container maxW={{ base: "xl", lg: "4xl" }} my={"16"}>
            <Stack
              alignItems={{ lg: "center" }}
              gap={"6"}
              textAlign={{ lg: "center" }}
            >
              <MotionBox asChild={true} variants={itemVariants}>
                <Link
                  arrow={false}
                  asChild={true}
                  external={true}
                  href={"https://docs.mutuals.finance/smart-contracts/overview"}
                >
                  <Badge
                    bg={"bg/25"}
                    colorPalette={"brand"}
                    css={{
                      backdropFilter: "blur(12px)",
                    }}
                    size={"lg"}
                    textStyle={"xs"}
                    variant={"outline"}
                  >
                    New: Explore the Mutuals Protocol
                    <LuArrowUpRight />
                  </Badge>
                </Link>
              </MotionBox>
              <MotionBox asChild={true} variants={itemVariants}>
                <Heading
                  as="h1"
                  fontWeight={"medium"}
                  size={{
                    base: "5xl",
                    lg: "7xl",
                  }}
                >
                  Reimagine Programmable Money
                </Heading>
              </MotionBox>
              <MotionBox asChild={true} variants={itemVariants}>
                <Box maxW={"3xl"} w={"full"}>
                  <Text color={"fg.muted"} textStyle={{ base: "md", lg: "lg" }}>
                    Use Mutuals’ unopinionated infrastructure to create any
                    payment strategy you can imagine. Low-cost, global, and
                    built for both crypto-natives and mainstream users.
                  </Text>
                </Box>
              </MotionBox>
              <MotionBox asChild={true} variants={itemVariants}>
                <Box>
                  <Link
                    asChild={true}
                    href={"https://app.mutuals.finance"}
                    target="_blank"
                  >
                    <Button size={"xl"}>Launch app</Button>
                  </Link>
                </Box>
              </MotionBox>
            </Stack>
          </Container>

          <Box my={"16"} position={"relative"}>
            <Container maxW={"5xl"} position={"relative"}>
              <MotionBox asChild={true} variants={itemVariants}>
                <HomeHeroImage />
              </MotionBox>
            </Container>
          </Box>
        </Box>
      </Box>
    </MotionBoxWrapper>
  );
}
