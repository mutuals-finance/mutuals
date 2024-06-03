import { Box, Container, Grid, GridItem, Hide, Show, Text } from "@splitfi/ui";
import Image from "next/image";
import signInImage from "@/assets/images/sign-in.jpg";
import Logo from "@/app/(dashboard)/DashboardLayout/Header/Logo";
import { PropsWithChildren } from "react";
import WalletSelector from "@/components/WalletSelector";

export default function SignInLayout({ children }: PropsWithChildren) {
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
            w={"28"}
            color={"white"}
          >
            <Logo />
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
            <Box w={"28"}>
              <Logo />
            </Box>
          </Show>

          <WalletSelector.Wrapper
            heading="Connect to SplitFi"
            headingProps={{ as: "h1", size: "2xl" }}
            description={
              "Choose your favourite method to sign in. You can always add more methods later."
            }
            tabs={[
              { title: "Continue With Wallet", href: "/auth/login" },
              { title: "Continue With Email", href: "/auth/login/email" },
            ]}
            py={"12"}
            maxW={"md"}
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
