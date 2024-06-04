import {
  Container,
  Grid,
  GridItem,
  Hide,
  Show,
  SplitFiLogo,
  Text,
  Box,
} from "@splitfi/ui";
import Image from "next/image";
import signInImage from "@/assets/images/sign-in.jpg";
import { PropsWithChildren } from "react";
import WalletSelector from "@/components/WalletSelector";
import NextLink from "next/link";

function LogoWithLink() {
  return (
    <NextLink href={"/"}>
      <SplitFiLogo w={"28"} />
    </NextLink>
  );
}

export default function ShellLogin({ children }: PropsWithChildren) {
  return (
    <Grid
      templateColumns={{ base: "100%", lg: "var(--chakra-sizes-sm) 1fr" }}
      alignItems={{ base: "center", lg: "flex-start" }}
      minH={{ base: "unset", lg: "100vh" }}
      position={{ base: "relative", lg: "unset" }}
      gap={0}
    >
      <Hide below={"lg"}>
        <GridItem
          position={"sticky"}
          top={"0"}
          left={"0"}
          w={"full"}
          h={"100vh"}
          overflow={"hidden"}
        >
          <Box
            position={"absolute"}
            zIndex={"50"}
            left={"12"}
            top={"12"}
            color={"white"}
          >
            <LogoWithLink />
          </Box>

          <Image
            src={signInImage}
            alt={"Connect to SplitFi"}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </GridItem>
      </Hide>

      <GridItem>
        <Container variant={"shell"} maxW={"3xl"}>
          <Show below={"lg"}>
            <LogoWithLink />
          </Show>

          <WalletSelector.Wrapper
            heading="Connect to Mutuals"
            headingProps={{ as: "h1", size: "2xl" }}
            description={
              "Choose your favourite method to sign in. You can always add more methods later."
            }
            tabs={[
              { title: "Continue With Wallet", href: "/auth/login" },
              { title: "Continue With Email", href: "/auth/login/email" },
            ]}
            py={"12"}
            maxW={"xl"}
          >
            {children}

            <Text fontSize="xs">
              By connecting, you agree to SplitFi’s Terms of Service and
              acknowledge that you have read and understand the SplitFi
              Disclaimer.
            </Text>
          </WalletSelector.Wrapper>
        </Container>
      </GridItem>
    </Grid>
  );
}
