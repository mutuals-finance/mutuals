import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Theme,
} from "@mutuals/ui";

export default function CTA() {
  return (
    <Theme appearance="dark">
      <Box
        bgGradient="to-b"
        gradientFrom="bg"
        gradientTo="bg.muted"
        gradientVia="bg"
        mt="24"
        py={"12"}
      >
        <Container
          maxW="2xl"
          position={"relative"}
          px={{ base: "2", lg: "12" }}
          py={{ base: "6", lg: "12" }}
        >
          <Stack
            alignItems="center"
            gap={"6"}
            justifyContent="center"
            textAlign={"center"}
          >
            <Heading color={"fg"} size={{ base: "4xl", md: "5xl" }}>
              Starting with Mutuals is simple, fast, and free.
            </Heading>
            <Link
              asChild={true}
              href={"https://app.mutuals.finance"}
              target="_blank"
            >
              <Button colorPalette={"brand"} size="xl" variant={"gradient"}>
                Start for free
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>
    </Theme>
  );
}
