"use client";

import { Box, Button, Container, SimpleGrid, Stack } from "@mutuals/ui";
import SectionHeader from "src/features/Shell/SectionHeader";
import { IoCodeWorkingOutline, IoTimerOutline } from "react-icons/io5";
import { RiExchange2Line } from "react-icons/ri";
import ValueCard from "./ValueCard";
import NextImage from "next/image";
import transitionImage from "@/assets/bg-hero-bottom-right.png";

const values = [
  {
    heading: "Split tokens",
    description:
      "Mutuals integrates with your clients systems and connects with a range of data sources",
    icon: <RiExchange2Line />,
  },
  {
    heading: "Automate payments",
    description:
      "Mutuals integrates with your clients systems and connects with a range of data sources",
    icon: <IoCodeWorkingOutline />,
  },
  {
    heading: "Track earnings",
    description:
      "Mutuals integrates with your clients systems and connects with a range of data sources",
    icon: <IoTimerOutline />,
  },
];
export default function HomeValue() {
  return (
    <Box my={"16"} py={"16"} position={"relative"}>
      <NextImage
        src={transitionImage}
        alt={"Mutuals values"}
        fill={true}
        style={{
          objectFit: "contain",
          objectPosition: "bottom right",
          opacity: "0.3",
        }}
      />
      <Container maxW="7xl">
        <SectionHeader label={"Explore Mutuals"}>
          Financial management for on-chain teams
        </SectionHeader>

        <SimpleGrid
          columns={{
            base: 1,
            lg: 3,
          }}
          gap={{ base: "6", lg: "12" }}
        >
          {values.map((value) => (
            <ValueCard key={value.heading} {...value} />
          ))}
        </SimpleGrid>

        <Stack align={"center"} mt={"12"}>
          <Button size={"2xl"} variant={"surface"}>
            Explore the Platform
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
