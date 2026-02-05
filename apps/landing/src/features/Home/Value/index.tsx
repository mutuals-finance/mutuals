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
                    key={index}
                    width={item.width}
                    h="1"
                    rounded="full"
                    bgImage={
                      "linear-gradient(to right,{colors.teal.400},{colors.brand.solid},{colors.purple.500},{colors.brand.emphasized},{colors.teal.400})"
                    }
                    bgSize="200% 100%"
                    animationStyle="gradient-slide"
                    animationDelay={item.delay}
                    opacity={1 - index * 0.15}
                  />
                )}
              </For>
            </VStack>

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
