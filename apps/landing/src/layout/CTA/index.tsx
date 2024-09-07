import { Box, Button, Heading, Container, Stack } from "@mutuals/ui";
import NextImage from "next/image";
import ctaBgImage from "@/assets/background-primary.png";

export default function CTA() {
  return (
    <Box as="section" position="relative">
      <NextImage
        src={ctaBgImage}
        alt={"CTA bg"}
        fill={true}
        style={{ objectFit: "cover" }}
      />

      <Container
        position={"relative"}
        as={Stack}
        className={"dark"}
        align="center"
        justify="center"
        textAlign={"center"}
        maxW="container.md"
        py="24"
        gap={"6"}
        px={{ base: "3", lg: "12" }}
      >
        <Heading size="2xl" color={"color.1"} lineHeight={"1.4"}>
          Starting with Mutuals is simple, fast, and free.
        </Heading>
        <Button size="lg">Get Started For Free</Button>
      </Container>
    </Box>
  );
}
