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
    <Container maxW="7xl" my={"16"}>
      <SimpleGrid gap={{ base: "2", lg: "12" }} columns={{ base: 1, md: 3 }}>
        {items.map(({ heading, label, description, features, ...props }) => (
          <Card.Root size={"md"} key={label} bg={"bg"} {...props}>
            <Card.Header>
              <Heading textStyle={"2xl"}>{heading}</Heading>
            </Card.Header>
            <Card.Body pt={"2"}>
              <Text textStyle={"md"}>{description}</Text>

              <Stack mt={"2"} direction={"row"} alignItems={"baseline"}>
                <Text textStyle={"4xl"}>
                  <FormatNumber value={0.0} style="currency" currency="USD" />
                </Text>

                <Text color={"fg.subtle"} textStyle={"xs"}>
                  / month
                </Text>
              </Stack>

              <Stack pt="4" justifySelf={"flex-end"} mt={"auto"}>
                <Link
                  href={"https://app.mutuals.finance"}
                  target="_blank"
                  asChild={true}
                >
                  <Button w="full" size={"md"} variant={"surface"}>
                    Get Started
                  </Button>
                </Link>
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
            </Card.Footer>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Container>
  );
}
