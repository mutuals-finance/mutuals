import { Box, Container, GridItem, Heading, SimpleGrid } from "@mutuals/ui";

import MotionBoxWrapper from "@/components/MotionBoxWrapper";
import FeatureCard from "@/features/Home/Features/FeatureCard";

export default function HomeFeatures() {
  return (
    <MotionBoxWrapper asChild={true}>
      <Box mt="32" mb={"16"}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={"6"}>
            <GridItem colSpan={{ base: 1, lg: 2 }}>
              <Heading size={"2xl"}>Use</Heading>
            </GridItem>
            <FeatureCard
              index={1}
              heading="Free To Use"
              description="Zero protocol fees. Optional donation based funding program with special rewards."
            />
            <FeatureCard
              index={2}
              heading="Multiple Wallets"
              description="Connect multiple wallets at once. Intuitive multi-account overview about incoming and outgoing funds."
            />

            <GridItem colSpan={{ base: 1, lg: 2 }}>
              <Heading size={"2xl"}>Explore</Heading>
            </GridItem>
            <FeatureCard
              index={3}
              heading="Open Source"
              description="Mutuals is open source and decentralized, with no owner, upgradability, or special privileges."
            />
            <FeatureCard
              index={4}
              heading="Blog"
              description="Connect multiple wallets at once. Intuitive multi-account overview about incoming and outgoing funds."
            />
          </SimpleGrid>
        </Container>
      </Box>
    </MotionBoxWrapper>
  );
}
