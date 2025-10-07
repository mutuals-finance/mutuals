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
    <Container mt={{ base: "6", lg: "12" }} mb="32" maxW="6xl">
      <Stack textAlign={"center"} alignItems={"center"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "2", lg: "12" }}>
          {items.map(
            ({
              icon,
              heading,
              description,
              children,
              variant = "outline",
              bg = "bg",
              size = "md",
              ...props
            }) => (
              <Card.Root
                key={heading}
                variant={variant}
                size={size}
                bg={bg}
                {...props}
              >
                <Card.Header>
                  <Stack direction={"row"} alignItems={"flex-start"}>
                    <Heading textStyle={{ base: "2xl", lg: "3xl" }}>
                      {heading}
                    </Heading>

                    {!!icon && (
                      <IconBox
                        size={"xs"}
                        color={"fg.muted"}
                        bg="gray.muted"
                        ml={"auto"}
                      >
                        <Icon asChild>{icon}</Icon>
                      </IconBox>
                    )}
                  </Stack>
                </Card.Header>
                <Card.Body>
                  {!!description?.length && description.length > 0 && (
                    <Stack gap={"1"}>
                      {description.map((paragraph, i) => (
                        <Text key={i} color={"fg.muted"} textStyle={"md"}>
                          {paragraph}
                        </Text>
                      ))}
                    </Stack>
                  )}

                  {children}
                </Card.Body>
              </Card.Root>
            ),
          )}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
