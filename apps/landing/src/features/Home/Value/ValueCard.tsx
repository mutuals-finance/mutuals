import { Text, Heading, Card, Icon, IconProps } from "@mutuals/ui";
import IconBox from "@/components/IconBox";

interface ValueCardProps extends Card.RootProps {
  heading: string;
  description: string;
  icon?: IconProps["children"];
}

export default function ValueCard({
  icon,
  heading,
  description,
  ...props
}: ValueCardProps) {
  return (
    <Card.Root {...props}>
      {!!icon && (
        <Card.Header>
          <IconBox
            color={"white"}
            bgGradient="to-br"
            gradientFrom="blue.400"
            gradientTo="blue.800"
          >
            <Icon boxSize={5}>{icon}</Icon>
          </IconBox>
        </Card.Header>
      )}

      <Card.Body>
        <Heading as="h3" mb="3" variant={"subtag"} size={"xs"}>
          {heading}
        </Heading>

        <Text>{description}</Text>
      </Card.Body>
    </Card.Root>
  );
}
