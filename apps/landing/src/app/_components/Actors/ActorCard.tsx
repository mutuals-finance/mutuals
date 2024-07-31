"use client";

import {
  Button,
  CardProps,
  useBreakpointValue,
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
  MotionBox,
  Heading,
} from "@mutuals/ui";
import NextImage, { ImageProps } from "next/image";
import { IoCheckboxOutline, IoArrowUpCircle } from "react-icons/io5";
import { AnimatePresence, EventInfo } from "framer-motion";

export interface ActorCardProps extends CardProps {
  title: string;
  description: string;
  benefits?: string[];
  image?: ImageProps["src"];
  iconProps?: IconProps;
  buttonProps?: ButtonProps;
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
  onHoverStart,
  onHoverEnd,
  image,
  ...props
}: ActorCardProps) {
  const isLargerLg = useBreakpointValue({ base: false, lg: true });
  const isGrown = !isLargerLg || animate === "grow";

  return (
    <MotionBox
      display={"flex"}
      alignItems={"stretch"}
      justifyContent={"stretch"}
      animate={animate}
      flex={"1 auto"}
      w={"full"}
      variants={useBreakpointValue({
        lg: {
          shrink: {
            width: "52%",
          },
          grow: {
            width: "100%",
          },
        },
      })}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <Card
        variant="filled"
        overflow="hidden"
        size={"lg"}
        w={"full"}
        direction={{ base: "column", sm: "row" }}
        gap={"6"}
        minH={{ lg: "2xl" }}
        {...props}
      >
        <Stack gap={"0"} maxW={{ sm: "xl" }}>
          <MotionBox
            fontSize={"5xl"}
            animate={animate}
            variants={useBreakpointValue({
              lg: {
                shrink: {
                  fontSize: "var(--chakra-fontSizes-4xl)",
                },
                grow: {
                  fontSize: "var(--chakra-fontSizes-6xl)",
                },
              },
            })}
          >
            <CardHeader
              as={Stack}
              gap={"3"}
              direction={{ base: "row", lg: "column" }}
              px={{ base: "6", lg: "12" }}
              pt={{ base: "6", lg: "12" }}
              pb={"0"}
            >
              <Heading
                fontSize={"inherit"}
                lineHeight="1"
                mt={{ base: "1.5", lg: "unset" }}
              >
                {title}
              </Heading>

              <Icon
                as={IoArrowUpCircle}
                fontSize={{ base: "1.6em", lg: "inherit" }}
                transform={"rotate(45deg)"}
                order={{ lg: "-1" }}
                {...iconProps}
              />
            </CardHeader>
          </MotionBox>

          <CardBody
            as={Stack}
            flex={"1"}
            gap={"6"}
            px={{ base: "6", lg: "12" }}
            pt={{ base: "3", lg: "3" }}
            pb={{ base: "6", lg: "6" }}
            justifyContent={"space-between"}
          >
            <Text fontSize="xl" maxW={{ sm: "xs" }}>
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
                    <List spacing={"1"} color={"alpha.2"}>
                      {benefits?.map((b) => (
                        <ListItem key={b} as={Flex} alignItems={"flex-start"}>
                          <ListIcon
                            w="5"
                            h={"5"}
                            as={IoCheckboxOutline}
                            mt={"1"}
                          />
                          <Text fontWeight="500">{b}</Text>
                        </ListItem>
                      ))}
                    </List>
                  </MotionBox>
                )}
              </AnimatePresence>
            )}
          </CardBody>

          <CardFooter
            as={Stack}
            gap={"6"}
            align={"flex-start"}
            px={{ base: "6", lg: "12" }}
            pb={{ base: "6", lg: "12" }}
            pt={"0"}
          >
            <Button
              size={"lg"}
              w={{ base: "full", lg: "auto" }}
              {...buttonProps}
            >
              Get Started For Free
            </Button>
          </CardFooter>
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
      </Card>
    </MotionBox>
  );
}
