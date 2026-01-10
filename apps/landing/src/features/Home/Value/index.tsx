import {
  Box,
  Button,
  Container,
  Stack,
  MotionBox,
  SimpleGrid,
} from "@mutuals/ui";
import ValueCard from "./ValueCard";
import MotionBoxWrapper, { itemVariants } from "@/components/MotionBoxWrapper";
import {
  LuChartNoAxesCombined,
  LuFileCode2,
  LuShieldCheck,
} from "react-icons/lu";

const values = [
  {
    heading: "Programmable Payments",
    description:
      "Build custom payment strategies using hooks or choose from pre-built options. Define exactly how funds flow from shared pools. No coding is required for standard setups.",
    icon: <LuFileCode2 />,
  },
  {
    heading: "Borderless, Trustless Payments",
    description:
      "Send payments globally at a fraction of traditional costs. Once rules are set, their enforcement is guaranteed through smart contracts.",
    icon: <LuShieldCheck />,
  },
  {
    heading: "Put Idle Assets to Work",
    description:
      "Integrate any existing DeFi protocol, to automatically earn yield on assets that would otherwise sit idle. Easy to set up using the same programmable logic.",
    icon: <LuChartNoAxesCombined />,
  },
];
export default function HomeValue() {
  return (
    <MotionBoxWrapper asChild={true}>
      <Box my={"6"}>
        <Container maxW="6xl">
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
            <Button size={"xl"} variant={"subtle"}>
              Explore the Platform
            </Button>
          </Stack>
        </Container>
      </Box>
    </MotionBoxWrapper>
  );
}
