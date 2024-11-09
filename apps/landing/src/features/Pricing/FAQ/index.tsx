import {
  AccordionItem,
  Box,
  Container,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  Heading,
} from "@mutuals/ui";
import SectionHeader from "@/components/SectionHeader";
import items from "@/features/Pricing/FAQ/items";

export default function PricingFAQ() {
  return (
    <Box py="32" mt="32" layerStyle="fill.muted">
      <Container maxW="7xl">
        <SectionHeader mx="unset" textAlign={"left"} label={"Mutuals FAQ"}>
          Questions? We're glad you asked.
        </SectionHeader>

        <AccordionRoot multiple size={"lg"}>
          {items.map(({ title, children, ...props }, i) => (
            <AccordionItem key={i} value={title} {...props}>
              <AccordionItemTrigger py={"6"}>
                <Heading as={"h5"} size="2xl">
                  {title}
                </Heading>
              </AccordionItemTrigger>
              <AccordionItemContent>{children}</AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Container>
    </Box>
  );
}
