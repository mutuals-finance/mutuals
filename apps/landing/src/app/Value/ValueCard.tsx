"use client";

import {
  Text,
  Card,
  CardHeader,
  CardProps,
  CardBody,
  Icon,
  Heading,
  type As,
} from "@splitfi/ui";

interface ValueCardProps extends CardProps {
  heading: string;
  description: string;
  icon?: As;
}

export default function ValueCard({
  icon,
  heading,
  description,
  ...props
}: ValueCardProps) {
  return (
    <Card
      variant="filled"
      bg="transparent"
      borderLeft={"1px solid"}
      borderColor="border.1"
      rounded={"none"}
      pr={"0"}
      {...props}
    >
      {!!icon && (
        <CardHeader pt={"0"} pr={"0"} pb={"12"}>
          <Icon
            as={icon}
            boxSize={12}
            bg="blue.100"
            color={"primary.600"}
            p="4"
            rounded="md"
          />
        </CardHeader>
      )}

      <CardBody mt={"auto"} pr={"0"} pb={"0"}>
        <Heading as="h3" size="sm" mb={"3"}>
          {heading}
        </Heading>

        <Text>{description}</Text>
      </CardBody>
    </Card>
  );
}
