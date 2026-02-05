import {
  Box,
  Button,
  Container,
  MotionBox,
  SimpleGrid,
  Link,
  For,
  VStack,
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
          <VStack align={"center"} mt={"6"} gap={"6"}>
            <MotionBox variants={itemVariants} asChild={true}>
              <VStack w="full" gap={"2"}>
                <For
                  each={[
                    { width: "100%", delay: "0s" },
                    { width: "92%", delay: "-1.5s" },
                    { width: "84%", delay: "-3s" },
                    { width: "76%", delay: "-4.5s" },
                  ]}
                >
                  {(item, index) => (
                    <Box
                      width={item.width}
                      height="1"
                      key={index}
                      rounded="full"
                      bgImage={
                        "linear-gradient(to right,{colors.cyan.muted},{colors.yellow.solid},{colors.brand.emphasized},{colors.brand.solid},{colors.purple.emphasized},{colors.orange.solid})"
                      }
                      animationStyle="gradientSlide"
                      animationDelay={item.delay}
                      opacity={0.5 - index * 0.1}
                    />
                  )}
                </For>
              </VStack>
            </MotionBox>

            <Link
              href={"https://app.mutuals.finance"}
              external={true}
              arrow={false}
              asChild={true}
            >
              <Button size={"lg"} rounded={"full"}>
                Explore the platform
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>
    </MotionBoxWrapper>
  );
}
