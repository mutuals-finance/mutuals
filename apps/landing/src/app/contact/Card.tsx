import { Text, Card, Icon, Flex, Heading, Stack } from "@mutuals/ui";
import { ReactNode } from "react";

export interface ContactCardProps extends Card.RootProps {
  heading: string;
  description?: string[];
  icon?: ReactNode;
}

export default function ContactCard({
  icon,
  heading,
  description = [],
  children,
  ...props
}: ContactCardProps) {
  return (
    <Card.Root alignItems={"flex-start"} textAlign={"left"} {...props}>
      {!!icon && (
        <Card.Header>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            rounded="lg"
            w={"16"}
            h={"16"}
            bgGradient="to-br"
            gradientFrom="blue.300"
            gradientTo="blue.600"
          >
            <Icon asChild boxSize={6}>
              {icon}
            </Icon>
          </Flex>
        </Card.Header>
      )}

      <Card.Body>
        <Heading mb="6" size={"xl"}>
          {heading}
        </Heading>

        {description.length > 0 && (
          <Stack gap={"3"}>
            {description.map((paragraph, i) => (
              <Text key={i} variant={"muted"}>
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
