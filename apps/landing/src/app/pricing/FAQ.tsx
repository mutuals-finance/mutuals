import {
  AccordionItem,
  Box,
  Container,
  Text,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  Heading,
} from "@mutuals/ui";

import SectionHeader from "@/components/SectionHeader";
import HeaderObserverChange from "@/providers/HeaderObserver/Change";
import faqItems from "@/app/pricing/faq-items";

export default function PricingFAQ() {
  return (
    <Box py="32" mt="32" layerStyle="fill.muted">
      <Container maxW="7xl">
        <SectionHeader mx="unset" textAlign={"left"} label={"Mutuals FAQ"}>
          Questions? We're glad you asked.
        </SectionHeader>

        <AccordionRoot multiple size={"lg"}>
          {faqItems.map(({ title, children, ...props }, i) => (
            <AccordionItem key={i} value={title} {...props}>
              <AccordionItemTrigger>
                <Heading as={"h5"} size="xl">
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
