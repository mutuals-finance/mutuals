import { Box, Container, GridItem, Heading, SimpleGrid } from "@mutuals/ui";

import FeatureCard from "@/features/Home/Features/FeatureCard";

export default function HomeFeatures() {
  return (
    <Box mt="32" mb={"16"}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "2", lg: "6" }}>
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            <Heading>Use</Heading>
          </GridItem>
          <FeatureCard
            index={1}
            heading="All fungible assets"
            description="Major ERC20s tokens and ETH are supported. Allows for importing custom ERC20 tokens."
          />
          <FeatureCard
            index={4}
            heading="Free To Use"
            description="Zero protocol fees. Optional donation based funding program with special rewards."
          />
          <FeatureCard
            index={5}
            heading="Gnosis Safe"
            description="Connect multiple wallets at once. Intuitive multi-account overview about incoming and outgoing funds."
          />
          <FeatureCard
            index={3}
            heading="Multiple Wallets"
            description="Connect multiple wallets at once. Intuitive multi-account overview about incoming and outgoing funds."
          />

          <GridItem colSpan={{ base: 1, lg: 2 }}>
            <Heading>Explore</Heading>
          </GridItem>
          <FeatureCard
            index={2}
            heading="Open Source"
            description="Mutuals is open source and decentralized, with no owner, upgradability, or special privileges."
          />
          <FeatureCard
            index={3}
            heading="Docs"
            description="Connect multiple wallets at once. Intuitive multi-account overview about incoming and outgoing funds."
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
