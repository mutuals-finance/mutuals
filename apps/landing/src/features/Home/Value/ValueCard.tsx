import { Text, Heading, Card, Icon, IconProps, Stack } from "@mutuals/ui";
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
          <Stack direction={"row"} alignItems={"flex-end"}>
            <Heading as="h3" size={"2xl"}>
              {heading}
            </Heading>

            <IconBox color={"fg.muted"} bg="gray.muted" size={"xs"} ml={"auto"}>
              <Icon>{icon}</Icon>
            </IconBox>
          </Stack>
        </Card.Header>
      )}

      <Card.Body>
        <Text color={"fg.muted"}>{description}</Text>
      </Card.Body>
    </Card.Root>
  );
}
