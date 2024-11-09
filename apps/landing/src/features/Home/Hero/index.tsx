import {
  Button,
  Box,
  Container,
  Heading,
  Text,
  Group,
  VStack,
  MotionBox,
} from "@mutuals/ui";
import HeroImageSlider from "@/features/Home/Hero/ImageSlider";

export const transitionProps = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", bounce: 0, duration: 1 },
};

export default function HomeHero() {
  return (
    <VStack
      position={"relative"}
      pt={{ base: "24", lg: "44" }}
      minH={{ base: "100vh", lg: "unset" }}
      justifyContent="center"
    >
      <Container maxW={{ base: "xl", lg: "4xl" }} mb={{ base: "12", lg: "24" }}>
        <MotionBox
          as={VStack}
          alignItems={"center"}
          textAlign={"center"}
          gap={"6"}
          transition={{ staggerChildren: 4 }}
        >
          <MotionBox {...transitionProps}>
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
          </MotionBox>

          <MotionBox {...transitionProps}>
            <Text variant={"muted"} fontSize={{ base: "lg", lg: "xl" }}>
              Mutuals enables automated and trustless revenue distribution
              without reliance on intermediaries.
            </Text>
          </MotionBox>

          <MotionBox {...transitionProps}>
            <Group gap="6">
              <Button size={"xl"}>Start for free</Button>
              <Button size={"xl"} variant={"subtle"}>
                Learn more
              </Button>
            </Group>
          </MotionBox>
        </MotionBox>
      </Container>

      <HeroImageSlider />
    </VStack>
  );
}
