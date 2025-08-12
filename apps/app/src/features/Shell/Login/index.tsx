import {
  Container,
  Grid,
  GridItem,
  MutualsLogo,
  Text,
  Box,
  AbsoluteCenter,
  Separator,
} from "@mutuals/ui";
import Image from "next/image";
import signInImage from "@/assets/images/sign-in.png";
import { PropsWithChildren } from "react";
import WalletSelector from "@/features/Wallet/Selection";

function LogoBox() {
  return (
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
  );
}

export default function ShellLogin({ children }: PropsWithChildren) {
  return (
    <Grid
      templateColumns={{ base: "100%", lg: "4fr 7fr" }}
      templateRows={{ base: "28 auto", lg: "1fr 1fr" }}
      minH={"100vh"}
      position={{ base: "relative", lg: "unset" }}
      gap={0}
    >
      <GridItem
        rowSpan={{ lg: 2 }}
        flexShrink={"0"}
        position={{ base: "relative", lg: "sticky" }}
        top={{ lg: "0" }}
        left={{ lg: "0" }}
        w={"full"}
        h={"full"}
      >
        <AbsoluteCenter zIndex={"50"}>
          <LogoBox />
        </AbsoluteCenter>

        <Box
          position={"absolute"}
          inset={{ base: "0", lg: "2" }}
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
          ></Box>
        </Box>
      </GridItem>

      <GridItem rowSpan={2}>
        <Container
          maxW={"2xl"}
          marginInline={{ lg: "unset" }}
          pt={{ base: "4", lg: "12" }}
          display={"flex"}
          flexDirection={"column"}
          h={"full"}
        >
          <WalletSelector.Wrapper
            py={{ base: "4", lg: "12" }}
            heading="Connect to Mutuals"
            description={
              "Choose your favourite method to sign in. You can always add more methods later."
            }
            tabs={[
              {
                title: "Continue With Wallet",
                href: "/auth/login",
                value: "wallet",
              },
              {
                title: "Continue With Email",
                href: "/auth/login/email",
                value: "email",
              },
            ]}
          >
            {children}

            <Separator mt={"auto"} />

            <Text textStyle={"xs"} color={"fg.subtle"}>
              By connecting, you agree to Mutual’s Terms of Service and
              acknowledge that you have read and understand the Mutuals
              Disclaimer.
            </Text>
          </WalletSelector.Wrapper>
        </Container>
      </GridItem>
    </Grid>
  );
}
