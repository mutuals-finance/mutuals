import { Box, Container, SimpleGrid } from "@mutuals/ui";

import PaymentCard from "@/features/Home/Payments/PaymentCard";
import percentImage from "@/assets/percent.webp";
import prioritizedImage from "@/assets/prioritized.webp";
import SectionHeader from "src/features/Shell/SectionHeader";

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
      "Limited cashflow with unsupervised distribution? Use Mutual's account-based priorization engine to predetermine allowed withdraws.",
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
    <Box my="24">
      <Container maxW="container.xl" px={{ base: "6", lg: "12" }}>
        <SectionHeader label={"Flexible Setup"}>
          Payments For Every Use Case
        </SectionHeader>
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={"6"}>
          {payments.map((payment) => (
            <PaymentCard {...payment} key={payment.tag} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
