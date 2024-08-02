import { Box } from "@mutuals/ui";
import type { PropsWithChildren } from "react";

import CTA from "@/layout/CTA";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import NextImage from "next/image";
import heroLeftImage from "@/assets/bg-hero-top-left.png";

type LayoutProps = PropsWithChildren;

function Main({ children }: PropsWithChildren) {
  return (
    <Box as="main">
      <Box
        position={"absolute"}
        top={"0"}
        left={"0"}
        w={"full"}
        maxW={"md"}
        h={{ base: "xs", md: "2xl" }}
        opacity={"0.3"}
      >
        <NextImage
          src={heroLeftImage}
          alt={"Mutuals Layout Background"}
          fill={true}
          style={{
            objectFit: "contain",
            objectPosition: "top left",
          }}
        />
      </Box>
      {children}
    </Box>
  );
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box position={"relative"}>
      <Header />
      <Main>
        {children}
        <CTA />
      </Main>
      <Footer />
    </Box>
  );
};

export default Layout;
