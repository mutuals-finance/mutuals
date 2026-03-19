import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
} from "@mutuals/ui";
import items from "@/features/pricing/faq/items";
import ShellSectionCard from "@/features/shell/section-card";

export default function PricingFAQ() {
  return (
    <Container maxW="7xl" my="32">
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
          <AccordionRoot multiple={true}>
            {items.map(({ title, children, ...props }) => (
              <AccordionItem key={title} value={title} {...props}>
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
