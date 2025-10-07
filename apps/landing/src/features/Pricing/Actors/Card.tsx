import {
  Card,
  Stack,
  ButtonProps,
  IconProps,
  Heading,
  FlexProps,
  AspectRatio,
  Text,
} from "@mutuals/ui";
import NextImage, { ImageProps } from "next/image";

export interface PricingActorsCardProps extends Card.RootProps {
  title: string;
  description: string;
  image?: ImageProps["src"];
  iconProps?: IconProps;
  iconBoxProps?: FlexProps;
  buttonProps?: ButtonProps;
}

export default function PricingActorsCard({
  title,
  description,
  iconProps,
  iconBoxProps,
  buttonProps,
  image,
  ...props
}: PricingActorsCardProps) {
  return (
    <Card.Root size={"sm"} variant={"subtle"} bg={"transparent"} {...props}>
      <Card.Header>
        {image && (
          <AspectRatio
            w={"full"}
            ratio={16 / 9}
            position={"relative"}
            rounded={"2xl"}
            overflow={"hidden"}
          >
            <NextImage
              src={image}
              alt={"Mutuals pricing for " + title}
              fill={true}
            />
          </AspectRatio>
        )}
      </Card.Header>

      <Card.Body>
        <Stack gap={"4"}>
          {/*<Flex
            hideBelow="md"
            w={"8"}
            h={"8"}
            alignItems={"center"}
            justifyContent={"center"}
            bg={"bg.inverted"}
            color={"fg.inverted"}
            rounded={"2xl"}
            {...iconBoxProps}
          >
            <Icon asChild transform={"rotate(45deg)"} {...iconProps}>
              <IoArrowUp />
            </Icon>
          </Flex>*/}

          <Heading fontWeight={"medium"} textStyle={"2xl"}>
            {title}
          </Heading>

          <Text color={"fg.muted"}>{description}</Text>
        </Stack>
      </Card.Body>

      {/*
      <Card.Footer>
        <Button
          size="lg"
          w={{ base: "full", lg: "auto" }}
          variant={"surface"}
          {...buttonProps}
        >
          Learn More
        </Button>
      </Card.Footer>
*/}
    </Card.Root>
  );
}
