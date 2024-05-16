import type { CardProps, FlexProps } from '@chakra-ui/react';
import { Button, Card, CardBody, Heading, Stack, Text } from '@chakra-ui/react';
import type { ImageProps } from 'next/image';

interface ActorCardProps extends CardProps {
  title: string;
  subtitle: string;
  description: string;
  href?: string;
  image?: ImageProps['src'];
  iconProps?: FlexProps;
}

export default function ActorCard({
  title,
  subtitle,
  description,
  image,
  ...props
}: ActorCardProps) {
  return (
    <Card variant="outline" size="lg" {...props}>
      <CardBody as={Stack} gap={{ base: '3', lg: '6' }}>
        <Text variant="tag">{subtitle}</Text>
        <Heading size="lg">{title}</Heading>
        <Text color="color.2" fontSize="lg">
          {description}
        </Text>
        <Button variant="blackWhite">Get Started</Button>
      </CardBody>
    </Card>
  );
}
