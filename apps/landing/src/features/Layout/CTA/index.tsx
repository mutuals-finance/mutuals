import { Theme, Button, Heading, Container, Stack, Link } from "@mutuals/ui";
import NextImage from "next/image";
import ctaBgImage from "@/assets/background-primary.png";

export default function CTA() {
  return (
    <Theme position="relative" overflow="hidden" appearance="dark">
      <NextImage
        src={ctaBgImage}
        alt={"CTA bg"}
        fill={true}
        style={{ objectFit: "cover" }}
      />
      <Container
        position={"relative"}
        as={Stack}
        alignItems="center"
        justifyContent="center"
        textAlign={"center"}
        maxW="2xl"
        py="24"
        gap={"6"}
      >
        <Heading size={{ base: "4xl", md: "5xl" }} color={"fg"}>
          Starting with Mutuals is simple, fast, and free.
        </Heading>
        <Link
          href={"https://app.mutuals.finance"}
          target="_blank"
          asChild={true}
        >
          <Button
            size="2xl"
            variant="solid"
            colorPalette={"blue"}
            rounded={"4xl"}
          >
            Start for free
          </Button>
        </Link>
      </Container>
    </Theme>
  );
}
