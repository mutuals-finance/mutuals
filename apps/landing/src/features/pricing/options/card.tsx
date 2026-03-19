import {
  Button,
  type ButtonProps,
  Card,
  Flex,
  FormatNumber,
  Heading,
  Link,
  List,
  MotionBox,
  Stack,
  Text,
} from "@mutuals/ui";
import { LuSquareCheck } from "react-icons/lu";
import { itemVariants } from "@/components/motion-box-wrapper";

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
    <MotionBox asChild={true} variants={itemVariants}>
      <Card.Root {...props}>
        <Card.Header>
          <Heading textStyle={{ base: "2xl", md: "4xl" }}>{heading}</Heading>
        </Card.Header>
        <Card.Body pt={"4"}>
          <Text color={"fg.muted"} textStyle={"sm"}>
            {description}
          </Text>

          <Stack alignItems={"baseline"} direction={"row"} mt={"4"}>
            <Text fontVariantNumeric={"tabular-nums"} textStyle={"4xl"}>
              <FormatNumber currency="USD" style="currency" value={0.0} />
            </Text>

            <Text color={"fg.subtle"} textStyle={"xs"}>
              / month
            </Text>
          </Stack>
        </Card.Body>
        <Card.Footer alignItems={"flex-start"} as={Stack}>
          <Heading as="h3" textStyle="2xs" variant={"subtag"}>
            Includes
          </Heading>

          <List.Root as={Stack} gap={"0"} textStyle="sm" variant="plain">
            {features.map((feature) => (
              <List.Item key={feature}>
                <Flex alignItems={"flex-start"} gap="0">
                  <List.Indicator
                    color={"colorPalette.emphasized"}
                    h={"4"}
                    mt={"0.2rem"}
                    w={"4"}
                  >
                    <LuSquareCheck />
                  </List.Indicator>

                  <Text>{feature}</Text>
                </Flex>
              </List.Item>
            ))}
          </List.Root>
          <Stack mt={"auto"} pt="4" w={"full"}>
            <Link
              asChild={true}
              href={"https://app.mutuals.finance"}
              target="_blank"
            >
              <Button size={"md"} variant={"subtle"} w="full" {...buttonProps}>
                Get Started
              </Button>
            </Link>
          </Stack>
        </Card.Footer>
      </Card.Root>
    </MotionBox>
  );
}
