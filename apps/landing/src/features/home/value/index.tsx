import {
  Bleed,
  Box,
  Container,
  Flex,
  MotionBox,
  ScrollArea,
} from "@mutuals/ui";
import {
  LuChartNoAxesCombined,
  LuFileCode2,
  LuShieldCheck,
} from "react-icons/lu";
import MotionBoxWrapper, {
  itemVariants,
} from "@/components/motion-box-wrapper";
import ValueCard from "./value-card";

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
      <Box my={"6"}>
        <Container maxW="6xl">
          <Bleed inline="6">
            <ScrollArea.Root w="full">
              <ScrollArea.Viewport>
                <ScrollArea.Content px="6">
                  <Flex
                    flexWrap="nowrap"
                    gap="6"
                    justifyContent={"space-between"}
                  >
                    {values.map((value, _index) => (
                      <MotionBox
                        asChild={true}
                        key={value.heading}
                        variants={itemVariants}
                      >
                        <ValueCard
                          flexBasis={{ base: "xs", lg: "0" }}
                          flexGrow={{ base: 0, lg: 1 }}
                          flexShrink={0}
                          {...value}
                        />
                      </MotionBox>
                    ))}
                  </Flex>
                </ScrollArea.Content>
              </ScrollArea.Viewport>
              <ScrollArea.Corner />
            </ScrollArea.Root>
          </Bleed>
        </Container>
      </Box>
    </MotionBoxWrapper>
  );
}
