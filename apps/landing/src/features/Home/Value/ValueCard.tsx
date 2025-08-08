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
  variant = "outline",
  bg = "transparent",
  size = "md",
  ...props
}: ValueCardProps) {
  return (
    <Card.Root variant={variant} bg={bg} size={size} {...props}>
      <Card.Body>
        {!!icon && (
          <IconBox color={"fg.subtle"} bg="bg.muted" size={"xs"} mb={"4"}>
            <Icon>{icon}</Icon>
          </IconBox>
        )}
        <Heading as="h3" textStyle={"xl"} mb={"4"}>
          {heading}
        </Heading>
        <Text color={"fg.muted"}>{description}</Text>
      </Card.Body>
    </Card.Root>
  );
}
