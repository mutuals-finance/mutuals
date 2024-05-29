import { Box, Container, SimpleGrid, DarkMode } from "@splitfi/ui";

import PaymentCard from "@/app/Payments/PaymentCard";
import percentImage from "@/assets/percent.webp";
import prioritizedImage from "@/assets/prioritized.webp";
import bgImage from "@/assets/cta-bg.jpg";
import SectionHeader from "@/components/SectionHeader";
import NextImage from "next/image";

const payments = [
  {
    tag: "Percentage allocation",
    headline:
      "Seamlessly convert your funds between tokens and fiat in realtime.",
    description: "Recipient allocation based on relative amounts.",
    image: percentImage,
  },
  {
    tag: "Prioritized allocation",
    headline: "Optimize strategic asset distribution for maximum efficiency.",
    description:
      "Limited cashflow with unsupervised distribution? Use SplitFi's account-based priorization engine to predetermine allowed withdraws.",
    image: prioritizedImage,
  },
  {
    tag: "Recurring payments",
    headline:
      "Streamline regular transactions for consistent financial management.",
    description:
      "Setup your Payment Pool to automatically trigger payments in regular intervals. On-chain verification ensures that only allowed funds are transferred.",
    image: percentImage,
  },
];
export default function HomePayments() {
  return (
    <Box bg={"bg.2"} pb="24">
      <Container maxW="container.xl" px={{ base: "6", lg: "12" }}>
        <DarkMode>
          <Box rounded={"lg"} position={"relative"} overflow={"hidden"}>
            <Box position={"absolute"} inset={"0"}>
              <NextImage
                src={bgImage}
                alt={"Payments"}
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </Box>
            <Box
              position={"relative"}
              p={{ base: "6", lg: "12" }}
              bg={"blackAlpha.600"}
            >
              <SectionHeader>Payments For Every Use Case</SectionHeader>
              <SimpleGrid columns={{ base: 1, lg: 3 }} gap={"6"}>
                {payments.map((payment) => (
                  <PaymentCard {...payment} key={payment.tag} />
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </DarkMode>
      </Container>
    </Box>
  );
}
