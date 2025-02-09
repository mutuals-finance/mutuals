import { Stack, Card, Heading, Text, GridItemProps } from "@mutuals/ui";

interface FeatureCardProps extends GridItemProps {
  heading: string;
  description: string;
  index?: number;
}

export default function FeatureCard({
  heading,
  index: _,
  description,
  children,
  ...props
}: FeatureCardProps) {
  return (
    <Card.Root variant={"subtle"} size={"lg"} w={"full"} {...props}>
      <Card.Body
        as={Stack}
        direction={"column"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        gap={"2"}
      >
        {children}
        <Heading as={"h3"} size={"xs"} variant={"subtag"}>
          {heading}
        </Heading>

        <Text>{description}</Text>
      </Card.Body>
    </Card.Root>
  );
}
