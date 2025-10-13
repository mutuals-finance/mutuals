"use client";

import {
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
  Link,
} from "@mutuals/ui";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import items from "@/features/Pricing/Options/items";

export default function PricingOptions() {
  return (
    <Container maxW="7xl" mt={{ base: "6", lg: "12" }} mb={"16"}>
      <SimpleGrid gap={{ base: "2", lg: "6" }} columns={{ base: 1, md: 3 }}>
        {items.map(({ heading, label, description, features, ...props }) => (
          <Card.Root size={"md"} key={label} bg={"bg"} {...props}>
            <Card.Header>
              <Heading textStyle={{ base: "2xl", md: "4xl" }}>
                {heading}
              </Heading>
            </Card.Header>
            <Card.Body pt={"4"}>
              <Text textStyle={"md"} color={"fg.muted"}>
                {description}
              </Text>

              <Stack mt={"4"} direction={"row"} alignItems={"baseline"}>
                <Text textStyle={"4xl"}>
                  <FormatNumber value={0.0} style="currency" currency="USD" />
                </Text>

                <Text color={"fg.subtle"} textStyle={"xs"}>
                  / month
                </Text>
              </Stack>
            </Card.Body>
            <Card.Footer as={Stack} alignItems={"flex-start"}>
              <Heading textStyle="2xs" variant={"subtag"} as="h3">
                Includes
              </Heading>

              <List.Root gap={"0"} as={Stack} variant="plain" textStyle="sm">
                {features.map((feature) => (
                  <List.Item
                    key={feature}
                    as={Flex}
                    gap="0"
                    alignItems={"flex-start"}
                  >
                    <List.Indicator
                      w="4"
                      h={"4"}
                      as={IoCheckmarkCircleOutline}
                    />
                    <Text>{feature}</Text>
                  </List.Item>
                ))}
              </List.Root>
              <Stack pt="4" w={"full"} mt={"auto"}>
                <Link
                  href={"https://app.mutuals.finance"}
                  target="_blank"
                  asChild={true}
                >
                  <Button w="full" size={"md"} variant={"solid"}>
                    Get Started
                  </Button>
                </Link>
              </Stack>
            </Card.Footer>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Container>
  );
}
