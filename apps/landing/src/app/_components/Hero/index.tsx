import {
  Button,
  Container,
  Heading,
  Text,
  Group,
  VStack,
  MotionBox,
} from "@mutuals/ui";
import HeroImageSlider from "@/app/_components/Hero/ImageSlider";

export const transitionProps = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", bounce: 0, duration: 1 },
};

export default function HomeHero() {
  return (
    <VStack
      position={"relative"}
      pt={"44"}
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

          <MotionBox as={Group} gap="6" {...transitionProps}>
            <Button size={"lg"}>Start For Free</Button>
            <Button size={"lg"} variant={"subtle"}>
              Learn More
            </Button>
          </MotionBox>
        </MotionBox>
      </Container>

      <HeroImageSlider />
    </VStack>
  );
}
