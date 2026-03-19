"use client";

import {
  Button,
  type ButtonProps,
  Card,
  Flex,
  type FlexProps,
  Heading,
  Icon,
  type IconProps,
  Link,
  type List,
  MotionBox,
  Stack,
  Text,
  useBreakpointValue,
} from "@mutuals/ui";
import { AnimatePresence, type EventInfo, MotionConfig } from "framer-motion";
import NextImage, { type ImageProps } from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

export interface ActorCardProps extends Card.RootProps {
  animate?: "grow" | "shrink";
  benefit?: string;
  benefitsProps?: List.RootProps;
  buttonProps?: ButtonProps;
  description: string;
  iconBoxProps?: FlexProps;
  iconProps?: IconProps;
  image?: ImageProps["src"];
  onHoverEnd?: (event: MouseEvent, info: EventInfo) => void;
  onHoverStart?: (event: MouseEvent, info: EventInfo) => void;
  title: string;
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
      animate={animate}
      asChild={true}
      flex={"1 auto"}
      justifyContent={"stretch"}
      onHoverEnd={onHoverEnd}
      onHoverStart={onHoverStart}
      variants={useBreakpointValue({
        lg: {
          shrink: {
            width: "54%",
            transition: { type: "tween", duration: 0.2 },
          },
          grow: {
            width: "100%",
            transition: { type: "tween", duration: 0.2 },
          },
        },
      })}
      w={"full"}
    >
      <Card.Root
        direction={{ base: "column", sm: "row" }}
        gap={"0"}
        minH={{ lg: "32rem" }}
        size={"md"}
        variant={"outline"}
        w={"full"}
        {...props}
      >
        <MotionConfig transition={{ type: "tween", duration: 0.2 }}>
          <Stack flex={"1"} gap={"0"} maxW={{ sm: "26rem" }}>
            <MotionBox
              animate={animate}
              fontSize={"3xl"}
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
              <Card.Header pt={{ mdDown: "0" }}>
                <Stack direction={"column"} gap={"3"}>
                  <Flex
                    alignItems={"center"}
                    bg={"bg.inverted"}
                    color={"fg.inverted"}
                    h={"1.6em"}
                    hideBelow="md"
                    justifyContent={"center"}
                    rounded={"0.28em"}
                    w={"1.6em"}
                    {...iconBoxProps}
                  >
                    <Icon fontSize={"0.7em"} {...iconProps}>
                      <LuArrowUpRight />
                    </Icon>
                  </Flex>

                  <Heading
                    mt="6"
                    textStyle="xs"
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

                  <Heading
                    fontSize={"inherit"}
                    lineHeight={"1.12"}
                    maxW={"12em"}
                  >
                    {title}
                  </Heading>
                </Stack>
              </Card.Header>
            </MotionBox>

            <Card.Body>
              <Stack flex={"1"} gap={"6"} justifyContent={"flex-end"}>
                {benefit && (
                  <AnimatePresence>
                    {isGrown && (
                      <MotionBox
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        maxW={{ sm: "sm" }}
                      >
                        <Text color={"fg.muted"}>{benefit}</Text>
                      </MotionBox>
                    )}
                  </AnimatePresence>
                )}
              </Stack>
            </Card.Body>

            <Card.Footer>
              <Link
                arrow={false}
                asChild={true}
                external={true}
                href={"https://docs.mutuals.finance/"}
                w={{ base: "full", lg: "auto" }}
              >
                <Button
                  size="lg"
                  variant={"subtle"}
                  w={{ base: "full", lg: "auto" }}
                  {...buttonProps}
                >
                  Learn More
                </Button>
              </Link>
            </Card.Footer>
          </Stack>
          {image && (
            <AnimatePresence>
              {isGrown && (
                <MotionBox
                  animate={{ opacity: 1 }}
                  bottom={{ lg: "6" }}
                  exit={{ opacity: 0 }}
                  h={{ base: "xs", lg: "unset" }}
                  initial={{ opacity: 0 }}
                  maxW={{ base: "full", sm: "2xs", lg: "xs" }}
                  order={"-1"}
                  overflow={"hidden"}
                  position={{ base: "relative", lg: "absolute" }}
                  right={{ lg: "6" }}
                  rounded={"l3"}
                  top={{ lg: "6" }}
                  w={"full"}
                >
                  <NextImage
                    alt={`Mutuals for ${title}`}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={image}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                  />
                </MotionBox>
              )}
            </AnimatePresence>
          )}
        </MotionConfig>
      </Card.Root>
    </MotionBox>
  );
}
