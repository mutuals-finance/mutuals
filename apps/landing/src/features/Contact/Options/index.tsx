import {
  Card,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@mutuals/ui";
import items from "@/features/Contact/Options/items";
import IconBox from "@/components/IconBox";

export default function ContactOptions() {
  return (
    <Container mt="16" mb="32" maxW="5xl">
      <Stack textAlign={"center"} alignItems={"center"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "6", lg: "12" }}>
          {items.map(({ icon, heading, description, children, ...props }) => (
            <Card.Root
              alignItems={"flex-start"}
              textAlign={"left"}
              key={heading}
              {...props}
            >
              <Card.Body alignItems={"flex-start"}>
                {!!icon && (
                  <IconBox mb="4" size={"lg"} color={"white"} bg="blue.600">
                    <Icon asChild boxSize={5}>
                      {icon}
                    </Icon>
                  </IconBox>
                )}
                <Heading size={"xl"}>{heading}</Heading>

                {!!description?.length && description.length > 0 && (
                  <Stack gap={"1"} mt={"4"}>
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
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
