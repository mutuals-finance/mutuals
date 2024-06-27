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
      borderLeft={{ lg: "1px solid" }}
      borderColor={{ lg: "border.1" }}
      rounded={"none"}
      pl={{ lg: "6" }}
      textAlign={{ base: "center", lg: "left" }}
      align={{ base: "center", lg: "flex-start" }}
      {...props}
    >
      {!!icon && (
        <CardHeader
          px="0"
          pb={{ base: "6", lg: "12" }}
          pt={{ base: "6", lg: "0" }}
        >
          <Icon
            as={icon}
            boxSize={10}
            bg="blue.100"
            color={"primary.600"}
            p="3"
            rounded="lg"
          />
        </CardHeader>
      )}

      <CardBody p={"0"}>
        <Heading as="h3" size="sm" mb={"3"}>
          {heading}
        </Heading>

        <Text>{description}</Text>
      </CardBody>
    </Card>
  );
}
