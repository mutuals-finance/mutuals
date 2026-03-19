import {
  AspectRatio,
  Card,
  Heading,
  Icon,
  type IconProps,
  Text,
} from "@mutuals/ui";
import NextImage, { type ImageProps } from "next/image";
import IconBox from "@/components/icon-box";

interface ValueCardProps extends Card.RootProps {
  description: string;
  heading: string;
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
    <Card.Root bg={bg} size={size} variant={variant} {...props}>
      {image && (
        <Card.Header>
          <AspectRatio
            overflow={"hidden"}
            position={"relative"}
            ratio={16 / 9}
            rounded={"2xl"}
          >
            <NextImage alt={description} fill={true} src={image} />
          </AspectRatio>
        </Card.Header>
      )}

      {icon && (
        <Card.Header>
          <IconBox
            bg={"colorPalette.subtle"}
            color={"colorPalette.fg"}
            size={"sm"}
          >
            <Icon>{icon}</Icon>
          </IconBox>
        </Card.Header>
      )}
      <Card.Body>
        <Heading as="h3" textStyle={"xl"}>
          {heading}
        </Heading>
        <Text color={"fg.muted"} mt={"4"} textStyle="sm">
          {description}
        </Text>
      </Card.Body>
    </Card.Root>
  );
}
