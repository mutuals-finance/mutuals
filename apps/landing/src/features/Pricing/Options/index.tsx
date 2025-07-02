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
import items from "@/features/Pricing/Options/items";

export default function PricingOptions() {
  return (
    <Container maxW="7xl" mb={"32"} position={"relative"}>
      <SimpleGrid gap={{ base: 6, lg: 12 }} columns={{ base: 1, md: 3 }}>
        {items.map(({ heading, label, description, features, ...props }) => (
          <Card.Root size={"lg"} key={label} {...props}>
            <Card.Header>
              <Heading size={"3xl"}>{heading}</Heading>
              <Text>{description}</Text>
            </Card.Header>
            <Card.Body>
              <Heading as={"h3"} size={"2xl"}>
                <FormatNumber value={0.0} style="currency" currency="USD" />
              </Heading>

              <Box>
                <Text color={"muted"} textStyle={"xs"}>
                  {label}
                </Text>
              </Box>

              <Button w="full" mt="6" size={"xl"} variant={"surface"}>
                Get Started
              </Button>
            </Card.Body>
            <Card.Footer as={Stack} alignItems={"flex-start"}>
              <Heading size="xs" variant={"subtag"} as="h3">
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
                      as={IoCheckboxOutline}
                      color={"fg.muted"}
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
