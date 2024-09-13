import { Text, Heading, Card, Icon, Flex, IconProps } from "@mutuals/ui";

interface ValueCardProps extends Card.RootProps {
  heading: string;
  description: string;
  icon?: IconProps["as"];
}

export default function ValueCard({
  icon,
  heading,
  description,
  ...props
}: ValueCardProps) {
  return (
    <Card.Root
      variant="subtle"
      bg="transparent"
      borderLeftWidth={{ lg: "2px" }}
      borderColor="border"
      rounded={"none"}
      pl={{ lg: "6" }}
      textAlign={{ base: "center", lg: "left" }}
      alignItems={{ base: "center", lg: "flex-start" }}
      {...props}
    >
      {!!icon && (
        <Card.Header
          px="0"
          pb={{ base: "6", lg: "12" }}
          pt={{ base: "6", lg: "0" }}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            rounded="lg"
            w={"12"}
            h={"12"}
            bgGradient="to-br"
            gradientFrom="blue.300"
            gradientTo="blue.600"
          >
            <Icon as={icon} boxSize={5} />
          </Flex>
        </Card.Header>
      )}

      <Card.Body p={"0"}>
        <Heading as="h3" mb="3" variant={"subtag"} size={"xs"}>
          {heading}
        </Heading>

        <Text>{description}</Text>
      </Card.Body>
    </Card.Root>
  );
}
