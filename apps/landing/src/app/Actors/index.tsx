"use client";

import { Box, Container, Stack, useColorModeValue } from "@splitfi/ui";

import ActorCard from "@/app/Actors/ActorCard";
import SectionHeader from "@/components/SectionHeader";
import { useState } from "react";
import { MotionConfig } from "framer-motion";

export default function HomeActors() {
  const [active, setActive] = useState<"owners" | "partners">("owners");

  return (
    <MotionConfig transition={{ type: "spring", mass: 0.5 }}>
      <Box my="32">
        <Container size="2xl">
          <SectionHeader label={"Explore Mutuals"}>
            Versatile Solutions For Everyone
          </SectionHeader>

          <Stack
            gap={"3"}
            direction="row"
            wrap={{ base: "wrap", lg: "nowrap" }}
          >
            <ActorCard
              animate={active === "owners" ? "grow" : "shrink"}
              title="Project Owners"
              description="Mutuals lets you automate and distribute your project earnings."
              bg={useColorModeValue("gray.900", "bg.2")}
              color={"white"}
              benefits={[
                "Highly customizable, gas-efficient smart contracts",
                "No need to worry about distributing token payments",
                "Automate income streams and track project earnings",
              ]}
              iconProps={{ color: "whiteAlpha.300" }}
              buttonProps={{ colorScheme: "amber" }}
              onHoverStart={() => setActive("owners")}
            />

            <ActorCard
              animate={active === "partners" ? "grow" : "shrink"}
              title="Project Partners"
              description="Mutuals enables trustless revenue distribution and removes reliance on intermediaries."
              benefits={[
                "Trustless distribution of revenues",
                "No reliance on intermediaries",
                "Clean and easy-to-use interface for analyzing project earnings",
              ]}
              bg={useColorModeValue("blue.100", "blue.900")}
              buttonProps={{ colorScheme: "primary" }}
              onHoverStart={() => setActive("partners")}
            />
          </Stack>
        </Container>
      </Box>
    </MotionConfig>
  );
}
