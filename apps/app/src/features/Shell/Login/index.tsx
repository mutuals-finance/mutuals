import {
  Container,
  Grid,
  GridItem,
  MutualsLogo,
  Text,
  Box,
  AbsoluteCenter,
} from "@mutuals/ui";
import Image from "next/image";
import signInImage from "@/assets/images/sign-in.png";
import { PropsWithChildren } from "react";
import WalletSelector from "@/features/Wallet/Selection";

function LogoWithLink() {
  return <MutualsLogo w={"28"} href={"/"} />;
}

export default function ShellLogin({ children }: PropsWithChildren) {
  return (
    <Grid
      templateColumns={{ base: "100%", lg: "var(--chakra-sizes-md) 1fr" }}
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
        <AbsoluteCenter
          zIndex={"50"}
          bg={"bg"}
          p={"8"}
          rounded={"full"}
          w={"32"}
          h={"32"}
        >
          <MutualsLogo wordmark={false} />
        </AbsoluteCenter>

        <Box
          position={"absolute"}
          inset={"4"}
          rounded={"lg"}
          overflow={"hidden"}
        >
          <Image
            src={signInImage}
            alt={"Connect to Mutuals"}
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
        <Container maxW={"3xl"}>
          <Box hideFrom={"lg"}>
            <LogoWithLink />
          </Box>

          <WalletSelector.Wrapper
            heading="Connect to Mutuals"
            headingProps={{ as: "h1", size: "5xl" }}
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
            py={"12"}
            maxW={"xl"}
          >
            {children}

            <Text fontSize="sm">
              By connecting, you agree to Mutual’s Terms of Service and
              acknowledge that you have read and understand the SplitFi
              Disclaimer.
            </Text>
          </WalletSelector.Wrapper>
        </Container>
      </GridItem>
    </Grid>
  );
}
