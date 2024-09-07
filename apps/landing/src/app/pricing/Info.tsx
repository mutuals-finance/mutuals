"use client";

import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Container,
  List,
  SimpleGrid,
  Stack,
  Text,
} from "@mutuals/ui";
import { IoCheckboxOutline } from "react-icons/io5";

interface PricingCardProps extends Card.RootProps {
  heading: string;
  label: string;
  description: string;
  features?: string[];
  colorPalette?: string;
}

function PricingCard({
  heading,
  label,
  description,
  features = [],
  variant = "outline",
}: PricingCardProps) {
  const baseFeatures = [
    "Unlimited Payment Pool, Recipients and Tokens",
    "Multiple Chains Available",
    "No Fees or hidden costs",
  ];

  return (
    <Card.Root variant={variant} size={"lg"}>
      <Card.Header minH={{ md: "40" }}>
        <Heading size={"xl"} mb={"3"} fontWeight={"600"}>
          {heading}
        </Heading>

        <Text fontWeight={"500"} color={"alpha.2"}>
          {description}
        </Text>
      </Card.Header>
      <Card.Body>
        <Heading as={"h3"} size={"xl"} fontWeight={"600"}>
          $0.00
        </Heading>

        <Box>
          <Text color={"alpha.2"} fontWeight={"500"} fontSize={"sm"}>
            {label}
          </Text>
        </Box>

        <Button variant="blackWhite" w="full" size={"lg"} mt="6">
          Get Started
        </Button>
      </Card.Body>
      <Card.Footer as={Stack}>
        <Text fontSize="xs" variant={"tag"} as="h3">
          Includes
        </Text>

        <List.Root gap={"0.5"} as={Stack}>
          {[...features, ...baseFeatures].map((feature) => (
            <List.Item
              key={feature}
              as={Flex}
              gap="0"
              alignItems={"flex-start"}
            >
              <List.Indicator
                w="4"
                h={"4"}
                as={IoCheckboxOutline}
                mt={"1"}
                color={"alpha.2"}
              />
              <Text>{feature}</Text>
            </List.Item>
          ))}
        </List.Root>
      </Card.Footer>
    </Card.Root>
  );
}

export default function PricingInfo() {
  return (
    <Box mt="16" mb={"32"} position={"relative"}>
      <Container maxW="container.lg" px={{ base: "6", lg: "12" }}>
        <SimpleGrid gap={{ base: 6, lg: 12 }} columns={{ base: 1, md: 2 }}>
          <PricingCard
            heading="Regular Usage"
            label="for free"
            description="There is no fee for using Mutuals."
            colorPalette={{ base: "primary.100", _dark: "primary.900" }}
          />
          <PricingCard
            heading="Donation"
            label="your preferred amount"
            description="Support us by donating a portion of your withdrawals (optional)."
            features={[
              "Custom donation per withdrawal",
              "Publicly visible donation badge",
            ]}
            colorPalette={{ base: "primary.600", _dark: "primary.700" }}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
