import { Container, SimpleGrid, Box, GridItem } from "@mutuals/ui";

import projectOwnersImage from "@/assets/pricing/project-owners.webp";
import stakeholdersImage from "@/assets/pricing/stakeholders.webp";
import PricingActorsCard from "@/features/Pricing/Actors/Card";

export default function PricingActors() {
  return (
    <Box my={"32"}>
      <Container maxW="7xl">
        <SimpleGrid gap={{ base: "2", lg: "16" }} columns={{ base: 1, md: 2 }}>
          <GridItem>
            <PricingActorsCard
              title={"Distribute payments, track project earnings"}
              description={
                "Project owners are not charged for deploying a Payment Pool. Lazy deployment allows to offload deployment transaction costs to recipients."
              }
              image={projectOwnersImage}
            />
          </GridItem>
          <GridItem>
            <PricingActorsCard
              title={"Transparent and trustless income guarantees"}
              description={
                "Project partners benefit from income streams based on predetermined configurations that are immutable by design. If desired, donations are split upon withdrawal."
              }
              image={stakeholdersImage}
            />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
