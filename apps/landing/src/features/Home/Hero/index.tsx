"use client";

import {
  Button,
  Container,
  Heading,
  Text,
  Group,
  Box,
  Stack,
  Link,
  Theme,
  AspectRatio,
  BoxProps,
} from "@mutuals/ui";
import GridBg from "@/components/GridBg";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import dashboardDesktopImage from "@/assets/dashboard-desktop.png";
import transactionHistoryImage from "@/assets/transaction-history.png";
import assetAllocationImage from "@/assets/asset-allocation.png";
import dashboardHandlersImage from "@/assets/dashboard-handlers.png";

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
    <Box position={"relative"} pt={"20"} overflow="hidden">
      <GridBg />

      <Container maxW={"7xl"} mt={{ base: "12", lg: "16" }}>
        <Stack
          direction={"column"}
          alignItems={"center"}
          textAlign={"center"}
          gap={"6"}
        >
          <Box maxW={{ base: "xl", lg: "4xl" }}>
            <Heading
              as="h1"
              size={{ base: "5xl", lg: "7xl" }}
              fontWeight={"medium"}
            >
              Reimagining Programmable Money.
            </Heading>
          </Box>
          <Box maxW={"2xl"}>
            <Text textStyle={{ base: "lg", lg: "xl" }} color={"fg.subtle"}>
              Automated, trustless payments for frictionless financial
              interactions
            </Text>
          </Box>
          <Group gap="2">
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
              <Button size={"2xl"} variant={"surface"}>
                Learn more
              </Button>
            </Link>
          </Group>
        </Stack>

        <Theme appearance={"light"} bg={"transparent"}>
          <Box
            position={"relative"}
            pt={{ base: "6", lg: "0" }}
            px={{ base: "6", lg: "0" }}
            mt={{ base: "12", lg: "16" }}
            w="full"
            maxW="3xl"
            mx="auto"
          >
            <AspectRatio
              ratio={{ base: 8 / 7, md: 2457 / 1441 }}
              w="full"
              roundedTop={"2xl"}
              overflow={"hidden"}
              shadow={"md"}
            >
              <NextImage
                src={dashboardDesktopImage}
                alt={"Mutuals Dashboard Hero Desktop"}
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </AspectRatio>

            <HomeHeroImage
              w={{ base: "36", lg: "52" }}
              top={{ base: "0", lg: "6" }}
              transform={{
                base: "translateX(-25%)",
                lg: "translate(-50%, 0)",
              }}
              left={"0"}
              imageProps={{
                src: assetAllocationImage,
                alt: "Mutuals Dashboard Hero Asset Allocation",
              }}
            />

            <HomeHeroImage
              w={"52"}
              bottom={{ base: "6", lg: "6" }}
              left={{ base: "25%", lg: "0" }}
              transform={{
                base: "translateX(-50%)",
                lg: "translate(-50%, 0)",
              }}
              imageProps={{
                src: dashboardHandlersImage,
                alt: "Mutuals Dashboard Hero Handlers",
              }}
            />

            <HomeHeroImage
              w={{ base: "xs", lg: "sm" }}
              top={"50%"}
              right={"0"}
              transform={{
                base: "translate(60%,-50%)",
                md: "translate(50%, -50%)",
              }}
              imageProps={{
                src: transactionHistoryImage,
                alt: "Mutuals Dashboard Transaction History",
              }}
            />
          </Box>
        </Theme>
      </Container>
    </Box>
  );
}
