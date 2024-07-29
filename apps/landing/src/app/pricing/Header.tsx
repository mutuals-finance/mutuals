import { Box, Stack, Button, Container, Heading, Text } from "@mutuals/ui";

export default function PricingHeader() {
  return (
    <Box as="header" my="32" pt={"20"}>
      <Container
        maxW={{ base: "container.sm", lg: "container.lg" }}
        px={{ base: "3", lg: "12" }}
      >
        <Stack textAlign={"center"} gap={"6"} align={"center"}>
          <Heading as="h1" variant="h.1">
            Pricing
          </Heading>

          <Text fontSize={{ lg: "2xl" }} color={"alpha.2"}>
            To support our work you can forward a part of of your split&apos;s
            earnings as donation to our team. Everything else goes directly to
            your cause.
          </Text>

          <Button colorScheme={"primary"} size={"lg"}>
            Get Started
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
