"use client";

import { MotionBox, Box, Container, Stack } from "@mutuals/ui";

import ActorCard from "@/features/Home/Actors/Card";
import SectionHeader from "src/features/Shell/SectionHeader";
import { useState } from "react";
import ownersImage from "@/assets/owners-product-slider.jpg";
import partnersImage from "@/assets/partners-product-slider.jpg";
import { itemVariants } from "@/components/MotionBoxWrapper";

export default function HomeActors() {
  const [active, setActive] = useState<"owners" | "partners">("owners");

  return (
    <Box my={"32"}>
      <Container maxW="7xl">
        <MotionBox
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
          asChild={true}
        >
          <SectionHeader label={"Tailored to your needs"}>
            Built for Depth, Intuitive Use
          </SectionHeader>
        </MotionBox>
        <Stack gap={"6"} direction="row" wrap={{ base: "wrap", lg: "nowrap" }}>
          <ActorCard
            animate={active === "owners" ? "grow" : "shrink"}
            description="Architects and Builders"
            title="Full Control over Programmable Payments"
            image={ownersImage}
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
            image={partnersImage}
            onHoverStart={() => setActive("partners")}
          />
        </Stack>
      </Container>
    </Box>
  );
}
