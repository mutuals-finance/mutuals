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
  Link,
} from "@mutuals/ui";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import items from "@/features/Pricing/Options/items";

export default function PricingOptions() {
  return (
    <Container maxW="7xl" mb={"16"} position={"relative"}>
      <SimpleGrid gap="2" columns={{ base: 1, md: 3 }}>
        {items.map(({ heading, label, description, features, ...props }) => (
          <Card.Root size={"lg"} key={label} bg={"bg"} {...props}>
            <Card.Header>
              <Heading textStyle={"3xl"}>{heading}</Heading>
            </Card.Header>
            <Card.Body>
              <Text textStyle={"md"}>{description}</Text>

              <Text textStyle={"4xl"} mt={"4"}>
                <FormatNumber value={0.0} style="currency" currency="USD" />
              </Text>

              <Box>
                <Text color={"fg.subtle"} textStyle={"xs"}>
                  {label}
                </Text>
              </Box>

              <Link
                href={"https://app.mutuals.finance"}
                target="_blank"
                asChild={true}
              >
                <Button
                  w="full"
                  mt="6"
                  size={"xl"}
                  variant={"surface"}
                  rounded={"4xl"}
                >
                  Get Started
                </Button>
              </Link>
            </Card.Body>
            <Card.Footer as={Stack} alignItems={"flex-start"}>
              <Heading textStyle="xs" variant={"subtag"} as="h3">
                Includes
              </Heading>

              <List.Root gap={"0.5"} as={Stack} variant="plain">
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
