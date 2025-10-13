import {
  Button,
  Heading,
  Container,
  Stack,
  Link,
  Card,
  Box,
  Theme,
} from "@mutuals/ui";
import NextImage from "next/image";
import ctaBgImage from "@/assets/background-primary.png";

export default function CTA() {
  return (
    <Box pt={"16"}>
      <Container maxW={"7xl"}>
        <Card.Root position="relative" overflow="hidden">
          <Card.Body>
            <Theme appearance="dark">
              <NextImage
                src={ctaBgImage}
                alt={"CTA bg"}
                fill={true}
                style={{ objectFit: "cover" }}
              />
              <Container
                position={"relative"}
                maxW="2xl"
                py={{ base: "6", lg: "12" }}
                px={{ base: "2", lg: "12" }}
              >
                <Stack
                  gap={"6"}
                  alignItems="center"
                  justifyContent="center"
                  textAlign={"center"}
                >
                  <Heading size={{ base: "4xl", md: "5xl" }} color={"fg"}>
                    Starting with Mutuals is simple, fast, and free.
                  </Heading>
                  <Link
                    href={"https://app.mutuals.finance"}
                    target="_blank"
                    asChild={true}
                  >
                    <Button size="2xl" variant="solid" colorPalette={"blue"}>
                      Start for free
                    </Button>
                  </Link>
                </Stack>
              </Container>
            </Theme>
          </Card.Body>
        </Card.Root>
      </Container>
    </Box>
  );
}
