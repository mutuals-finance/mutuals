"use client";

import {
  Box,
  DarkMode,
  Container,
  Stack,
  useColorModeValue,
} from "@splitfi/ui";

import ActorCard from "@/app/Actors/ActorCard";
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
        <Container size="2xl" px={{ base: "3", lg: "6" }}>
          <SectionHeader label={"Explore Mutuals"}>
            Versatile Solutions For Everyone
          </SectionHeader>

          <Stack
            gap={"6"}
            direction="row"
            wrap={{ base: "wrap", lg: "nowrap" }}
          >
            <DarkMode>
              <ActorCard
                animate={active === "owners" ? "grow" : "shrink"}
                title="For Owners"
                description="Mutuals lets you automate and distribute your project earnings."
                bg={useColorModeValue("gray.900", "bg.2")}
                color={"white"}
                image={ownersImage}
                benefits={[
                  "Highly customizable, gas-efficient smart contracts",
                  "No need to worry about distributing token payments",
                  "Automate income streams and track project earnings",
                ]}
                iconProps={{ color: "whiteAlpha.300" }}
                buttonProps={{ variant: "blackWhite" }}
                onHoverStart={() => setActive("owners")}
              />
            </DarkMode>

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
