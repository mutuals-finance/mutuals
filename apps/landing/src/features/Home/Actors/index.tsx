"use client";

import { Box, Container, Stack } from "@mutuals/ui";

import ActorCard from "@/features/Home/Actors/Card";
import SectionHeader from "src/features/Shell/SectionHeader";
import { useState } from "react";
import ownersImage from "@/assets/owners-product-slider.webp";
import partnersImage from "@/assets/partners-product-slider.webp";

export default function HomeActors() {
  const [active, setActive] = useState<"owners" | "partners">("owners");

  return (
    <Box my={"32"}>
      <Container maxW="7xl">
        <SectionHeader label={"tailored to your needs"}>
          Versatile Solutions For Everyone
        </SectionHeader>

        <Stack gap={"6"} direction="row" wrap={{ base: "wrap", lg: "nowrap" }}>
          <ActorCard
            animate={active === "owners" ? "grow" : "shrink"}
            description="Project Owners"
            title="Simplified and automated revenue distribution."
            image={ownersImage}
            benefit={
              "Mutuals provides solutions to distribute payments, automate income streams and track your project earnings."
            }
            onHoverStart={() => setActive("owners")}
          />

          <ActorCard
            animate={active === "partners" ? "grow" : "shrink"}
            description="Project Partners"
            title="Transparent and trustless income guarantees."
            benefit={
              "Mutuals on-chain solution splits income streams based on predetermined configurations that are immutable by design."
            }
            image={partnersImage}
            onHoverStart={() => setActive("partners")}
          />
        </Stack>
      </Container>
    </Box>
  );
}
