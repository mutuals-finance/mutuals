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
    <Container mt="20" mb="32" maxW="6xl">
      <Stack textAlign={"center"} alignItems={"center"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "6", lg: "12" }}>
          {items.map(({ icon, heading, description, children, ...props }) => (
            <Card.Root
              alignItems={"flex-start"}
              textAlign={"left"}
              key={heading}
              {...props}
            >
              {!!icon && (
                <Card.Header>
                  <IconBox
                    size={"xl"}
                    color={"white"}
                    bgGradient="to-br"
                    gradientFrom="blue.300"
                    gradientTo="blue.600"
                  >
                    <Icon asChild boxSize={6}>
                      {icon}
                    </Icon>
                  </IconBox>
                </Card.Header>
              )}

              <Card.Body alignItems={"flex-start"}>
                <Heading mb="6" size={"xl"}>
                  {heading}
                </Heading>

                {!!description?.length && description.length > 0 && (
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
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
