import { Text, Heading, Card, IconProps, AspectRatio } from "@mutuals/ui";
import NextImage, { ImageProps } from "next/image";

interface ValueCardProps extends Card.RootProps {
  heading: string;
  description: string;
  icon?: IconProps["children"];
  image?: ImageProps["src"];
}

export default function ValueCard({
  icon,
  heading,
  description,
  variant = "outline",
  size = "sm",
  image,
  ...props
}: ValueCardProps) {
  return (
    <Card.Root variant={variant} size={size} overflow="hidden" {...props}>
      {image && (
        <Card.Header>
          <AspectRatio
            ratio={16 / 9}
            position={"relative"}
            rounded={"2xl"}
            overflow={"hidden"}
          >
            <NextImage src={image} alt={description} fill={true} />
          </AspectRatio>
        </Card.Header>
      )}

      <Card.Body>
        <Heading as="h3" textStyle={"xl"}>
          {heading}
        </Heading>
      </Card.Body>
      <Card.Footer>
        {" "}
        <Text color={"fg.subtle"}>{description}</Text>
      </Card.Footer>
    </Card.Root>
  );
}
