"use client";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@splitfi/ui";

export default function PricingHeader() {
  return (
    <Box
      as="header"
      pt="32"
      position="relative"
      bg={useColorModeValue("blue.100", "blue.900")}
      roundedBottom="md"
    >
      <Container
        maxW="container.xl"
        px={{ base: "6", lg: "12" }}
        pb="12"
        pt="24"
        position="relative"
      >
        <SimpleGrid
          columns={{ lg: 2 }}
          gap={{ base: "6", lg: "12" }}
          alignItems="flex-end"
        >
          <Box>
            <Heading as="h1" variant="h.1" mb="3">
              Pricing
            </Heading>
            <Heading as="h2" variant="h.2" fontWeight="400">
              Simple pricing, powerful toolset
            </Heading>
          </Box>
          <Box>
            <Text fontSize={{ lg: "lg" }}>
              Using SplitFi is free — that’s it. To support our work you can
              forward a part of of your split&apos;s earnings as donation to our
              team. Everything else goes directly to your cause.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
