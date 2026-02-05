import {
  Button,
  Heading,
  Container,
  Stack,
  Link,
  Box,
  Theme,
} from "@mutuals/ui";

export default function CTA() {
  return (
    <Theme appearance="dark">
      <Box
        py={"12"}
        mt="24"
        bgGradient="to-b"
        gradientFrom="bg"
        gradientVia="bg"
        gradientTo="bg.muted"
      >
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
              <Button
                size="xl"
                colorPalette={"brand"}
                blurred={true}
                rounded={"full"}
              >
                Start for free
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>
    </Theme>
  );
}
