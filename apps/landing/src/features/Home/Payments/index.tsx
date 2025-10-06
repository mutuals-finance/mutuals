"use client";

import {
  Box,
  Container,
  AspectRatio,
  Stack,
  Heading,
  Text,
  Bleed,
  ButtonGroup,
  IconButton,
  Button,
} from "@mutuals/ui";
import SectionHeader from "@/features/Shell/SectionHeader";
import NextImage from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import payments from "./items";
import { useTime, useTransform, useMotionValueEvent } from "framer-motion";
import { useCallback, useState } from "react";

export default function HomePayments() {
  const duration = 10000;
  const time = useTime();

  const [selectionTime, setSelectionTime] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Compute the current index based on time since last manual selection
  const activeMotionIndex = useTransform(time, (latest) => {
    const elapsed = latest - selectionTime;
    const cycles = Math.floor(elapsed / duration);
    return (startIndex + cycles) % payments.length;
  });

  useMotionValueEvent(activeMotionIndex, "change", (latest) => {
    setActiveIndex(latest);
  });

  const onSelectIndex = useCallback(
    (index: number) => {
      setStartIndex(index);
      setSelectionTime(time.get());
      setActiveIndex(index);
    },
    [time],
  );

  const activePayment = payments[activeIndex];
  return (
    <Box my="32">
      <Container maxW="7xl">
        <SectionHeader label={"Flexible Setup"}>
          Payments For Every Use Case
        </SectionHeader>

        <Bleed inline={{ base: "6", lg: "0" }}>
          <Box position={"relative"}>
            <AspectRatio ratio={{ base: 4 / 3, md: 7 / 3 }}>
              <Stack
                direction={"row"}
                flex={"1"}
                gap={{ base: "0.5", md: "2" }}
              >
                {payments.map(({ bgImage, image, tag = "" }, i) => {
                  const isActive = i == activeIndex;

                  return (
                    <Stack
                      key={tag}
                      onClick={() => !isActive && onSelectIndex(i)}
                      _hover={{ opacity: isActive ? 1 : 0.9 }}
                      transition="opacity"
                      transitionDuration="fastest"
                      transitionTimingFunction="ease-in-smooth"
                      cursor={isActive ? "default" : "pointer"}
                      flex={{
                        base: isActive ? "1" : "0 2%",
                        md: isActive ? "1" : "0 2%",
                      }}
                      align={"center"}
                      justify={"center"}
                      position={"relative"}
                      p={isActive ? "2" : "0"}
                      roundedRight={{
                        base: "0",
                        lg: i >= payments.length - 1 ? "2xl" : "none",
                      }}
                      roundedLeft={{ base: "0", lg: i <= 0 ? "2xl" : "none" }}
                      overflow={"hidden"}
                      h={"full"}
                    >
                      <NextImage
                        src={bgImage}
                        alt={tag}
                        fill={true}
                        priority={true}
                        style={{ objectFit: "cover" }}
                      />
                      {isActive && (
                        <Box
                          position={"relative"}
                          rounded={"2xl"}
                          overflow={"hidden"}
                        >
                          <NextImage
                            src={image}
                            alt={tag + "image"}
                            width={1200}
                            style={{
                              maxWidth: "36rem",
                              width: "100%",
                              height: "auto",
                            }}
                          />
                        </Box>
                      )}
                    </Stack>
                  );
                })}
              </Stack>
            </AspectRatio>
            <Box
              position={"absolute"}
              bottom={{ base: "4", md: "6" }}
              right={{ base: "4", md: "6" }}
              bg={"bg/40"}
              css={{
                backdropFilter: "blur(12px)",
              }}
              rounded={"2xl"}
            >
              <ButtonGroup size={"sm"} variant="ghost" attached>
                <IconButton
                  onClick={() =>
                    onSelectIndex(
                      (activeIndex - 1 + payments.length) % payments.length,
                    )
                  }
                >
                  <IoChevronBack />
                </IconButton>

                <IconButton
                  onClick={() =>
                    onSelectIndex((activeIndex + 1) % payments.length)
                  }
                >
                  <IoChevronForward />
                </IconButton>
              </ButtonGroup>
            </Box>
          </Box>
        </Bleed>

        <Stack
          gap={"4"}
          maxW={"2xl"}
          mt={"6"}
          px={{ md: "12" }}
          alignItems={"flex-start"}
        >
          <Heading as="h3" textStyle={{ base: "3xl", md: "4xl" }}>
            {activePayment?.tag}
          </Heading>

          <Text textStyle={"lg"} color={"fg.subtle"}>
            {activePayment?.description}
          </Text>

          <Button variant={"surface"} size={"lg"}>
            Explore the use case
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
