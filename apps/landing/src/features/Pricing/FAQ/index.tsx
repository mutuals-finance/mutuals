import {
  AccordionItem,
  Container,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  Heading,
  Theme,
} from "@mutuals/ui";
import items from "@/features/Pricing/FAQ/items";
import ShellSectionCard from "@/features/Shell/SectionCard";

export default function PricingFAQ() {
  return (
    <Theme appearance="dark" bg={"bg.subtle"}>
      <Container mt="16" py={"32"} maxW="7xl">
        <ShellSectionCard
          sectionHeaderProps={{
            children: "Questions? We're glad you asked.",
            label: "Mutuals FAQ",
          }}
        >
          <AccordionRoot multiple size={"lg"}>
            {items.map(({ title, children, ...props }, i) => (
              <AccordionItem key={i} value={title} {...props}>
                <AccordionItemTrigger py={"6"}>
                  <Heading as={"h5"} size="xl">
                    {title}
                  </Heading>
                </AccordionItemTrigger>
                <AccordionItemContent>{children}</AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </ShellSectionCard>
      </Container>
    </Theme>
  );
}
