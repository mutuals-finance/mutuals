"use client";

import {
  Button,
  Container,
  Heading,
  Text,
  Group,
  VStack,
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
    <Box position={"relative"} pt={"20"}>
      <GridBg />

      <Container maxW={{ base: "xl", lg: "4xl" }} my={{ base: "12", lg: "16" }}>
        <VStack
          alignItems={{ base: "center", md: "center" }}
          textAlign={{ base: "center", md: "center" }}
          gap={"4"}
        >
          <Heading
            as="h1"
            size={{ base: "5xl", lg: "7xl" }}
            fontWeight={"medium"}
          >
            Reimagining Programmable Money.
          </Heading>
          <Box maxW={"xl"}>
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
        </VStack>
      </Container>

      <Container
        maxW={"7xl"}
        position={"relative"}
        overflow={{ base: "hidden", lg: "unset" }}
        pt={{ base: "6", lg: "0" }}
      >
        <Theme appearance={"light"} bg={"transparent"}>
          <Box
            w="full"
            maxW="4xl"
            mx="auto"
            data-state="open"
            _open={{
              animation: "fade-in 300ms ease-out",
            }}
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
          </Box>
          <HomeHeroImage
            w={{ base: "36", lg: "64" }}
            top={{ base: "0", lg: "25%" }}
            transform={{ base: "translateX(-25%)", lg: "translateY(-50%)" }}
            left={{ base: "0", lg: "2" }}
            imageProps={{
              src: assetAllocationImage,
              alt: "Mutuals Dashboard Hero Asset Allocation",
            }}
          />
          <HomeHeroImage
            bottom={{ base: "6", lg: "25%" }}
            left={{ base: "25%", lg: "24" }}
            transform={{ base: "translateX(-50%)", lg: "translateY(50%)" }}
            w={{ base: "48", lg: "64" }}
            imageProps={{
              src: dashboardHandlersImage,
              alt: "Mutuals Dashboard Hero Handlers",
            }}
          />
          <HomeHeroImage
            top={"50%"}
            right={{ base: "0", lg: "2" }}
            transform={{ base: "translate(60%,-50%)", md: "translateY(-50%)" }}
            w={{ base: "xs", lg: "md" }}
            imageProps={{
              src: transactionHistoryImage,
              alt: "Mutuals Dashboard Transaction History",
            }}
          />
        </Theme>
      </Container>
    </Box>
  );
}
