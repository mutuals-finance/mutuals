import { Text, Card, Icon, Flex, IconProps } from "@mutuals/ui";

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
      variant="filled"
      bg="transparent"
      borderLeft={{ lg: "2px solid" }}
      borderColor={{ lg: "border.1" }}
      rounded={"none"}
      pl={{ lg: "6" }}
      textAlign={{ base: "center", lg: "left" }}
      align={{ base: "center", lg: "flex-start" }}
      {...props}
    >
      {!!icon && (
        <Card.Header
          px="0"
          pb={{ base: "6", lg: "12" }}
          pt={{ base: "6", lg: "0" }}
        >
          <Flex
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded="lg"
            w={"12"}
            h={"12"}
            bgGradient={"linear(to-br, primary.100, primary.500)"}
          >
            <Icon as={icon} boxSize={5} />
          </Flex>
        </Card.Header>
      )}

      <Card.Body p={"0"}>
        <Text as="h3" mb="3" variant={"tag"} fontSize={"xs"}>
          {heading}
        </Text>

        <Text>{description}</Text>
      </Card.Body>
    </Card.Root>
  );
}
