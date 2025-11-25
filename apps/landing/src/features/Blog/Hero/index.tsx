"use client";

import {
  AspectRatio,
  Box,
  Button,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@mutuals/ui";
import introImage from "@/assets/blog/intro.png";
import NextImage from "next/image";

export default function BlogHero() {
  return (
    <Container maxW={"7xl"} my={{ base: "12", lg: "24" }}>
      <SimpleGrid
        columns={{ base: 1, lg: 5 }}
        gap={{ base: "6", lg: "12" }}
        w={"full"}
      >
        <GridItem colSpan={{ lg: 3 }}>
          <AspectRatio
            ratio={16 / 9}
            w={"full"}
            rounded={"2xl"}
            overflow={"hidden"}
          >
            <NextImage
              src={introImage}
              alt={"Introducing Mutuals"}
              fill={true}
            />
          </AspectRatio>
        </GridItem>

        <GridItem colSpan={{ lg: 2 }}>
          <Stack py={{ lg: "12" }} gap={"6"}>
            <Heading
              as="h1"
              size={{
                base: "3xl",
                lg: "4xl",
              }}
              fontWeight={"medium"}
            >
              Introducing Mutuals
            </Heading>
            <Box>
              <Text textStyle={{ base: "md", lg: "lg" }} color={"fg.muted"}>
                Infrastructure for money streaming and token distribution. DAOs
                and businesses use Mutuals for vesting, payroll, airdrops, and
                more.
              </Text>
            </Box>
            <Box>
              <Button>Read more</Button>
            </Box>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
