"use client";

import { Box, Container, SimpleGrid } from "@mutuals/ui";
import SectionHeader from "@/components/SectionHeader";
import {
  IoCodeWorkingOutline,
  IoTimerOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";
import { RiExchange2Line } from "react-icons/ri";
import ValueCard from "./ValueCard";

const values = [
  {
    heading: "Split tokens",
    description:
      "Mutuals integrates with your clients systems and connects with a range of data sources",
    icon: RiExchange2Line,
  },
  {
    heading: "Automate payments",
    description:
      "Mutuals integrates with your clients systems and connects with a range of data sources",
    icon: IoCodeWorkingOutline,
  },
  {
    heading: "Track earnings",
    description:
      "Mutuals integrates with your clients systems and connects with a range of data sources",
    icon: IoTimerOutline,
  },
  {
    heading: "Accelerate partnerships",
    description:
      "Mutuals integrates with your clients systems and connects with a range of data sources",
    icon: IoTrendingUpOutline,
  },
];
export default function HomeValue() {
  return (
    <Box my="32">
      <Container maxW="7xl">
        <SectionHeader>Financial management for on-chain teams</SectionHeader>

        <SimpleGrid
          columns={{
            base: 2,
            lg: 4,
          }}
          gap={{ base: "6", lg: "12" }}
        >
          {values.map((value) => (
            <ValueCard key={value.heading} {...value} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
