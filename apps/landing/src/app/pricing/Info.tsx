"use client";

import type { CardProps } from "@splitfi/ui";
import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@splitfi/ui";
import { IoCheckmark } from "react-icons/io5";

interface PricingCardProps extends CardProps {
  heading: string;
  label: string;
  description: string;
  features?: string[];
}

function PricingCard({
  heading,
  label,
  description,
  features = [],
  variant = "outline",
}: PricingCardProps) {
  const baseFeatures = [
    "Unlimited Splits, Receipients and Tokens",
    "Multiple Chains Available",
    "No Fees or hidden costs",
  ];

  return (
    <Card size="lg" variant={variant}>
      <CardBody as={Stack} gap="3">
        <Text as="h2" variant="tag">
          {heading}
        </Text>
        <Text fontSize="5xl">{label}</Text>
        <Text color="color.2" fontSize="lg">
          {description}
        </Text>
        <Button variant="blackWhite" w="full" size="lg" my="3">
          Get Started
        </Button>

        <List spacing={1.5} as={Stack}>
          {[...baseFeatures, ...features].map((feature) => (
            <ListItem>
              <ListIcon
                verticalAlign="middle"
                as={IoCheckmark}
                color="color.primary"
              />
              {feature}
            </ListItem>
          ))}
        </List>
      </CardBody>
    </Card>
  );
}

export default function PricingInfo() {
  return (
    <Box mt="12" mb="24">
      <Container maxW="container.xl" px={{ base: "6", lg: "12" }}>
        <SimpleGrid spacing={{ base: 6, lg: 12 }} columns={{ base: 1, lg: 2 }}>
          <PricingCard
            heading="Regular Usage"
            label="Free"
            description="There is no fee for using SplitFi."
          />
          <PricingCard
            heading="Donation"
            label="Custom %"
            description="You select the donation portion."
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
