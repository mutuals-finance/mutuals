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
              description="Zero protocol fees. Optional donation-based funding program with special rewards."
              href={"/pricing"}
            />
            <FeatureCard
              index={2}
              heading="Multiple Wallets"
              description="Connect multiple wallets at once. Intuitive multi-account overview of incoming and outgoing funds."
              href={"https://app.mutuals.finance/auth/login"}
              linkProps={{ external: true, arrow: false }}
            />

            <GridItem colSpan={{ base: 1, lg: 2 }}>
              <Heading size={"2xl"}>Explore</Heading>
            </GridItem>
            <FeatureCard
              index={3}
              heading="Open Source"
              description="Mutuals is open source and decentralized, with no owner, upgradability, or special privileges."
              href={"https://github.com/mutuals-finance/mutuals"}
              linkProps={{ external: true, arrow: false }}
            />
            <FeatureCard
              index={4}
              heading="Blog"
              description="Updates, guides, and community insights to help you get the most out of Mutuals."
              href={"/blog/categories"}
            />
          </SimpleGrid>
        </Container>
      </Box>
    </MotionBoxWrapper>
  );
}
