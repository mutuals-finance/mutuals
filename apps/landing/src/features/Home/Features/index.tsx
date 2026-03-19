import { Box, Container, GridItem, Heading, SimpleGrid } from "@mutuals/ui";

import MotionBoxWrapper from "@/components/motion-box-wrapper";
import HomeFeaturesCard from "@/features/home/features/card";

export default function HomeFeatures() {
  return (
    <MotionBoxWrapper asChild={true}>
      <Box my={"16"}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={"6"}>
            <GridItem colSpan={{ base: 1, lg: 2 }}>
              <Heading size={"2xl"}>Use</Heading>
            </GridItem>
            <HomeFeaturesCard
              description="Zero protocol fees. Optional donation-based funding program with special rewards."
              heading="Free To Use"
              href={"/pricing"}
              index={1}
            />
            <HomeFeaturesCard
              description="Connect multiple wallets at once. Intuitive multi-account overview of incoming and outgoing funds."
              heading="Multiple Wallets"
              href={"https://app.mutuals.finance/auth/login"}
              index={2}
              linkProps={{ external: true, arrow: false }}
            />

            <GridItem colSpan={{ base: 1, lg: 2 }}>
              <Heading size={"2xl"}>Explore</Heading>
            </GridItem>
            <HomeFeaturesCard
              description="Mutuals is open source and decentralized, with no owner, upgradability, or special privileges."
              heading="Open Source"
              href={"https://github.com/mutuals-finance/mutuals"}
              index={3}
              linkProps={{ external: true, arrow: false }}
            />
            <HomeFeaturesCard
              description="Updates, guides, and community insights to help you get the most out of Mutuals."
              heading="Blog"
              href={"/blog"}
              index={4}
            />
          </SimpleGrid>
        </Container>
      </Box>
    </MotionBoxWrapper>
  );
}
