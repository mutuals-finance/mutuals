"use client";

import { Box, Container, Stack } from "@mutuals/ui";

import ActorCard from "@/app/_components/Actors/Card";
import SectionHeader from "@/components/SectionHeader";
import { useState } from "react";
import { MotionConfig } from "framer-motion";
import ownersImage from "@/assets/owners-product-slider.webp";
import partnersImage from "@/assets/partners-product-slider.webp";

export default function HomeActors() {
  const [active, setActive] = useState<"owners" | "partners">("owners");

  return (
    <MotionConfig transition={{ type: "spring", mass: 0.5 }}>
      <Box my="48">
        <Container maxW="7xl" px={{ base: "3", lg: "6" }}>
          <SectionHeader label={"Explore Mutuals"}>
            Versatile Solutions For Everyone
          </SectionHeader>

          <Stack
            gap={"6"}
            direction="row"
            wrap={{ base: "wrap", lg: "nowrap" }}
          >
            <ActorCard
              animate={active === "owners" ? "grow" : "shrink"}
              title="For Owners"
              description="Mutuals lets you automate and distribute your project earnings."
              bg={"gray.900"}
              benefitsProps={{
                color: { base: "gray.50/50", _dark: "gray.50/50" },
              }}
              color={"gray.50"}
              image={ownersImage}
              benefits={[
                "Highly customizable, gas-efficient smart contracts",
                "No need to worry about distributing token payments",
                "Automate income streams and track project earnings",
              ]}
              iconProps={{
                color: "gray.50/20",
              }}
              buttonProps={{ colorPalette: "orange" }}
              onHoverStart={() => setActive("owners")}
            />

            <ActorCard
              animate={active === "partners" ? "grow" : "shrink"}
              title="For Partners"
              description="Mutuals enables trustless revenue distribution and removes reliance on intermediaries."
              benefits={[
                "Trustless distribution of revenues",
                "No reliance on intermediaries",
                "Clean and easy-to-use interface for analyzing project earnings",
              ]}
              image={partnersImage}
              bg={{ base: "blue.300", _dark: "blue.950" }}
              onHoverStart={() => setActive("partners")}
            />
          </Stack>
        </Container>
      </Box>
    </MotionConfig>
  );
}
