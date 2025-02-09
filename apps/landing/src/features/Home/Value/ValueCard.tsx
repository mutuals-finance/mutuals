import { Text, Heading, Card, Icon, IconProps, Button } from "@mutuals/ui";
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
  variant = "subtle",
  ...props
}: ValueCardProps) {
  return (
    <Card.Root variant={variant} {...props}>
      {!!icon && (
        <Card.Header>
          <IconBox color={"white"} bg="blue.600">
            <Icon boxSize={5}>{icon}</Icon>
          </IconBox>
        </Card.Header>
      )}

      <Card.Body>
        <Heading as="h3" variant={"subtag"} size={"xs"}>
          {heading}
        </Heading>

        <Text my="3">{description}</Text>

        <Button variant="surface" size={"sm"} alignSelf={"stretch"}>
          Learn more
        </Button>
      </Card.Body>
    </Card.Root>
  );
}
