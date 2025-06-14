import { Container, Grid, GridItem, MutualsLogo, Text, Box } from "@mutuals/ui";
import Image from "next/image";
import signInImage from "@/assets/images/sign-in.jpg";
import { PropsWithChildren } from "react";
import WalletSelector from "@/features/Wallet/Selection";

function LogoWithLink() {
  return <MutualsLogo w={"28"} href={"/"} />;
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
      <GridItem
        position={"sticky"}
        top={"0"}
        left={"0"}
        w={"full"}
        h={"100vh"}
        overflow={"hidden"}
        hideBelow={"lg"}
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
          alt={"Connect to Mutuals"}
          fill={true}
          style={{ objectFit: "cover" }}
        />
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
