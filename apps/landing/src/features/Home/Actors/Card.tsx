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
  Link,
} from "@mutuals/ui";
import NextImage, { ImageProps } from "next/image";
import { IoArrowUp } from "react-icons/io5";
import { AnimatePresence, EventInfo, MotionConfig } from "framer-motion";
import { itemVariants } from "@/components/MotionBoxWrapper";

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
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={itemVariants}
      asChild={true}
    >
      <MotionBox
        alignItems={"stretch"}
        justifyContent={"stretch"}
        animate={animate}
        flex={"1 auto"}
        w={"full"}
        asChild={true}
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
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
      >
        <Card.Root
          size={"md"}
          w={"full"}
          direction={{ base: "column", sm: "row" }}
          gap={"0"}
          minH={{ lg: "29rem" }}
          variant={"outline"}
          {...props}
        >
          <MotionConfig transition={{ type: "tween", duration: 0.2 }}>
            <Stack flex={"1"} gap={"0"} maxW={{ sm: "26rem" }}>
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
                <Card.Header pt={{ mdDown: "0" }}>
                  <Stack direction={"column"} gap={"3"}>
                    <Flex
                      hideBelow="md"
                      w={"1.6em"}
                      h={"1.6em"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      bg={"bg.inverted"}
                      color={"fg.inverted"}
                      rounded={"0.28em"}
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

                    <Heading
                      maxW={"12em"}
                      fontSize={"inherit"}
                      lineHeight={"1.12"}
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
                          maxW={{ sm: "sm" }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
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
                  href={"https://docs.mutuals.finance/"}
                  external={true}
                  arrow={false}
                  asChild={true}
                >
                  <Button
                    size="lg"
                    rounded={"full"}
                    w={{ base: "full", lg: "auto" }}
                    variant={"subtle"}
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
                    position={{ base: "relative", lg: "absolute" }}
                    w={"full"}
                    order={"-1"}
                    maxW={{ base: "full", sm: "2xs", lg: "xs" }}
                    right={{ lg: "6" }}
                    top={{ lg: "6" }}
                    bottom={{ lg: "6" }}
                    h={{ base: "2xs", lg: "unset" }}
                    rounded={"l3"}
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
          </MotionConfig>
        </Card.Root>
      </MotionBox>
    </MotionBox>
  );
}
