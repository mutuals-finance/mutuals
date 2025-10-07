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
  AspectRatio,
  Stack,
} from "@mutuals/ui";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import ThemeWrapper from "@/components/ThemeWrapper";

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
    <ThemeWrapper appearance={"dark"}>
      <Stack
        position={"relative"}
        pt={"20"}
        minH={"100vh"}
        mb={{ base: "12", lg: "16" }}
      >
        <AspectRatio
          ratio={21 / 9}
          position={"absolute"}
          top={"0"}
          left={"0"}
          w={"full"}
          h={"full"}
        >
          <video
            loop={true}
            autoPlay={true}
            muted={true}
            style={{ objectPosition: "bottom" }}
            poster={"/hero-poster.jpg"}
          >
            <source
              media="(max-width: 768px)"
              src="/hero-mobile.mp4"
              type="video/mp4"
            />
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </AspectRatio>

        <Box position={"absolute"} inset={"0"} bg={"bg/25"} />

        <Stack justifyContent={"center"} flex={"1"}>
          <Container
            transform={{ base: "translateY(-25%)", md: "translateY(0%)" }}
            maxW={{ base: "xl", lg: "4xl" }}
            alignItems={{ lg: "center" }}
            textAlign={{ base: "left", lg: "center" }}
            display={"flex"}
            flexDirection={"column"}
            py={"12"}
          >
            <Heading
              as="h1"
              size={{ base: "5xl", lg: "7xl" }}
              fontWeight={"medium"}
            >
              Reimagine Programmable Money
            </Heading>

            <Box mt={{ base: "6", lg: "8" }}>
              <Text textStyle={{ base: "md", lg: "xl" }}>
                With Mutuals, you can create complex payment workflows and
                integrate custom apps. Experience automated, flexible, and
                trustless payment processing.
              </Text>
            </Box>

            <Group gap="2" mt={{ base: "6", lg: "8" }}>
              <Link
                href={"https://app.mutuals.finance"}
                target="_blank"
                asChild={true}
              >
                <Button size={"2xl"} rounded={"4xl"}>
                  Start for free
                </Button>
              </Link>
              <Link
                href={"https://docs.mutuals.finance"}
                target="_blank"
                asChild={true}
              >
                <Button size={"2xl"} variant={"subtle"} rounded={"4xl"}>
                  Learn more
                </Button>
              </Link>
            </Group>
          </Container>
        </Stack>

        {/*     <Container
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
      </Container>*/}
      </Stack>
    </ThemeWrapper>
  );
}
