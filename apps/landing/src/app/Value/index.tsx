"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Stack,
  Icon,
} from "@splitfi/ui";
import SectionHeader from "@/components/SectionHeader";
import { IoGitMerge } from "react-icons/io5";

export default function HomeValue() {
  return (
    <Box bg={"bg.2"} py="24" mt={"24"}>
      <Container maxW="container.xl" px={{ base: "6", lg: "12" }}>
        <SectionHeader
          label={"Fully fledged toolset"}
          mx="unset"
          textAlign={{ lg: "left" }}
        >
          Financial management for on-chain teams
        </SectionHeader>

        <Grid
          templateColumns={{
            base: "1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          }}
          gap={{ base: "6", lg: "12" }}
        >
          {[
            "Split tokens",
            "Automate payments",
            "Track earnings",
            "Accelerate partnerships",
          ].map((title) => (
            <GridItem
              as={Stack}
              key={title}
              borderLeft={"2px solid"}
              borderColor="border.1"
              pl={"3"}
            >
              <Icon
                as={IoGitMerge}
                boxSize={10}
                bg="primary.50"
                color={"primary.600"}
                p="3"
                rounded="md"
                mb={"12"}
              />

              <Heading
                as="h3"
                size="xs"
                fontWeight={"500"}
                letterSpacing={"0.05rem"}
                fontFamily={"monospace"}
                textTransform={"uppercase"}
                color={"color.3"}
                mb={"1"}
                mt={"auto"}
              >
                {title}
              </Heading>

              <Text fontSize="sm" fontWeight={"500"}>
                SplitFi integrates with your clients systems and connects with a
                range of data sources
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
