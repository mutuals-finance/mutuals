import { CardProps } from "@splitfi/ui";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Stack,
  Text,
  ListItem,
  ButtonProps,
  IconProps,
  Flex,
  CardFooter,
  Icon,
  List,
  ListIcon,
  Heading,
} from "@splitfi/ui";
import NextImage, { ImageProps } from "next/image";
import { IoCheckbox, IoArrowUpCircle } from "react-icons/io5";
import AnimationBox from "@/components/Animation/Box";
import ownersImage from "@/assets/owners-product-slider.webp";

export interface ActorCardProps extends CardProps {
  title: string;
  description: string;
  benefits?: string[];
  image?: ImageProps["src"];
  iconProps?: IconProps;
  buttonProps?: ButtonProps;
  animate?: "grow" | "shrink";
}

export default function ActorCard({
  title,
  description,
  benefits,
  animate,
  iconProps,
  buttonProps,
  ...props
}: ActorCardProps) {
  return (
    <AnimationBox
      display={"flex"}
      alignItems={"stretch"}
      justifyContent={"stretch"}
      animate={animate}
      variants={{
        shrink: {
          flex: "0 33%",
        },
        grow: {
          flex: "1",
        },
      }}
    >
      <Card
        variant="filled"
        overflow="hidden"
        size={"lg"}
        w={"full"}
        direction={{ base: "column", sm: "row" }}
        gap={"6"}
        {...props}
      >
        <Stack gap={"0"}>
          <CardHeader pb={"0"}>
            <AnimationBox
              animate={animate}
              variants={{
                shrink: {
                  fontSize: "var(--chakra-fontSizes-5xl)",
                },
                grow: {
                  fontSize: "var(--chakra-fontSizes-6xl)",
                },
              }}
            >
              <Icon
                as={IoArrowUpCircle}
                fontSize={"inherit"}
                transform={"rotate(45deg)"}
                {...iconProps}
              />
            </AnimationBox>

            <AnimationBox
              animate={animate}
              variants={{
                shrink: {
                  fontSize: "var(--chakra-fontSizes-3xl)",
                },
                grow: {
                  fontSize: "var(--chakra-fontSizes-5xl)",
                },
              }}
            >
              <Heading fontSize={"inherit"}>{title}</Heading>
            </AnimationBox>
          </CardHeader>

          <CardBody
            as={Stack}
            flex={"1"}
            pb={"0"}
            gap={"6"}
            justifyContent={"flex-end"}
          >
            <Text fontSize="lg">{description}</Text>

            {benefits && (
              <AnimationBox
                animate={animate}
                mt={"auto"}
                pt={"24"}
                variants={{
                  shrink: {
                    display: "none",
                  },
                  grow: {
                    display: "block",
                  },
                }}
              >
                <List spacing={"1"}>
                  {benefits?.map((b) => (
                    <ListItem key={b} as={Flex} alignItems={"flex-start"}>
                      <ListIcon w="5" h={"5"} as={IoCheckbox} mt={"0.5"} />
                      <Text>{b}</Text>
                    </ListItem>
                  ))}
                </List>
              </AnimationBox>
            )}
          </CardBody>

          <CardFooter as={Stack} gap={"6"} align={"flex-start"}>
            <Button size={"lg"} rounded={"full"} {...buttonProps}>
              Start For Free
            </Button>
          </CardFooter>
        </Stack>
        <AnimationBox
          animate={animate}
          w={"full"}
          position={"relative"}
          maxW={{ base: "100%", sm: "330px" }}
          variants={{
            shrink: {
              display: "none",
            },
            grow: {
              display: "block",
            },
          }}
        >
          <NextImage
            src={ownersImage}
            alt={"SplitFi for Project Owners"}
            fill={true}
            style={{ objectFit: "contain", objectPosition: "top right" }}
          />
        </AnimationBox>
      </Card>
    </AnimationBox>
  );
}
