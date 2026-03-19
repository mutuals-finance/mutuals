"use client";

import { Box, Container, Stack } from "@mutuals/ui";
import { useState } from "react";
import SectionHeader from "src/features/shell/section-header";
import ownersImage from "@/assets/owners-product-slider.png";
import partnersImage from "@/assets/partners-product-slider.png";
import ActorCard from "@/features/home/actors/card";

export default function HomeActors() {
  const [active, setActive] = useState<"owners" | "partners">("owners");

  return (
    <Box my={"16"}>
      <Container maxW="7xl">
        <SectionHeader label={"Tailored to your needs"}>
          Built for Depth with Intuitive Use
        </SectionHeader>
        <Stack direction="row" gap={"6"} wrap={{ base: "wrap", lg: "nowrap" }}>
          <ActorCard
            animate={active === "owners" ? "grow" : "shrink"}
            benefit={
              "Automate global payroll, integrate DeFi protocols, and much more, leveraging full composability with the on-chain ecosystem with technical sovereignty."
            }
            description="Architects and Builders"
            image={partnersImage}
            onHoverStart={() => setActive("owners")}
            title="Full Control over Programmable Payments"
          />
          <ActorCard
            animate={active === "partners" ? "grow" : "shrink"}
            benefit={
              "Programmable money without the hurdles of web3. Receive payments directly to an email, phone number, social handle, or passkey."
            }
            description="Global Recipients"
            image={ownersImage}
            onHoverStart={() => setActive("partners")}
            title="Frictionless Access with Zero Configuration"
          />
        </Stack>
      </Container>
    </Box>
  );
}
