"use client";

import { Box, Container, SimpleGrid, DarkMode } from "@splitfi/ui";

import ActorCard from "@/app/Actors/ActorCard";
import SectionHeader from "@/components/SectionHeader";

export default function HomeActors() {
  return (
    <Box my="24">
      <Container maxW="container.xl" px={{ base: "6", lg: "12" }}>
        <SectionHeader label={"Explore SplitFi"}>
          Versatile Solutions For Everyone
        </SectionHeader>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={"6"}
          alignItems="flex-start"
        >
          <DarkMode>
            <ActorCard
              title="Automate and Track Project Earnings"
              subtitle="For Owners"
              description="SplitFi lets you automate and distribute your project earnings."
              href="#"
              bg={"gray.900"}
              benefits={[
                "Highly customizable, gas-efficient smart contracts",
                "No need to worry about distributing token payments",
                "Automate income streams and track project earnings",
              ]}
            />
          </DarkMode>
          <ActorCard
            title="Trustless Revenue Distribution"
            subtitle="For Partners"
            description="SplitFi enables trustless revenue distribution and removes reliance on intermediaries."
            benefits={[
              "Trustless distribution of revenues",
              "No reliance on intermediaries",
              "Clean and easy-to-use interface for analyzing project earnings",
            ]}
            href="#"
            bg={"primary.100"}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
