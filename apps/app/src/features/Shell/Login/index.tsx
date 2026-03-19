import { Container, Grid, GridItem, VStack } from "@mutuals/ui";
import type { PropsWithChildren } from "react";
import ShellLoginBanner from "@/features/shell/login/banner";
import ShellLoginHeader from "@/features/shell/login/header";
import AuthShellProvider from "@/features/shell/login/provider";

export default function ShellLogin({ children }: PropsWithChildren) {
  return (
    <AuthShellProvider>
      <Grid
        gap={0}
        minH={"100vh"}
        position={{ base: "relative", lg: "unset" }}
        templateColumns={{ base: "100%", lg: "4fr 7fr" }}
        templateRows={{ base: "8rem auto", lg: "1fr 1fr" }}
      >
        <GridItem
          h={{ lg: "100vh" }}
          left={{ lg: "0" }}
          position={{ base: "relative", lg: "sticky" }}
          rowSpan={{ lg: 2 }}
          top={{ lg: "0" }}
          w={{ lg: "full" }}
        >
          <ShellLoginBanner />
        </GridItem>

        <GridItem rowSpan={2}>
          <Container
            display={"flex"}
            flexDirection={"column"}
            h={"full"}
            marginInline={{ lg: "unset" }}
            maxW={"2xl"}
            py={{ base: "12", lg: "12" }}
          >
            <VStack alignItems={"stretch"} gap={"6"} textAlign={"left"}>
              <ShellLoginHeader />

              {children}
            </VStack>
          </Container>
        </GridItem>
      </Grid>
    </AuthShellProvider>
  );
}
