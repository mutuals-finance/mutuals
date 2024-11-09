import {
  GridItem,
  Stack,
  Card,
  Heading,
  Text,
  Box,
  GridItemProps,
  Badge,
} from "@mutuals/ui";

interface FeatureCardProps extends GridItemProps {
  heading: string;
  description: string;
  index?: number;
}

export default function FeatureCard({
  heading,
  index,
  description,
  children,
  ...props
}: FeatureCardProps) {
  return (
    <GridItem
      display={"flex"}
      alignItems={"stretch"}
      justifyContent={"stretch"}
      {...props}
    >
      <Card.Root variant={"outline"} w={"full"}>
        <Card.Body
          as={Stack}
          direction={"column"}
          justifyContent={"space-between"}
          gap={"6"}
        >
          {children}
          <Box>
            {index && index >= 0 && (
              <Heading as={"h4"} variant={"subtag"} size={"xs"} mb="6">
                0{index}
              </Heading>
            )}
            <Heading as={"h3"} size={"xl"}>
              {heading}
            </Heading>
          </Box>

          <Box w={"full"} maxW={"xs"}>
            <Text fontSize={{ base: "sm", md: "md" }} variant={"muted"}>
              {description}
            </Text>
          </Box>
        </Card.Body>
      </Card.Root>
    </GridItem>
  );
}
