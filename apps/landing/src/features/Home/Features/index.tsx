import { Box, Container, GridItem, Heading, SimpleGrid } from "@mutuals/ui";

import MotionBoxWrapper from "@/components/MotionBoxWrapper";
import HomeFeaturesCard from "@/features/Home/Features/Card";

export default function HomeFeatures() {
  return (
    <MotionBoxWrapper asChild={true}>
      <Box my="16">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={"6"}>
            <GridItem colSpan={{ base: 1, lg: 2 }}>
              <Heading size={"2xl"}>Use</Heading>
            </GridItem>
            <HomeFeaturesCard
              index={1}
              heading="Free To Use"
              description="Zero protocol fees. Optional donation-based funding program with special rewards."
              href={"/pricing"}
            />
            <HomeFeaturesCard
              index={2}
              heading="Multiple Wallets"
              description="Connect multiple wallets at once. Intuitive multi-account overview of incoming and outgoing funds."
              href={"https://app.mutuals.finance/auth/login"}
              linkProps={{ external: true, arrow: false }}
            />

            <GridItem colSpan={{ base: 1, lg: 2 }}>
              <Heading size={"2xl"}>Explore</Heading>
            </GridItem>
            <HomeFeaturesCard
              index={3}
              heading="Open Source"
              description="Mutuals is open source and decentralized, with no owner, upgradability, or special privileges."
              href={"https://github.com/mutuals-finance/mutuals"}
              linkProps={{ external: true, arrow: false }}
            />
            <HomeFeaturesCard
              index={4}
              heading="Blog"
              description="Updates, guides, and community insights to help you get the most out of Mutuals."
              href={"/blog"}
            />
          </SimpleGrid>
        </Container>
      </Box>
    </MotionBoxWrapper>
  );
}
