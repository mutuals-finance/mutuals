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
  FormatNumber,
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
        <Heading size={"4xl"} mb={"3"}>
          {heading}
        </Heading>

        <Text fontWeight={"500"} color={"fg.muted"}>
          {description}
        </Text>
      </Card.Header>
      <Card.Body>
        <Heading as={"h3"} size={"2xl"}>
          <FormatNumber value={0.0} style="currency" currency="USD" />
        </Heading>

        <Box>
          <Text color={"fg.muted"} fontWeight={"500"} fontSize={"sm"}>
            {label}
          </Text>
        </Box>

        <Button w="full" mt="6">
          Get Started
        </Button>
      </Card.Body>
      <Card.Footer as={Stack} alignItems={"flex-start"}>
        <Heading size="xs" variant={"subtag"} as="h3">
          Includes
        </Heading>

        <List.Root gap={"0.5"} as={Stack} variant="plain">
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
                color={"fg.muted"}
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
      <Container maxW="6xl">
        <SimpleGrid gap={{ base: 6, lg: 12 }} columns={{ base: 1, md: 2 }}>
          <PricingCard
            heading="Regular Usage"
            label="for free"
            description="There is no fee for using Mutuals."
          />
          <PricingCard
            heading="Donation"
            label="your preferred amount"
            description="Support us by donating a portion of your withdrawals (optional)."
            features={[
              "Custom donation per withdrawal",
              "Publicly visible donation badge",
            ]}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
