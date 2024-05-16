"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  AspectRatio,
  Grid,
  GridItem,
  VStack,
  AccordionPanel,
  AccordionButton,
  AccordionItem,
  Accordion,
  Button,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";

import featureImage from "@/assets/feature.png";

export default function HomeValue() {
  return (
    <Container my="24" maxW="container.xl" px={{ base: "6", lg: "12" }}>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1fr 1fr",
        }}
        gap={{ base: "6", lg: "12" }}
      >
        <GridItem
          as={Stack}
          p={{ base: "0", lg: "12" }}
          alignItems="flex-start"
        >
          <Accordion
            defaultIndex={0}
            as={VStack}
            gap="3"
            alignItems="stretch"
            flex="1"
          >
            {[
              "Split tokens",
              "Automate payments",
              "Track earnings",
              "Accelerate partnerships",
            ].map((title) => (
              <AccordionItem
                key={title}
                position="relative"
                pl="6"
                border="none"
              >
                <Box
                  position="absolute"
                  h="full"
                  w="1"
                  bg="primary.600"
                  top="0"
                  left="0"
                />
                <h3>
                  <AccordionButton>
                    <Heading as="span" size="lg">
                      {title}
                    </Heading>
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={3}>
                  <Text fontSize="lg">
                    SplitFi integrates with your clients systems and connects
                    with a range of data sources
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>

          <Button variant="outline" colorScheme="primary" flexShrink="0">
            Launch app and get started
          </Button>
        </GridItem>

        <GridItem
          as={AspectRatio}
          w="full"
          ratio={1}
          position="relative"
          rounded="md"
        >
          <Image
            src={featureImage}
            alt="Split Funds Without Trust"
            fill
            style={{ objectFit: "contain" }}
          />
        </GridItem>
      </Grid>
    </Container>
  );
}
