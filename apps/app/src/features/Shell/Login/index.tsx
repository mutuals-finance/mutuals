import { Container, Grid, GridItem, VStack } from "@mutuals/ui";
import React, { PropsWithChildren } from "react";
import ShellLoginBanner from "@/features/Shell/Login/Banner";
import AuthShellProvider from "@/features/Shell/Login/Provider";
import ShellLoginHeader from "@/features/Shell/Login/Header";

export default function ShellLogin({ children }: PropsWithChildren) {
  return (
    <AuthShellProvider>
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
          <ShellLoginBanner />
        </GridItem>

        <GridItem rowSpan={2}>
          <Container
            maxW={"2xl"}
            marginInline={{ lg: "unset" }}
            display={"flex"}
            flexDirection={"column"}
            h={"full"}
            py={{ base: "12", lg: "12" }}
          >
            <VStack gap={"6"} textAlign={"left"} alignItems={"stretch"}>
              <ShellLoginHeader />

              {children}
            </VStack>
          </Container>
        </GridItem>
      </Grid>
    </AuthShellProvider>
  );
}
