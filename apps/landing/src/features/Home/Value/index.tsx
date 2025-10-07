"use client";

import { Box, Button, Container, Stack, ScrollArea, Flex } from "@mutuals/ui";
import SectionHeader from "src/features/Shell/SectionHeader";
import { IoCodeWorkingOutline, IoTimerOutline } from "react-icons/io5";
import { RiExchange2Line } from "react-icons/ri";
import ValueCard from "./ValueCard";
import SplitPaymentsImage from "@/assets/home/split-payments.png";
import TrackEarningsImage from "@/assets/home/track-earnings.png";
import AutomatePaymentsImage from "@/assets/home/automate-payments.png";

const values = [
  {
    heading: "Split tokens",
    description:
      "Mutuals processes payments and allocates funds to recipients based on preset rules.",
    icon: <RiExchange2Line />,
    image: SplitPaymentsImage,
  },
  {
    heading: "Automate payments",
    description:
      "Mutuals automates blockchain payments to ensure timely, rule-based transfers without manual intervention.",
    icon: <IoCodeWorkingOutline />,
    image: AutomatePaymentsImage,
  },
  {
    heading: "Track earnings",
    description:
      "Mutuals tracks on-chain earnings in real time, giving recipients clear, transparent insights into their payouts.",
    icon: <IoTimerOutline />,
    image: TrackEarningsImage,
  },
];
export default function HomeValue() {
  return (
    <Box my={"16"}>
      <Container maxW="6xl">
        <SectionHeader label={"Explore Mutuals"}>
          Financial management for on-chain teams
        </SectionHeader>

        <ScrollArea.Root w="full" size="xs">
          <ScrollArea.Viewport>
            <ScrollArea.Content py="4">
              <Flex gap={{ base: "4", lg: "6" }} flexWrap="nowrap">
                {values.map((value, index) => (
                  <ValueCard
                    key={value.heading}
                    {...value}
                    w={{
                      base: "72",
                      lg: "calc(33.33% - var(--chakra-spacing-6))",
                    }}
                    flexShrink="0"
                  />
                ))}
              </Flex>
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="horizontal" />
          <ScrollArea.Corner />
        </ScrollArea.Root>

        <Stack align={"center"} mt={"12"}>
          <Button size={"2xl"} variant={"surface"} rounded={"4xl"}>
            Explore the Platform
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
