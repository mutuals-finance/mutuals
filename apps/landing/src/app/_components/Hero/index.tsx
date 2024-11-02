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

import { IoPlayOutline, IoSparkles } from "react-icons/io5";
import NextImage from "next/image";
import gridIcon from "@/assets/grid.svg";
import aboutImage from "@/assets/hero.png";
import KeenSlider from "@/components/KeenSlider/KeenSlider";
import KeenSliderSlide from "@/components/KeenSlider/KeenSliderSlide";
import HeroImageSlider from "@/app/_components/Hero/ImageSlider";

export default function HomeHero() {
  return (
    <VStack position={"relative"} pt={"32"}>
      <Container maxW="4xl" mb={"24"}>
        <VStack align={"center"} textAlign={"center"} gap={"6"}>
          <Heading
            as="h1"
            size={{ base: "5xl", lg: "7xl" }}
            fontWeight={"semibold"}
          >
            The best way to manage on-chain payments.
          </Heading>

          <Text variant={"muted"} fontSize={"xl"}>
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
