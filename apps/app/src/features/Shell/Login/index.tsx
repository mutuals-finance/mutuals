import {
  Container,
  Grid,
  GridItem,
  MutualsLogo,
  Text,
  Box,
  AbsoluteCenter,
  Separator,
  Theme,
  Heading,
  VStack,
} from "@mutuals/ui";
import Image from "next/image";
import signInImage from "@/assets/images/sign-in.png";
import React, { PropsWithChildren } from "react";

export default function ShellLogin({ children }: PropsWithChildren) {
  return (
    <Grid
      templateColumns={{ base: "100%", lg: "4fr 7fr" }}
      templateRows={{ base: "8rem auto", lg: "1fr 1fr" }}
      minH={"100vh"}
      position={{ base: "relative", lg: "unset" }}
      gap={0}
    >
      <GridItem
        rowSpan={{ lg: 2 }}
        position={{ base: "relative", lg: "sticky" }}
        top={{ lg: "0" }}
        left={{ lg: "0" }}
        h={{ lg: "100vh" }}
        w={{ lg: "full" }}
      >
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
      </GridItem>

      <GridItem rowSpan={2}>
        <Container
          maxW={"2xl"}
          marginInline={{ lg: "unset" }}
          display={"flex"}
          flexDirection={"column"}
          h={"full"}
          pt={{ base: "6", lg: "24" }}
          pb={"6"}
        >
          <VStack gap={"4"} textAlign={"left"} alignItems={"stretch"}>
            <Heading as={"h1"} textStyle={{ base: "4xl", lg: "5xl" }}>
              Sign in to Mutuals
            </Heading>

            <Text
              textStyle={{ lg: "lg" }}
              color={"fg.muted"}
              mb={{ base: "2", lg: "6" }}
            >
              Choose your favourite method to sign in. You can always add more
              methods later.
            </Text>

            {children}
          </VStack>

          <Box
            pt={{ base: "6", lg: "12" }}
            pb={{ base: "6", lg: "24" }}
            mt={"auto"}
          >
            <Separator mb={"4"} />
            <Text textStyle={"xs"} color={"fg.subtle"}>
              By connecting, you agree to Mutual’s Terms of Service and
              acknowledge that you have read and understand the Mutuals
              Disclaimer.
            </Text>
          </Box>
        </Container>
      </GridItem>
    </Grid>
  );
}
