"use client";

import {
  Button,
  useBreakpointValue,
  Card,
  Stack,
  Text,
  ButtonProps,
  IconProps,
  Flex,
  Icon,
  MotionBox,
  List,
  Heading,
  FlexProps,
} from "@mutuals/ui";
import NextImage, { ImageProps } from "next/image";
import { IoArrowUp } from "react-icons/io5";
import { AnimatePresence, EventInfo } from "framer-motion";

export interface ActorCardProps extends Card.RootProps {
  title: string;
  description: string;
  benefit?: string;
  image?: ImageProps["src"];
  iconProps?: IconProps;
  iconBoxProps?: FlexProps;
  buttonProps?: ButtonProps;
  benefitsProps?: List.RootProps;
  animate?: "grow" | "shrink";
  onHoverStart?: (event: MouseEvent, info: EventInfo) => void;
  onHoverEnd?: (event: MouseEvent, info: EventInfo) => void;
}

export default function ActorCard({
  title,
  description,
  benefit,
  animate,
  iconProps,
  iconBoxProps,
  buttonProps,
  benefitsProps: _,
  onHoverStart,
  onHoverEnd,
  image,
  ...props
}: ActorCardProps) {
  const isLargerLg = useBreakpointValue({ base: false, lg: true });
  const isGrown = !isLargerLg || animate === "grow";

  return (
    <MotionBox
      alignItems={"stretch"}
      justifyContent={"stretch"}
      animate={animate}
      flex={"1 auto"}
      w={"full"}
      variants={useBreakpointValue({
        lg: {
          shrink: {
            width: "54%",
          },
          grow: {
            width: "100%",
          },
        },
      })}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <Card.Root
        size={"lg"}
        w={"full"}
        direction={{ base: "column", sm: "row" }}
        gap={"6"}
        minH={{ lg: "lg" }}
        variant={"outline"}
        bg={"bg"}
        {...props}
      >
        <Stack flex={"1"} gap={"0"} maxW={{ sm: "xl" }}>
          <MotionBox
            fontSize={"3xl"}
            animate={animate}
            variants={useBreakpointValue({
              lg: {
                shrink: {
                  fontSize: "var(--chakra-font-sizes-xl)",
                },
                grow: {
                  fontSize: "var(--chakra-font-sizes-3xl)",
                },
              },
            })}
          >
            <Card.Header>
              <Stack direction={"column"} gap={"3"}>
                <Flex
                  hideBelow="md"
                  w={"1.6em"}
                  h={"1.6em"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bg={"bg.inverted"}
                  color={"fg.inverted"}
                  rounded={"0.4em"}
                  {...iconBoxProps}
                >
                  <Icon
                    asChild
                    transform={"rotate(45deg)"}
                    fontSize={{ base: "0.8em", lg: "0.8em" }}
                    {...iconProps}
                  >
                    <IoArrowUp />
                  </Icon>
                </Flex>

                <Heading
                  textStyle="xs"
                  mt="6"
                  {...{
                    color: "fg.subtle",
                    fontFamily: "heading",
                    textTransform: "uppercase",
                    letterSpacing: "widest",
                    lineHeight: "widest",
                    fontWeight: "medium",
                  }}
                >
                  {description}
                </Heading>

                <Heading maxW={"sm"} fontSize={"inherit"} lineHeight={"1.2"}>
                  {title}
                </Heading>
              </Stack>
            </Card.Header>
          </MotionBox>

          <Card.Body
            as={Stack}
            flex={"1"}
            gap={"6"}
            justifyContent={"flex-end"}
          >
            {benefit && (
              <AnimatePresence>
                {isGrown && (
                  <MotionBox
                    maxW={{ sm: "sm" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Text color={"fg.subtle"} textStyle={"lg"}>
                      {benefit}
                    </Text>
                  </MotionBox>
                )}
              </AnimatePresence>
            )}
          </Card.Body>

          <Card.Footer as={Stack} gap={"6"} alignItems={"flex-start"}>
            <Button
              size="xl"
              w={{ base: "full", lg: "auto" }}
              variant={"surface"}
              rounded={"4xl"}
              {...buttonProps}
            >
              Learn More
            </Button>
          </Card.Footer>
        </Stack>
        {image && (
          <AnimatePresence>
            {isGrown && (
              <MotionBox
                position={{ base: "relative", lg: "absolute" }}
                w={"full"}
                order={"-1"}
                maxW={{ base: "full", sm: "2xs", lg: "xs" }}
                right={{ lg: "6" }}
                top={{ lg: "6" }}
                bottom={{ lg: "6" }}
                h={{ base: "sm", lg: "unset" }}
                rounded={"lg"}
                overflow={"hidden"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <NextImage
                  src={image}
                  alt={"Mutuals for " + title}
                  fill={true}
                  style={{
                    objectFit: isLargerLg ? "cover" : "cover",
                    objectPosition: isLargerLg ? "center" : "center top",
                  }}
                />
              </MotionBox>
            )}
          </AnimatePresence>
        )}
      </Card.Root>
    </MotionBox>
  );
}
