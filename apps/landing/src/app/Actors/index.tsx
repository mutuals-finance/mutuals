"use client";

import { Box, Container, DarkMode, Stack } from "@splitfi/ui";

import ActorCard from "@/app/Actors/ActorCard";
import SectionHeader from "@/components/SectionHeader";

export default function HomeActors() {
  return (
    <Box my="24">
      <Container maxW="container.xl" px={"3"}>
        <SectionHeader label={"Explore SplitFi"}>
          Versatile Solutions For Everyone
        </SectionHeader>

        <Stack gap={"3"} direction="row">
          <DarkMode>
            <ActorCard
              animate={"shrink"}
              title="Project Owners"
              description="Mutuals lets you automate and distribute your project earnings."
              bg={"bg.1"}
              benefits={[
                "Highly customizable, gas-efficient smart contracts",
                "No need to worry about distributing token payments",
                "Automate income streams and track project earnings",
              ]}
              iconProps={{ color: "whiteAlpha.300" }}
              buttonProps={{ variant: "blackWhite" }}
            />
          </DarkMode>

          <ActorCard
            animate={"grow"}
            title="Project Partners"
            description="Mutuals enables trustless revenue distribution and removes reliance on intermediaries."
            benefits={[
              "Trustless distribution of revenues",
              "No reliance on intermediaries",
              "Clean and easy-to-use interface for analyzing project earnings",
            ]}
            bg={"blue.100"}
            buttonProps={{ colorScheme: "primary" }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
