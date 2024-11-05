import {
  Box,
  Stack,
  Button,
  Container,
  Flex,
  SimpleGrid,
  Grid,
  GridItem,
  Tag,
  Heading,
  Text,
  Group,
  VStack,
} from "@mutuals/ui";
import HeroImageSlider from "@/app/_components/Hero/ImageSlider";

export default function HomeHero() {
  return (
    <VStack
      position={"relative"}
      pt={"44"}
      minH={{ base: "100vh", lg: "unset" }}
      justifyContent="center"
    >
      <Container maxW={{ base: "xl", lg: "4xl" }} mb={{ base: "12", lg: "24" }}>
        <VStack align={"center"} textAlign={"center"} gap={"6"}>
          <Heading
            as="h1"
            size={{ base: "5xl", lg: "7xl" }}
            fontWeight={"semibold"}
          >
            The best way to manage on-chain payments.
          </Heading>

          <Text variant={"muted"} fontSize={{ base: "lg", lg: "xl" }}>
            Mutuals enables automated and trustless revenue distribution without
            reliance on intermediaries.
          </Text>

          <Group gap="6">
            <Button size={"lg"}>Start For Free</Button>
            <Button size={"lg"} variant={"subtle"}>
              Learn More
            </Button>
          </Group>
        </VStack>
      </Container>

      <HeroImageSlider />
    </VStack>
  );
}
