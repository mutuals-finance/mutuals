"use client";

import { Text, Card, Icon, Flex, type As, Heading, Stack } from "@mutuals/ui";

interface ContactOptionCardProps extends Card.RootProps {
  heading: string;
  description?: string[];
  icon?: As;
}

export default function ContactOptionCard({
  icon,
  heading,
  description = [],
  children,
  ...props
}: ContactOptionCardProps) {
  return (
    <Card.Root
      variant="filled"
      bg="transparent"
      borderLeft={"2px solid"}
      borderColor={"border.1"}
      rounded={"none"}
      pl={"6"}
      py={"6"}
      align={"flex-start"}
      textAlign={"left"}
      {...props}
    >
      {!!icon && (
        <Card.Header px="0" pb={{ base: "6", lg: "12" }} pt={0}>
          <Flex
            align={"center"}
            justify={"center"}
            rounded="lg"
            color={"white"}
            w={"16"}
            h={"16"}
            bgGradient={"linear(to-br, primary.100, primary.500)"}
          >
            <Icon as={icon} boxSize={6} />
          </Flex>
        </Card.Header>
      )}

      <Card.Body p={"0"}>
        <Heading mb="6" size={"xl"}>
          {heading}
        </Heading>

        {description.length > 0 && (
          <Stack gap={"3"}>
            {description.map((paragraph, i) => (
              <Text key={i} fontWeight={"500"} color={"alpha.2"}>
                {paragraph}
              </Text>
            ))}
          </Stack>
        )}

        {children}
      </Card.Body>
    </Card.Root>
  );
}
