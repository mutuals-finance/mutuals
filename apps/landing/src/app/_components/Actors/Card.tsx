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
  Box,
} from "@mutuals/ui";
import NextImage, { ImageProps } from "next/image";
import { IoCheckboxOutline, IoArrowUpCircle } from "react-icons/io5";
import { AnimatePresence, EventInfo } from "framer-motion";

export interface ActorCardProps extends Card.RootProps {
  title: string;
  description: string;
  benefits?: string[];
  image?: ImageProps["src"];
  iconProps?: IconProps;
  buttonProps?: ButtonProps;
  benefitsProps?: List.RootProps;
  animate?: "grow" | "shrink";
  onHoverStart?: (event: MouseEvent, info: EventInfo) => void;
  onHoverEnd?: (event: MouseEvent, info: EventInfo) => void;
}

export default function ActorCard({
  title,
  description,
  benefits,
  animate,
  iconProps,
  buttonProps,
  benefitsProps,
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
        variant={"subtle"}
        overflow="hidden"
        size={"lg"}
        w={"full"}
        direction={{ base: "column", sm: "row" }}
        gap={"6"}
        minH={{ lg: "2xl" }}
        {...props}
      >
        <Stack flex={"1"} gap={"0"} maxW={{ sm: "xl" }}>
          <MotionBox
            fontSize={"4xl"}
            animate={animate}
            variants={useBreakpointValue({
              lg: {
                shrink: {
                  fontSize: "var(--chakra-font-sizes-4xl)",
                },
                grow: {
                  fontSize: "var(--chakra-font-sizes-6xl)",
                },
              },
            })}
          >
            <Card.Header
              as={Stack}
              px={{ base: "6", lg: "12" }}
              pt={{ base: "6", lg: "12" }}
              pb={"0"}
            >
              <Stack
                justifyContent={{ base: "space-between", lg: "unset" }}
                direction={{ base: "row", lg: "column" }}
                gap={"3"}
              >
                <Heading fontSize={"inherit"} mt={{ base: "-1", lg: "unset" }}>
                  {title}
                </Heading>
                <Icon
                  fontSize={{ base: "1.2em", lg: "inherit" }}
                  asChild
                  transform={"rotate(45deg)"}
                  order={{ lg: "-1" }}
                  {...iconProps}
                >
                  <IoArrowUpCircle />
                </Icon>
              </Stack>
            </Card.Header>
          </MotionBox>

          <Card.Body
            as={Stack}
            flex={"1"}
            gap={"6"}
            px={{ base: "6", lg: "12" }}
            pt={{ base: "3", lg: "3" }}
            pb={{ base: "6", lg: "6" }}
            justifyContent={"space-between"}
          >
            <Text fontSize="lg" maxW={{ sm: "xs" }}>
              {description}
            </Text>

            {benefits && (
              <AnimatePresence>
                {isGrown && (
                  <MotionBox
                    maxW={{ sm: "sm" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <List.Root
                      gap={"1"}
                      color={"fg/60"}
                      variant="plain"
                      {...benefitsProps}
                    >
                      {benefits?.map((b) => (
                        <List.Item key={b} as={Flex} alignItems={"flex-start"}>
                          <List.Indicator asChild w="5" h={"5"}>
                            <IoCheckboxOutline />
                          </List.Indicator>

                          <Text fontWeight="medium">{b}</Text>
                        </List.Item>
                      ))}
                    </List.Root>
                  </MotionBox>
                )}
              </AnimatePresence>
            )}
          </Card.Body>

          <Card.Footer
            as={Stack}
            gap={"6"}
            alignItems={"flex-start"}
            px={{ base: "6", lg: "12" }}
            pb={{ base: "6", lg: "12" }}
            pt={"0"}
          >
            <Button w={{ base: "full", lg: "auto" }} {...buttonProps}>
              Get Started For Free
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
                top={{ lg: "0" }}
                right={{ lg: "0" }}
                h={{ base: "sm", lg: "full" }}
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
                    objectFit: isLargerLg ? "contain" : "cover",
                    objectPosition: isLargerLg ? "top right" : "center top",
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
