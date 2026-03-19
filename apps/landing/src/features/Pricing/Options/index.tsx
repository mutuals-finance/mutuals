import { Container, SimpleGrid } from "@mutuals/ui";
import PricingOptionsCard from "@/features/pricing/options/card";
import options from "@/features/pricing/options/items";

export default function PricingOptions() {
  return (
    <Container maxW="7xl" mb={"16"} mt={{ base: "6", lg: "12" }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "2", lg: "6" }}>
        {options.map((option) => (
          <PricingOptionsCard key={option.heading} {...option} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
