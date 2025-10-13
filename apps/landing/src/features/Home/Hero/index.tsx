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
} from "@mutuals/ui";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import PaymentTabs from "@/features/Home/Hero/PaymentTabs";

type HomeHeroProps = BoxProps & { imageProps: NextImageProps };

function HomeHeroImage({ imageProps, ...props }: HomeHeroProps) {
  return (
    <Box
      rounded={"2xl"}
      overflow={"hidden"}
      position={"absolute"}
      shadow={"lg"}
      {...props}
    >
      <NextImage {...imageProps} />
    </Box>
  );
}

export default function HomeHero() {
  return (
    <Box pt={"20"} mb={{ base: "16", lg: "32" }}>
      <Container maxW={{ base: "xl", lg: "4xl" }} mt="12" mb="24">
        <Stack
          gap={{ base: "6", lg: "6" }}
          alignItems={{ lg: "center" }}
          textAlign={{ lg: "center" }}
        >
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

          <Box w={"full"} maxW={"3xl"}>
            <Text textStyle={{ base: "md", lg: "lg" }} color={"fg.muted"}>
              Mutuals enables complex payment workflows through customizable app
              integrations. Streamline payment processing with automated,
              flexible, and trustless on-chain execution.
            </Text>
          </Box>

          <Group gap="4">
            <Link
              href={"https://app.mutuals.finance"}
              target="_blank"
              asChild={true}
            >
              <Button size={"2xl"}>Start for free</Button>
            </Link>
            <Link
              href={"https://docs.mutuals.finance"}
              target="_blank"
              asChild={true}
            >
              <Button size={"2xl"} variant={"subtle"}>
                Learn more
              </Button>
            </Link>
          </Group>
        </Stack>
      </Container>

      <Container maxW={"7xl"} my={"16"}>
        <Bleed inline={{ base: "6", lg: "0" }}>
          <PaymentTabs />
        </Bleed>
      </Container>
    </Box>
  );
}
