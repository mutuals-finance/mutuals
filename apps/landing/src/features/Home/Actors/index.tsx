"use client";

import { Box, Container, Stack } from "@mutuals/ui";

import ActorCard from "@/features/Home/Actors/Card";
import SectionHeader from "src/features/Shell/SectionHeader";
import { useState } from "react";
import ownersImage from "@/assets/owners-product-slider.png";
import partnersImage from "@/assets/partners-product-slider.png";

export default function HomeActors() {
  const [active, setActive] = useState<"owners" | "partners">("owners");

  return (
    <Box my={"16"}>
      <Container maxW="7xl">
        <SectionHeader label={"Tailored to your needs"}>
          Built for Depth with Intuitive Use
        </SectionHeader>
        <Stack gap={"6"} direction="row" wrap={{ base: "wrap", lg: "nowrap" }}>
          <ActorCard
            animate={active === "owners" ? "grow" : "shrink"}
            description="Architects and Builders"
            title="Full Control over Programmable Payments"
            image={partnersImage}
            benefit={
              "Automate global payroll, integrate DeFi protocols, and much more, leveraging full composability with the on-chain ecosystem with technical sovereignty."
            }
            onHoverStart={() => setActive("owners")}
          />
          <ActorCard
            animate={active === "partners" ? "grow" : "shrink"}
            description="Global Recipients"
            title="Frictionless Access with Zero Configuration"
            benefit={
              "Programmable money without the hurdles of web3. Receive payments directly to an email, phone number, social handle, or passkey."
            }
            image={ownersImage}
            onHoverStart={() => setActive("partners")}
          />
        </Stack>
      </Container>
    </Box>
  );
}
