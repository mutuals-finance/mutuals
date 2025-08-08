"use client";

import {
  Theme,
  Box,
  Button,
  Container,
  SimpleGrid,
  Stack,
  GridItem,
} from "@mutuals/ui";
import SectionHeader from "src/features/Shell/SectionHeader";
import { IoCodeWorkingOutline, IoTimerOutline } from "react-icons/io5";
import { RiExchange2Line } from "react-icons/ri";
import ValueCard from "./ValueCard";

const values = [
  {
    heading: "Split tokens",
    description:
      "Mutuals processes payments and allocates funds to recipients based on preset rules.",
    icon: <RiExchange2Line />,
  },
  {
    heading: "Automate payments",
    description:
      "Mutuals automates blockchain payments to ensure timely, rule-based transfers without manual intervention.",
    icon: <IoCodeWorkingOutline />,
  },
  {
    heading: "Track earnings",
    description:
      "Mutuals tracks on-chain earnings in real time, giving recipients clear, transparent insights into their payouts.",
    icon: <IoTimerOutline />,
  },
];
export default function HomeValue() {
  return (
    <Theme appearance={"dark"}>
      <Box my={"16"} py={"16"} bg={"bg.subtle"}>
        <Container maxW="7xl">
          <SectionHeader label={"Explore Mutuals"}>
            Financial management for on-chain teams
          </SectionHeader>

          <SimpleGrid
            columns={{
              base: 1,
              lg: 3,
            }}
            gap={{ base: "2", lg: "2" }}
          >
            {values.map((value, index) => (
              <GridItem key={value.heading}>
                <ValueCard {...value} />
              </GridItem>
            ))}
          </SimpleGrid>

          <Stack align={"center"} mt={"12"}>
            <Button size={"2xl"} variant={"solid"} rounded={"4xl"}>
              Explore the Platform
            </Button>
          </Stack>
        </Container>
      </Box>
    </Theme>
  );
}
