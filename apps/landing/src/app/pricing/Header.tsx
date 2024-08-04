import { Box, Container, Heading, Tag, TagLabel, Text } from "@mutuals/ui";

export default function PricingHeader() {
  return (
    <Box as="header" pt={"20"}>
      <Container
        my="20"
        textAlign={"center"}
        maxW={"container.lg"}
        px={{ base: "6", lg: "12" }}
      >
        <Tag
          size="lg"
          borderRadius="md"
          bg={"bgAlpha.4"}
          border={"1px solid"}
          borderColor={"border.1"}
        >
          <TagLabel>
            <Text
              variant={"tag"}
              bgGradient="linear(to-bl, pink.400, purple.400, primary.400)"
              bgClip="text"
              fontSize={"sm"}
            >
              Pricing
            </Text>
          </TagLabel>
        </Tag>

        <Heading as="h1" variant="h.1" mt={"3"}>
          Mutuals is free - That&apos;s it.
        </Heading>
      </Container>
    </Box>
  );
}
