import type { CardProps, FlexProps, As } from "@splitfi/ui";
import { Card, CardBody, Heading, Icon, Stack, Text } from "@splitfi/ui";
import type { ImageProps } from "next/image";

interface FeatureCardProps extends CardProps {
  heading: string;
  description: string;
  icon?: As;
  href?: string;
  image?: ImageProps["src"];
  iconProps?: FlexProps;
}
export default function FeatureCard({
  heading,
  description,
  icon,
  image,
  ...props
}: FeatureCardProps) {
  return (
    <Card variant="outline" {...props}>
      <CardBody as={Stack} spacing={3}>
        <Stack spacing={2} direction="row" alignItems="flex-start">
          {!!icon && (
            <Icon as={icon} boxSize={8} bg="bg.2" p="2" rounded="md" />
          )}
          <Heading size="sm" mt="1.5">
            {heading}
          </Heading>
        </Stack>
        <Text color="color.2">{description}</Text>
      </CardBody>
    </Card>
  );
}
