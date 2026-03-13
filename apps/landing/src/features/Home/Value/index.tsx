import {
  Box,
  Button,
  Container,
  MotionBox,
  VStack,
  Link,
  ScrollArea,
  Flex,
  Bleed,
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
    heading: "Borderless and Trustless",
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
      <Box>
        <Container maxW="6xl">
          <Bleed inline="6">
            <ScrollArea.Root w="full" mb={"6"}>
              <ScrollArea.Viewport>
                <ScrollArea.Content p="6">
                  <Flex gap="6" flexWrap="nowrap">
                    {values.map((value, index) => (
                      <MotionBox
                        variants={itemVariants}
                        key={value.heading}
                        asChild={true}
                      >
                        <ValueCard w={"xs"} flexShrink="0" {...value} />
                      </MotionBox>
                    ))}
                  </Flex>
                </ScrollArea.Content>
              </ScrollArea.Viewport>
              <ScrollArea.Corner />
            </ScrollArea.Root>
          </Bleed>

          <VStack>
            <Link
              href={"https://app.mutuals.finance/pool/demo"}
              external={true}
              arrow={false}
              asChild={true}
            >
              <Button size={"xl"}>Explore the Pool Demonstration</Button>
            </Link>
          </VStack>
        </Container>
      </Box>
    </MotionBoxWrapper>
  );
}
