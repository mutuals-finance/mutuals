"use client";

import { Box, Container, SimpleGrid } from "@splitfi/ui";
import SectionHeader from "@/components/SectionHeader";
import { IoGitMerge, IoRocket, IoSearch, IoSparkles } from "react-icons/io5";
import ValueCard from "@/app/Value/ValueCard";

const values = [
  {
    heading: "Split tokens",
    description:
      "SplitFi integrates with your clients systems and connects with a range of data sources",
    icon: IoGitMerge,
  },
  {
    heading: "Automate payments",
    description:
      "SplitFi integrates with your clients systems and connects with a range of data sources",
    icon: IoSparkles,
  },
  {
    heading: "Track earnings",
    description:
      "SplitFi integrates with your clients systems and connects with a range of data sources",
    icon: IoSearch,
  },
  {
    heading: "Accelerate partnerships",
    description:
      "SplitFi integrates with your clients systems and connects with a range of data sources",
    icon: IoRocket,
  },
];
export default function HomeValue() {
  return (
    <Box bg={"bg.1"} my="24">
      <Container maxW="container.xl" px={{ base: "6", lg: "12" }}>
        <SectionHeader label={"Fully fledged toolset"}>
          Financial management for on-chain teams
        </SectionHeader>

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
