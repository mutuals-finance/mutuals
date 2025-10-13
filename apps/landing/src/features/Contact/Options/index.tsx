import {
  Card,
  Container,
  Heading,
  Icon,
  MotionBox,
  SimpleGrid,
  Stack,
  Text,
} from "@mutuals/ui";
import items from "@/features/Contact/Options/items";
import IconBox from "@/components/IconBox";
import { itemVariants } from "@/components/MotionBoxWrapper";

export default function ContactOptions() {
  return (
    <Container mt={{ base: "6", lg: "12" }} mb="24" maxW="5xl">
      <Stack textAlign={"center"} alignItems={"center"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "2", lg: "6" }}>
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
              <MotionBox variants={itemVariants} key={heading} asChild={true}>
                <Card.Root variant={variant} size={size} bg={bg} {...props}>
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
              </MotionBox>
            ),
          )}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
