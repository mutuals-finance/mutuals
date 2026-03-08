import {
  Button,
  Card,
  Flex,
  FormatNumber,
  Heading,
  Link,
  List,
  MotionBox,
  Stack,
  Text,
  type ButtonProps,
} from "@mutuals/ui";
import { itemVariants } from "@/components/MotionBoxWrapper";
import { LuSquareCheck } from "react-icons/lu";

export type PricingOptionsCardProps = Card.RootProps & {
  heading: string;
  description: string;
  features: string[];
  buttonProps?: ButtonProps;
};

export default function PricingOptionsCard({
  heading,
  description,
  features,
  buttonProps,
  ...props
}: PricingOptionsCardProps) {
  return (
    <MotionBox variants={itemVariants} asChild={true}>
      <Card.Root {...props}>
        <Card.Header>
          <Heading textStyle={{ base: "2xl", md: "4xl" }}>{heading}</Heading>
        </Card.Header>
        <Card.Body pt={"4"}>
          <Text textStyle={"sm"} color={"fg.muted"}>
            {description}
          </Text>

          <Stack mt={"4"} direction={"row"} alignItems={"baseline"}>
            <Text textStyle={"4xl"} fontVariantNumeric={"tabular-nums"}>
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
              <List.Item key={feature}>
                <Flex gap="0" alignItems={"flex-start"}>
                  <List.Indicator
                    w={"4"}
                    h={"4"}
                    color={"colorPalette.emphasized"}
                    mt={"0.2rem"}
                  >
                    <LuSquareCheck />
                  </List.Indicator>

                  <Text>{feature}</Text>
                </Flex>
              </List.Item>
            ))}
          </List.Root>
          <Stack pt="4" w={"full"} mt={"auto"}>
            <Link
              href={"https://app.mutuals.finance"}
              target="_blank"
              asChild={true}
            >
              <Button w="full" size={"md"} variant={"subtle"} {...buttonProps}>
                Get Started
              </Button>
            </Link>
          </Stack>
        </Card.Footer>
      </Card.Root>
    </MotionBox>
  );
}
