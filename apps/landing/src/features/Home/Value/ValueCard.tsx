import {
  Text,
  Heading,
  Card,
  IconProps,
  AspectRatio,
  Box,
  Icon,
} from "@mutuals/ui";
import NextImage, { ImageProps } from "next/image";
import IconBox from "@/components/IconBox";
import { IoArrowUp } from "react-icons/io5";

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
  size = "md",
  image,
  ...props
}: ValueCardProps) {
  return (
    <Card.Root variant={variant} size={size} {...props}>
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

      {icon && (
        <Card.Header>
          <IconBox size={"sm"} bg={"bg.muted"} color={"fg.muted"}>
            <Icon>{icon}</Icon>
          </IconBox>
        </Card.Header>
      )}
      <Card.Body>
        <Heading as="h3" textStyle={"xl"}>
          {heading}
        </Heading>
        <Text color={"fg.muted"} mt={"4"}>
          {description}
        </Text>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
}
