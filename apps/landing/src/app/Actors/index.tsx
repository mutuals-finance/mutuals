"use client";

import {
  Box,
  Container,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import ActorCard from "@/app/Actors/ActorCard";
import SectionHeader from "@/components/SectionHeader";

export default function HomeActors() {
  return (
    <>
      <Box my="24">
        <Container maxW="container.xl" px={{ base: "6", lg: "12" }}>
          <SectionHeader>Versatile Solutions For Everyone</SectionHeader>

          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            gap={{ base: "6", lg: "12" }}
            alignItems="flex-start"
          >
            <ActorCard
              title="Automate and Track Project Earnings"
              subtitle="For Creators"
              description="No need to worry about distributing token payments. Utilize our highly customizable, gas-efficient smart contracts to automate token payments and track your project earnings."
              href="#"
            />
            <ActorCard
              title="Trustless Revenue Distribution"
              subtitle="For Stakeholders"
              description="Trustless distribution of revenues without relying on intermediaries. Supported by a clean and easy-to-use interface for analyzing project earnings."
              href="#"
            />
          </SimpleGrid>
        </Container>
      </Box>
      <Box
        my="24"
        bg={useColorModeValue("blue.50", "blue.900")}
        w="full"
        h="40"
      />
    </>
  );
}
