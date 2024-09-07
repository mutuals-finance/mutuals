import {
  AccordionItem,
  Box,
  Container,
  Text,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@mutuals/ui";

import SectionHeader from "@/components/SectionHeader";
import HeaderObserverChange from "@/providers/HeaderObserver/Change";
import faqItems from "@/app/pricing/faq-items";

export default function PricingFAQ() {
  return (
    <HeaderObserverChange theme={"dark"}>
      <Box py="32" mt="32" bg={"bg.2"} className={"dark"}>
        <Container maxW="container.xl" px={{ base: "6", lg: "12" }}>
          <SectionHeader mx="unset" textAlign={"left"} label={"Mutuals FAQ"}>
            Questions? We're glad you asked.
          </SectionHeader>

          <AccordionRoot multiple>
            {faqItems.map(({ title, children, ...props }, i) => (
              <AccordionItem key={i} value={title} {...props}>
                <AccordionItemTrigger>
                  <Text fontSize="lg" color={"color.1"}>
                    {title}
                  </Text>
                </AccordionItemTrigger>
                <AccordionItemContent>{children}</AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </Container>
      </Box>
    </HeaderObserverChange>
  );
}
