import { Container, SimpleGrid } from "@mutuals/ui";
import options from "@/features/Pricing/Options/items";
import PricingOptionsCard from "@/features/Pricing/Options/Card";

export default function PricingOptions() {
  return (
    <Container maxW="7xl" mt={{ base: "6", lg: "12" }} mb={"16"}>
      <SimpleGrid gap={{ base: "2", lg: "6" }} columns={{ base: 1, md: 3 }}>
        {options.map((option) => (
          <PricingOptionsCard key={option.heading} {...option} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
