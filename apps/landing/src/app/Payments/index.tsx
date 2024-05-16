"use client";

import {
  Box,
  Container,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import PaymentCard from "@/app/Payments/PaymentCard";
import featureImage from "@/assets/feature.png";
import SectionHeader from "@/components/SectionHeader";

export default function HomePayments() {
  return (
    <>
      <Container maxW="container.xl" px={{ base: "6", lg: "12" }}>
        <SectionHeader>Payments For Every Use Case</SectionHeader>
        <SimpleGrid columns={{ base: 2, lg: 4 }} gap={{ base: "6", lg: "12" }}>
          <PaymentCard
            heading="Percentage allocation"
            description="Seamlessly convert your funds between tokens and fiat in realtime"
            image={featureImage}
          />
          <PaymentCard
            heading="Prioritized allocation"
            description="Optimize strategic asset distribution for maximum efficiency"
            image={featureImage}
          />
          <PaymentCard
            heading="Recurring payments"
            description="Streamline regular transactions for consistent financial management"
            image={featureImage}
          />
          <PaymentCard
            heading="Instant Liquidity"
            description="Efficient and automated systems for on-demand liquidity"
            image={featureImage}
          />
        </SimpleGrid>
      </Container>
      <Box
        my="24"
        bg={useColorModeValue("blue.50", "blue.900")}
        w="full"
        h="48"
      />
    </>
  );
}
