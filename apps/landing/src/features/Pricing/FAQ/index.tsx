import {
  AccordionItem,
  Container,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  Heading,
  GridItem,
  SimpleGrid,
} from "@mutuals/ui";
import items from "@/features/Pricing/FAQ/items";
import ShellSectionCard from "@/features/Shell/SectionCard";

export default function PricingFAQ() {
  return (
    <Container my="32" maxW="7xl">
      <SimpleGrid columns={{ base: 1, lg: 5 }} gap={{ base: "0", lg: "12" }}>
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <ShellSectionCard
            sectionHeaderProps={{
              children: "Questions? We're glad you asked.",
              label: "Frequently Asked Questions",
              mb: { base: "12", lg: "0" },
            }}
          />
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 3 }}>
          <AccordionRoot multiple>
            {items.map(({ title, children, ...props }, i) => (
              <AccordionItem key={i} value={title} {...props}>
                <AccordionItemTrigger py={"4"}>
                  <Heading as={"h5"} size="lg">
                    {title}
                  </Heading>
                </AccordionItemTrigger>
                <AccordionItemContent>{children}</AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
