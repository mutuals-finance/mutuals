import {
  Button,
  Box,
  Container,
  Heading,
  Text,
  Group,
  VStack,
  MotionBox,
  For,
} from "@mutuals/ui";
import HeroImageSlider from "@/features/Home/Hero/ImageSlider";
import { MotionConfig } from "framer-motion";

export const transitionProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function HomeHero() {
  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 3 }}>
      <VStack
        position={"relative"}
        pt={{ base: "24", lg: "44" }}
        minH={{ base: "100vh", lg: "unset" }}
        justifyContent="center"
      >
        <Container
          maxW={{ base: "xl", lg: "4xl" }}
          mb={{ base: "12", lg: "24" }}
        >
          <VStack
            alignItems={{ base: "flex-start", md: "center" }}
            textAlign={{ base: "left", md: "center" }}
            gap={"6"}
          >
            <For
              each={[
                {
                  children: (
                    <Heading
                      bgImage={
                        "linear-gradient(to right bottom, {colors.fg/90} 40%, {colors.fg/60})"
                      }
                      bgClip={"text"}
                      as="h1"
                      size={{ base: "5xl", lg: "7xl" }}
                      fontWeight={"semibold"}
                    >
                      The best way to manage on-chain payments.
                    </Heading>
                  ),
                },
                {
                  children: (
                    <Text variant={"muted"} fontSize={{ base: "lg", lg: "xl" }}>
                      Mutuals enables automated and trustless revenue
                      distribution without reliance on intermediaries.
                    </Text>
                  ),
                },
                {
                  children: (
                    <Group gap="6">
                      <Button size={"lg"}>Start for free</Button>
                      <Button size={"lg"} variant={"subtle"}>
                        Learn more
                      </Button>
                    </Group>
                  ),
                },
              ]}
            >
              {({ children }, index) => (
                <MotionBox
                  custom={index}
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12 }}
                >
                  {children}
                </MotionBox>
              )}
            </For>
          </VStack>
        </Container>

        <HeroImageSlider />
      </VStack>
    </MotionConfig>
  );
}
