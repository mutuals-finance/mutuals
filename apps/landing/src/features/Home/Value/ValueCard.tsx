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
  bg = "transparent",
  size = "md",
  image,
  ...props
}: ValueCardProps) {
  return (
    <Card.Root
      variant={variant}
      bg={bg}
      size={size}
      overflow="hidden"
      {...props}
    >
      {image && (
        <AspectRatio ratio={16 / 9} position={"relative"}>
          <NextImage src={image} alt={description} fill={true} />
        </AspectRatio>
      )}
      <Card.Body>
        <Heading as="h3" textStyle={"xl"} mb={"4"}>
          {heading}
        </Heading>
        <Text color={"fg.subtle"}>{description}</Text>
      </Card.Body>
    </Card.Root>
  );
}
