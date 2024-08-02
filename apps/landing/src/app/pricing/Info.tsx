"use client";

import {
  CardFooter,
  CardHeader,
  CardProps,
  Flex,
  useColorModeValue,
} from "@mutuals/ui";
import {
  Box,
  Button,
  Card,
  Heading,
  CardBody,
  Container,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@mutuals/ui";
import { IoCheckboxOutline } from "react-icons/io5";

interface PricingCardProps extends CardProps {
  heading: string;
  label: string;
  description: string;
  features?: string[];
  colorScheme?: string;
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
    <Card variant={variant} size={"lg"}>
      <CardHeader minH={{ md: "40" }}>
        <Heading size={"xl"} mb={"3"} fontWeight={"600"}>
          {heading}
        </Heading>

        <Text fontWeight={"500"} color={"alpha.2"}>
          {description}
        </Text>
      </CardHeader>
      <CardBody>
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
      </CardBody>
      <CardFooter as={Stack}>
        <Text fontSize="xs" variant={"tag"} as="h3">
          Includes
        </Text>

        <List gap={"0.5"} as={Stack}>
          {[...features, ...baseFeatures].map((feature) => (
            <ListItem key={feature} as={Flex} gap="0" alignItems={"flex-start"}>
              <ListIcon
                w="4"
                h={"4"}
                as={IoCheckboxOutline}
                mt={"1"}
                color={"alpha.2"}
              />
              <Text>{feature}</Text>
            </ListItem>
          ))}
        </List>
      </CardFooter>
    </Card>
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
            colorScheme={useColorModeValue("primary.100", "primary.900")}
          />
          <PricingCard
            heading="Donation"
            label="your preferred amount"
            description="Support us by donating a portion of your withdrawals (optional)."
            features={[
              "Custom donation per withdrawal",
              "Publicly visible donation badge",
            ]}
            colorScheme={useColorModeValue("primary.600", "primary.700")}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
