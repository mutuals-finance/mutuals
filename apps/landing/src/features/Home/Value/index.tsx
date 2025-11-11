"use client";

import {
  Box,
  Button,
  Container,
  Stack,
  ScrollArea,
  Flex,
  Bleed,
  MotionBox,
  SimpleGrid,
} from "@mutuals/ui";
import SectionHeader from "src/features/Shell/SectionHeader";
import { IoCodeWorkingOutline, IoTimerOutline } from "react-icons/io5";
import { RiExchange2Line } from "react-icons/ri";
import ValueCard from "./ValueCard";
import SplitPaymentsImage from "@/assets/home/split-payments.png";
import TrackEarningsImage from "@/assets/home/track-earnings.png";
import AutomatePaymentsImage from "@/assets/home/automate-payments.png";
import MotionBoxWrapper, { itemVariants } from "@/components/MotionBoxWrapper";

const values = [
  {
    heading: "Split tokens",
    description:
      "Mutuals processes payments and allocates funds to recipients based on preset rules.",
    icon: <RiExchange2Line />,
    // image: SplitPaymentsImage,
  },
  {
    heading: "Automate payments",
    description:
      "Mutuals automates blockchain payments to ensure timely, rule-based transfers without manual intervention.",
    icon: <IoCodeWorkingOutline />,
    //image: AutomatePaymentsImage,
  },
  {
    heading: "Track earnings",
    description:
      "Mutuals tracks on-chain earnings in real time, giving recipients clear, transparent insights into their payouts.",
    icon: <IoTimerOutline />,
    // image: TrackEarningsImage,
  },
];
export default function HomeValue() {
  return (
    <MotionBoxWrapper asChild={true}>
      <Box my={"6"}>
        <Container maxW="6xl">
          {/*<MotionBox variants={itemVariants} asChild={true}>
            <SectionHeader label={"Explore Mutuals"}>
              Financial management for on-chain teams
            </SectionHeader>
          </MotionBox>*/}
          <SimpleGrid columns={{ base: 1, lg: 3 }} gap={"6"} mt={"0"}>
            {values.map((value, index) => (
              <MotionBox
                variants={itemVariants}
                key={value.heading}
                asChild={true}
              >
                <ValueCard {...value} />
              </MotionBox>
            ))}
          </SimpleGrid>
          <Stack align={"center"} mt={"12"}>
            <Button size={"2xl"} variant={"subtle"}>
              Explore the Platform
            </Button>
          </Stack>
        </Container>
      </Box>
    </MotionBoxWrapper>
  );
}
