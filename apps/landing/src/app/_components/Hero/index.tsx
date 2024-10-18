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
} from "@mutuals/ui";

import { IoPlayOutline, IoSparkles } from "react-icons/io5";
import NextImage from "next/image";
import heroRightImage from "@/assets/bg-hero-bottom-right.png";
import aboutImage from "@/assets/hero.png";
import KeenSlider from "@/components/KeenSlider/KeenSlider";
import KeenSliderSlide from "@/components/KeenSlider/KeenSliderSlide";
import HeroImageSlider from "@/app/_components/Hero/ImageSlider";

export default function HomeHero() {
  return (
    <>
      <Container maxW="7xl">
        <Grid
          pt={"48"}
          mb={"12"}
          gap={"6"}
          templateColumns={{ lg: "repeat(5, 1fr)" }}
          alignItems={"flex-end"}
        >
          <GridItem
            colSpan={{ lg: 3 }}
            direction="column"
            alignItems={"flex-start"}
          >
            <Tag colorPalette={"purple"} startElement={<IoSparkles />} mb={"6"}>
              Celebrating our Alpha Launch
            </Tag>

            <Heading as="h1" size={{ base: "5xl", lg: "6xl" }}>
              The best way to manage on-chain payments.
            </Heading>
          </GridItem>

          <GridItem colSpan={{ lg: 2 }} direction="column">
            <Text variant={"muted"} fontSize={"lg"} mb={"6"}>
              Trustless revenue distribution with powerful configuration
              options.
            </Text>

            <Group gap="3">
              <Button>Start For Free</Button>
              <Button variant={"subtle"}>Learn More</Button>
            </Group>
          </GridItem>
        </Grid>
      </Container>

      <HeroImageSlider />

      <Container maxW="7xl" my={"12"}>
        <Stack
          position={"relative"}
          w={"full"}
          align={"center"}
          p={"2"}
          bg={"bg.muted"}
          rounded={"lg"}
          overflow={"hidden"}
        >
          <Button variant="subtle">
            Explore The Demo <IoPlayOutline />
          </Button>

          <Box
            position={"absolute"}
            bottom={"0"}
            right={"0"}
            w={"full"}
            h={{ base: "lg", md: "8xl" }}
            opacity={"0.6"}
          >
            <NextImage
              src={heroRightImage}
              alt={"Mutuals CTA Background"}
              fill={true}
              style={{
                objectFit: "contain",
                objectPosition: "bottom right",
              }}
            />
          </Box>
        </Stack>
      </Container>
    </>
  );
}
