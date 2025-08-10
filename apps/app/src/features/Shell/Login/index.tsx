import {
  Container,
  Grid,
  GridItem,
  MutualsLogo,
  Text,
  Box,
  AbsoluteCenter,
  Stack,
} from "@mutuals/ui";
import Image from "next/image";
import signInImage from "@/assets/images/sign-in.png";
import { PropsWithChildren } from "react";
import WalletSelector from "@/features/Wallet/Selection";

function LogoBox() {
  return (
    <Box shadow={"xs"} bg={"bg"} p={"6"} rounded={"4xl"} w={"24"} h={"24"}>
      <MutualsLogo wordmark={false} />
    </Box>
  );
}

export default function ShellLogin({ children }: PropsWithChildren) {
  return (
    <Grid
      templateColumns={{ base: "100%", lg: "4fr 7fr" }}
      alignItems={{ base: "center", lg: "flex-start" }}
      minH={{ base: "unset", lg: "100vh" }}
      position={{ base: "relative", lg: "unset" }}
      gap={0}
    >
      <GridItem
        position={"sticky"}
        top={"0"}
        left={"0"}
        w={"full"}
        h={"100vh"}
        overflow={"hidden"}
        hideBelow={"lg"}
      >
        <AbsoluteCenter zIndex={"50"}>
          <LogoBox />
        </AbsoluteCenter>

        <Box
          position={"absolute"}
          inset={"2"}
          rounded={"4xl"}
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

      <GridItem>
        <Container maxW={"3xl"} marginInline={"unset"} mt={"12"}>
          <Stack hideFrom={"lg"} alignItems={"center"}>
            <LogoBox />
          </Stack>

          <WalletSelector.Wrapper
            py={"12"}
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

            <Text textStyle={"xs"} color={"fg.subtle"} textAlign={"left"}>
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
