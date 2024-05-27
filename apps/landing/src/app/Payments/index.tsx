"use client";

import { Box, Container, SimpleGrid, DarkMode } from "@splitfi/ui";

import PaymentCard from "@/app/Payments/PaymentCard";
import featureImage from "@/assets/feature.png";
import SectionHeader from "@/components/SectionHeader";

export default function HomePayments() {
  return (
    <DarkMode>
      <Box mb={"24"} py={"24"} bg={"gray.900"}>
        <Container maxW="container.lg" px={{ base: "6", lg: "6" }}>
          <SectionHeader label={"Flexible Setup"}>
            Payments For Every Use Case
          </SectionHeader>
          <SimpleGrid columns={{ base: 2, lg: 3 }} gap={"6"}>
            <PaymentCard
              tag="Percentage allocation"
              headline="Seamlessly convert your funds between tokens and fiat in realtime."
              description="Recipient allocation based on relative amounts."
              image={featureImage}
            />
            <PaymentCard
              tag="Prioritized allocation"
              headline="Optimize strategic asset distribution for maximum efficiency."
              description="Limited cashflow with unsupervised distribution? Use SplitFi's account-based priorization engine to predetermine allowed withdraws."
              image={featureImage}
            />
            <PaymentCard
              tag="Recurring payments"
              headline="Streamline regular transactions for consistent financial management."
              description="Setup your Payment Pool to automatically trigger payments in regular intervals. On-chain verification ensures that only allowed funds are transferred."
              image={featureImage}
            />
          </SimpleGrid>
        </Container>
      </Box>
    </DarkMode>
  );
}
